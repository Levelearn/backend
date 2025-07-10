// @ts-ignore
const bcrypt = require('bcrypt');

const userService = require("../services/UserService");
const userCourseService = require("../services/UserCourseService");
const userBadgeService = require("../services/UserBadgeService");
const UserTradeService = require("../services/UserTradeService");

const { validationResult } = require("express-validator");

function generateSalt() {
  return Math.random().toString(36).substring(2, 15);
}

function manualHashWithSalt(password, salt) {
  // 1. Gabungkan password dan salt
  const saltedPassword = password + salt;

  // 2. Padding Sederhana (menambahkan panjang input yang sudah di-salt)
  const inputBytes = new TextEncoder().encode(saltedPassword);
  const inputLength = inputBytes.length;
  const paddedInput = [...inputBytes, ...(new TextEncoder().encode(String(inputLength).padStart(8, '0')))];
  // Sekarang kita anggap ukuran blok adalah 4 byte

  // 3. Parsing ke Blok-Blok
  const blockSize = 4;
  const blocks = [];
  for (let i = 0; i < paddedInput.length; i += blockSize) {
    const block = paddedInput.slice(i, i + blockSize);
    blocks.push(block);
  }

  // 4. Inisialisasi Nilai Hash Awal (sangat sederhana)
  let hashValue = 0x12345678;

  // 5. Fungsi "Kompresi" Sederhana (operasi XOR dan penambahan)
  function simpleCompress(currentHash, block) {
    let blockValue = 0;
    for (let i = 0; i < block.length; i++) {
      blockValue = (blockValue << 8) | block[i];
    }
    currentHash ^= blockValue;
    currentHash = (currentHash + blockValue) & 0xFFFFFFFF; // Jaga dalam 32-bit
    return currentHash;
  }

  // Proses setiap blok
  for (const block of blocks) {
    hashValue = simpleCompress(hashValue, block);
  }

  // 6. Finalisasi Sederhana (konversi ke hexadecimal)
  const finalHash = hashValue.toString(16).padStart(8, '0');
  return finalHash;
}

// Controller untuk mendapatkan daftar user
const getAllUsers = async (req, res) => {
  const { role } = req.query;
  try {
    const users = await userService.getAllUsers(role);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller untuk mendapatkan user by id
const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const user = await userService.getUserById(id);

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Failed to get user with id ${id}`,
        details: error.message,
      });
    console.log(error.message);
  }
};

// Controller untuk membuat user baru
const createUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Input value tidak sesuai");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const { name,
        username, 
        password,
        role,
        student_id,
        student_point,
        student_course,
        student_badge,
        instructor_id,
        instructor_course,
        image
    } = req.body;

    // const hashedPassword = await bcrypt.hash(password, 10);

    // 1. Generate Salt
    const salt = generateSalt();

    // 2. Hash Password menggunakan manualHashWithSalt dengan salt
    const hashedPassword = manualHashWithSalt(password, salt);

    try {
        const newUser = await userService.createUser(
            name,
            username, 
            hashedPassword,
            role,
            student_id,
            student_point,
            student_course,
            student_badge,
            instructor_id,
            instructor_course,
            image,
            salt
        );

    const response = {
      message: `Successfully registered user ${name} as ${role}`,
      user: newUser,
    };
    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user", details: error.message });
    console.log(error.message);
  }
};

// Controller untuk update user by id
const updateUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Input value tidak sesuai");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

    const id = parseInt(req.params.id);
    
    const updateData = req.body;

    if(updateData.password) {
      
      const existingUser = await userService.getUserById(id);
      if (!existingUser || !existingUser.salt) {
        return res.status(400).json({ message: "User not found or salt missing" });
      }
      const salt = existingUser.salt;
      updateData.password = manualHashWithSalt(updateData.password, salt);
    }

    if (updateData.points) {
        updateData.points = parseInt(updateData.points);
    }
    if (updateData.totalCourses) {
        updateData.totalCourses = parseInt(updateData.totalCourses);
    }
    if (updateData.badges) {
        updateData.badges = parseInt(updateData.badges);
    }
    if (updateData.instructorCourses) {
        updateData.instructorCourses = parseInt(updateData.instructorCourses) || null; // Handle empty string
    }
    if (updateData.studentId) {
        updateData.studentId = String(updateData.studentId)
    }

  updateData.instructorCourses = updateData.instructorCourses
    ? parseInt(updateData.instructorCourses)
    : null;

  try {
    const updateUser = await userService.updateUser(id, updateData);
    res
      .status(200)
      .json({
        message: `Successfully updated ${updateData.name}'s data`,
        user: updateUser,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};


// Controller untuk delete user by id
const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deleteUser = await userService.deleteUser(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
    console.log(error.message);
  }
};

// SPECIAL CONTROLLERS

const getCoursesByUser = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const courses = await userCourseService.getCoursesByUser(userId);

    res.status(200).json(courses);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Failed to get courses in user ${userId}`,
        details: error.message,
      });
    console.log(error.message);
  }
};

const getBadgesByUser = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const badges = await userBadgeService.getBadgesByUser(userId);

    res.status(200).json(badges);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Failed to get badges in user ${userId}`,
        details: error.message,
      });
    console.log(error.message);
  }
};

const getTradesByUser = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const trades = await UserTradeService.getTradesByUser(userId);

    res.status(200).json(trades);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Failed to get badges in user ${userId}`,
        details: error.message,
      });
    console.log(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getTradesByUser,
  getCoursesByUser,
  getBadgesByUser,
};

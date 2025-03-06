// @ts-ignore
const bcrypt = require('bcrypt');

const userService = require("../services/UserService");
const userCourseService = require("../services/UserCourseService");
const userBadgeService = require("../services/UserBadgeService");

const { validationResult } = require("express-validator");

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

    const hashedPassword = await bcrypt.hash(password, 10);

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
            image
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
    
    if(updateData.password) {
      const hashedPassword = await bcrypt.hash(updateData.password, 10);
      updateData.password = hashedPassword;
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

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  //
  getCoursesByUser,
  getBadgesByUser,
};

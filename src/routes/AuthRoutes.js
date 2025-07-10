const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient.js')

const router = express.Router()

// Fungsi manualHashWithSalt (pastikan ini ada di file Anda)
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

router.post('/register', async (req, res) => {
    const { username, password, name } = req.body

    // encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8)

    // save the new user and hashed password to the db
    try {
        const user = await prisma.user.create({
            data : {
                username,
                password: hashedPassword,
                name,
                role: "ADMIN",
                studentId: "1920",
                points: 0,
                totalCourses: 0,
                badges: 0,
                instructorId: null,
                instructorCourses: null
            }
        })

        // now that we have a user, I want to add their first course for them
        // const defaultCourse = `Hello :) Add your first course!`
        
        // await prisma.course.create({
        //     data: {
        //         task: defaultCourse,
        //         userId: user.id
        //     }
        // })

        // create a token
        const token = jwt.sign({ id: result.lastInsertRowid }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503) 
    }
})

router.post('/login', async (req, res) => {

    const { username, password } = req.body

    try {
        const user = await prisma.user.findUniquSe({
            where: {
                username: usernameS
            }
        })

        if (!user) { 
            return res.status(404).send({ message: "User not found" }) }

        if (!user.salt) {
            return res.status(500).json({ message: "User salt not found" });
        }

        // Hash password yang dimasukkan menggunakan salt dari database
        const hashedPasswordAttempt = manualHashWithSalt(password, user.salt);

        // Bandingkan hash yang dihasilkan dengan hash yang tersimpan
        if (hashedPasswordAttempt !== user.password) {
            return res.status(403).json({ message: "Invalid password" });
        }
        console.log(user);

        const payload = {
            id: user.id,
            name: user.name,
            role: user.role
        }

        const expiresIn = 60 * 60 * 1;

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: expiresIn})
        res.json({
            data: {
                id: user.id,
                name: user.name,
                role: user.role
            },
            token: token
        })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }

})


module.exports = router;
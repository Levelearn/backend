const express = require('express');

const path = require('path');
const { dirname } = require('path');
const { fileURLToPath } = require('url');

const usersRoutes = require('./routes/users');

const authRoutes = require('./routes/authRoutes.js');
const authMiddleware = require('./middlewares/authMiddleware.js');
const userRoutes = require('./routes/UserRouter.js');
const courseRoutes = require('./routes/CourseRouter.js');
const enrollmentRoutes = require('./routes/EnrollmentRouter.js');

// Express Settings
const app = express();
app.use(express.json());
// const port = process.env.PORT || 4000

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// {{ start of testing }}

// app.use(express.json())
// app.use(express.static(path.join(__dirname, '../public')))

// app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'public', 'index.html'))
//     res.json({ message: "Nice" })
// })

// // Routes
// app.use('/auth', authRoutes)
// app.use('/courses', authMiddleware, courseRoutes)

// app.listen(port, () => {
//     console.log(`Server running on localhost: ${port}`);
// });

// {{ end of testing }}

app.use('/api', userRoutes);
app.use('/api', courseRoutes);
app.use('/api', enrollmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

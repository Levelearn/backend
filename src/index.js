const express = require('express');
const multer = require('multer');
const path = require('path');

const authRoutes = require('./routes/AuthRoutes.js');
const authMiddleware = require('./middlewares/AuthMiddleware.js');
const userRoutes = require('./routes/UserRouter.js');
const courseRoutes = require('./routes/CourseRouter.js');
const userCourseRoutes = require('./routes/UserCourseRouter.js');
const userChapterRoutes = require('./routes/UserChapterRouter.js');
const chapterRoutes = require('./routes/ChapterRouter.js');
const materialRoutes = require('./routes/MaterialRouter.js');
const assessmentRoutes = require('./routes/AssessmentRouter.js');
const assignmentRoutes = require('./routes/AssignmentRouter.js');
const badgeRoutes = require('./routes/BadgeRouter.js');
const userBadgeRoutes = require('./routes/UserBadgeRouter.js');

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'images'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const imageFilter = (req, file, cb) => {
    const allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Tipe file gambar tidak diizinkan!'), false);
    }
};

const uploadImage = multer({
    storage: imageStorage,
    fileFilter: imageFilter,
    limits: { fileSize: 10 * 1024 * 1024 }
}).single('image');

const pdfStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'pdfs')); 
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const pdfFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Tipe file PDF tidak diizinkan!'), false);
    }
};

const uploadPdf = multer({
    storage: pdfStorage,
    fileFilter: pdfFilter,
    limits: { fileSize: 20 * 1024 * 1024 } // 20MB (bisa disesuaikan)
}).single('pdf'); // Nama field formulir untuk PDF adalah 'pdf'

require('dotenv').config();

// Express Settings
const app = express();
app.use(express.json());

// app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));

app.use('/api', authRoutes);

// app.use('/api', authMiddleware);

app.use('/api', uploadImage, userRoutes);
app.use('/api', courseRoutes);
app.use('/api', chapterRoutes);
app.use('/api', materialRoutes);
app.use('/api', assessmentRoutes);
app.use('/api', assignmentRoutes);
app.use('/api', userCourseRoutes);
app.use('/api', uploadPdf, userChapterRoutes);
app.use('/api', badgeRoutes);
app.use('/api', userBadgeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*
  Warnings:

  - You are about to drop the `assessment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coursechapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `material` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userchapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usercourse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `assessment` DROP FOREIGN KEY `Assessment_chapter_id_fkey`;

-- DropForeignKey
ALTER TABLE `assignment` DROP FOREIGN KEY `Assignment_chapter_id_fkey`;

-- DropForeignKey
ALTER TABLE `material` DROP FOREIGN KEY `Material_chapter_id_fkey`;

-- DropTable
DROP TABLE `assessment`;

-- DropTable
DROP TABLE `assignment`;

-- DropTable
DROP TABLE `chapter`;

-- DropTable
DROP TABLE `course`;

-- DropTable
DROP TABLE `coursechapter`;

-- DropTable
DROP TABLE `material`;

-- DropTable
DROP TABLE `user`;

-- DropTable
DROP TABLE `userchapter`;

-- DropTable
DROP TABLE `usercourse`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('STUDENT', 'INSTRUCTOR', 'ADMIN') NOT NULL,
    `studentId` VARCHAR(191) NULL,
    `points` INTEGER NULL,
    `totalCourses` INTEGER NULL,
    `badges` INTEGER NULL,
    `instructorId` VARCHAR(191) NULL,
    `instructorCourses` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `courseId` INTEGER NOT NULL,
    `enrolledAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `user_courses_userId_idx`(`userId`),
    INDEX `user_courses_courseId_idx`(`courseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chapters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_chapters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseId` INTEGER NOT NULL,
    `chapterId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `course_chapters_courseId_idx`(`courseId`),
    INDEX `course_chapters_chapterId_idx`(`chapterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `materials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chapterId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `materials_chapterId_idx`(`chapterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assessments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chapterId` INTEGER NOT NULL,
    `instruction` VARCHAR(191) NOT NULL,
    `orderNumber` INTEGER NOT NULL,
    `questions` JSON NOT NULL,
    `answers` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `assessments_chapterId_idx`(`chapterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assignments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chapterId` INTEGER NOT NULL,
    `instruction` VARCHAR(191) NOT NULL,
    `fileUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `assignments_chapterId_idx`(`chapterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_chapters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `chapterId` INTEGER NOT NULL,
    `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    `materialDone` BOOLEAN NOT NULL DEFAULT false,
    `assessmentDone` BOOLEAN NOT NULL DEFAULT false,
    `assignmentDone` BOOLEAN NOT NULL DEFAULT false,
    `assessmentAnswer` JSON NULL,
    `assessmentGrade` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `user_chapters_userId_idx`(`userId`),
    INDEX `user_chapters_chapterId_idx`(`chapterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_chapters` ADD CONSTRAINT `course_chapters_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_chapters` ADD CONSTRAINT `course_chapters_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `materials` ADD CONSTRAINT `materials_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assessments` ADD CONSTRAINT `assessments_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignments` ADD CONSTRAINT `assignments_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_chapters` ADD CONSTRAINT `user_chapters_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_chapters` ADD CONSTRAINT `user_chapters_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

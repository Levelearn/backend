/*
  Warnings:

  - The primary key for the `course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `course` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `enrollment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `course_code` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_id` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_name` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructor_course` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructor_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_badge` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_course` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_point` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_userId_fkey`;

-- DropForeignKey
ALTER TABLE `enrollment` DROP FOREIGN KEY `Enrollment_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `enrollment` DROP FOREIGN KEY `Enrollment_userId_fkey`;

-- DropIndex
DROP INDEX `Course_userId_fkey` ON `course`;

-- AlterTable
ALTER TABLE `course` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    DROP COLUMN `userId`,
    ADD COLUMN `course_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `course_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `course_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`course_id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `instructor_course` INTEGER NOT NULL,
    ADD COLUMN `instructor_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `student_badge` INTEGER NOT NULL,
    ADD COLUMN `student_course` INTEGER NOT NULL,
    ADD COLUMN `student_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `student_point` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `user_role` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- DropTable
DROP TABLE `enrollment`;

-- CreateTable
CREATE TABLE `UserCourse` (
    `user_course_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `course_id` INTEGER NOT NULL,
    `enrollmentTime` DATETIME(3) NOT NULL,

    UNIQUE INDEX `UserCourse_user_course_id_key`(`user_course_id`),
    PRIMARY KEY (`user_course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chapter` (
    `chapter_id` INTEGER NOT NULL AUTO_INCREMENT,
    `chapter_name` VARCHAR(191) NOT NULL,
    `chapter_description` VARCHAR(191) NOT NULL,
    `chapter_level` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Chapter_chapter_id_key`(`chapter_id`),
    PRIMARY KEY (`chapter_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CourseChapter` (
    `course_chapter_id` INTEGER NOT NULL AUTO_INCREMENT,
    `course` INTEGER NOT NULL,
    `chapter` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CourseChapter_course_chapter_id_key`(`course_chapter_id`),
    PRIMARY KEY (`course_chapter_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Material` (
    `material_id` INTEGER NOT NULL AUTO_INCREMENT,
    `chapter_id` INTEGER NOT NULL,
    `material_name` VARCHAR(191) NOT NULL,
    `material_content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Material_material_id_key`(`material_id`),
    PRIMARY KEY (`material_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assessment` (
    `assess_id` INTEGER NOT NULL AUTO_INCREMENT,
    `chapter_id` INTEGER NOT NULL,
    `assess_instruction` VARCHAR(191) NOT NULL,
    `assess_order` INTEGER NOT NULL,
    `assess_question` JSON NOT NULL,
    `assess_answer` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Assessment_assess_id_key`(`assess_id`),
    PRIMARY KEY (`assess_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assignment` (
    `assign_id` INTEGER NOT NULL AUTO_INCREMENT,
    `chapter_id` INTEGER NOT NULL,
    `assign_instruction` VARCHAR(191) NOT NULL,
    `assign_file` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Assignment_assign_id_key`(`assign_id`),
    PRIMARY KEY (`assign_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserChapter` (
    `user_chapter_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `chapter_id` INTEGER NOT NULL,
    `chapter_status` BOOLEAN NOT NULL,
    `status_material` BOOLEAN NOT NULL,
    `status_assess` BOOLEAN NOT NULL,
    `status_assign` BOOLEAN NOT NULL,
    `asses_answer` JSON NOT NULL,
    `asses_grade` INTEGER NOT NULL,

    UNIQUE INDEX `UserChapter_user_chapter_id_key`(`user_chapter_id`),
    PRIMARY KEY (`user_chapter_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_user_id_key` ON `User`(`user_id`);

-- AddForeignKey
ALTER TABLE `Material` ADD CONSTRAINT `Material_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `Chapter`(`chapter_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assessment` ADD CONSTRAINT `Assessment_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `Chapter`(`chapter_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assignment` ADD CONSTRAINT `Assignment_chapter_id_fkey` FOREIGN KEY (`chapter_id`) REFERENCES `Chapter`(`chapter_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `course_chapters` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courseId` to the `chapters` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `course_chapters` DROP FOREIGN KEY `course_chapters_chapterId_fkey`;

-- DropForeignKey
ALTER TABLE `course_chapters` DROP FOREIGN KEY `course_chapters_courseId_fkey`;

-- AlterTable
ALTER TABLE `chapters` ADD COLUMN `courseId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `course_chapters`;

-- CreateIndex
CREATE INDEX `chapters_courseId_idx` ON `chapters`(`courseId`);

-- AddForeignKey
ALTER TABLE `chapters` ADD CONSTRAINT `chapters_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

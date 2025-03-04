/*
  Warnings:

  - You are about to drop the column `isCompleted` on the `user_chapters` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[courseId,chapterId]` on the table `badges` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `assessments` MODIFY `questions` JSON NULL;

-- AlterTable
ALTER TABLE `badges` ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user_chapters` DROP COLUMN `isCompleted`,
    ADD COLUMN `isStarted` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `badges_courseId_chapterId_key` ON `badges`(`courseId`, `chapterId`);

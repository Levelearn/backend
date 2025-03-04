/*
  Warnings:

  - You are about to drop the column `courseCheckpointId` on the `chapters` table. All the data in the column will be lost.
  - You are about to drop the column `courseCheckpointId` on the `courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `chapters` DROP FOREIGN KEY `chapters_courseCheckpointId_fkey`;

-- DropForeignKey
ALTER TABLE `courses` DROP FOREIGN KEY `courses_courseCheckpointId_fkey`;

-- DropIndex
DROP INDEX `chapters_courseCheckpointId_fkey` ON `chapters`;

-- DropIndex
DROP INDEX `courses_courseCheckpointId_fkey` ON `courses`;

-- AlterTable
ALTER TABLE `chapters` DROP COLUMN `courseCheckpointId`,
    ADD COLUMN `isCheckpoint` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `courses` DROP COLUMN `courseCheckpointId`;

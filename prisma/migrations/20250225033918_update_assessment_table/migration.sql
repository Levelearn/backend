/*
  Warnings:

  - You are about to drop the column `type` on the `assessments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `assessments` DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `courses` ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT '';

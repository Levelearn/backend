/*
  Warnings:

  - You are about to drop the column `answers` on the `assessments` table. All the data in the column will be lost.
  - You are about to drop the column `orderNumber` on the `assessments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `assessments` DROP COLUMN `answers`,
    DROP COLUMN `orderNumber`,
    ADD COLUMN `answersMC` JSON NULL,
    ADD COLUMN `answersTF` BOOLEAN NULL,
    ADD COLUMN `options` JSON NULL,
    ADD COLUMN `type` ENUM('MULTIPLE', 'TRUEFALSE') NOT NULL DEFAULT 'TRUEFALSE';

-- AlterTable
ALTER TABLE `user_chapters` ADD COLUMN `submission` VARCHAR(191) NULL;

/*
  Warnings:

  - You are about to drop the column `answersMC` on the `assessments` table. All the data in the column will be lost.
  - You are about to drop the column `answersTF` on the `assessments` table. All the data in the column will be lost.
  - You are about to alter the column `type` on the `assessments` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `assessments` DROP COLUMN `answersMC`,
    DROP COLUMN `answersTF`,
    ADD COLUMN `answers` JSON NULL,
    MODIFY `type` ENUM('MC', 'TF') NOT NULL DEFAULT 'TF';

/*
  Warnings:

  - You are about to drop the column `isPurchased` on the `badges` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `badges` DROP COLUMN `isPurchased`;

-- AlterTable
ALTER TABLE `user_badges` ADD COLUMN `isPurchased` BOOLEAN NOT NULL DEFAULT false;

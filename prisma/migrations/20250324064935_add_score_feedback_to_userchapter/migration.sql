-- AlterTable
ALTER TABLE `user_chapters` ADD COLUMN `assignmentFeedback` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `assignmentScore` INTEGER NOT NULL DEFAULT 0;

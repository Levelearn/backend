-- AlterTable
ALTER TABLE `user_courses` ADD COLUMN `currentChapter` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `progress` INTEGER NOT NULL DEFAULT 0;

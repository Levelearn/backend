-- DropForeignKey
ALTER TABLE `assessments` DROP FOREIGN KEY `assessments_chapterId_fkey`;

-- DropForeignKey
ALTER TABLE `assignments` DROP FOREIGN KEY `assignments_chapterId_fkey`;

-- DropForeignKey
ALTER TABLE `badges` DROP FOREIGN KEY `badges_chapterId_fkey`;

-- DropForeignKey
ALTER TABLE `badges` DROP FOREIGN KEY `badges_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `chapters` DROP FOREIGN KEY `chapters_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `materials` DROP FOREIGN KEY `materials_chapterId_fkey`;

-- DropForeignKey
ALTER TABLE `user_badges` DROP FOREIGN KEY `user_badges_badgeId_fkey`;

-- DropForeignKey
ALTER TABLE `user_badges` DROP FOREIGN KEY `user_badges_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user_chapters` DROP FOREIGN KEY `user_chapters_chapterId_fkey`;

-- DropForeignKey
ALTER TABLE `user_chapters` DROP FOREIGN KEY `user_chapters_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user_courses` DROP FOREIGN KEY `user_courses_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `user_courses` DROP FOREIGN KEY `user_courses_userId_fkey`;

-- AddForeignKey
ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chapters` ADD CONSTRAINT `chapters_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `materials` ADD CONSTRAINT `materials_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assessments` ADD CONSTRAINT `assessments_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignments` ADD CONSTRAINT `assignments_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_chapters` ADD CONSTRAINT `user_chapters_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_chapters` ADD CONSTRAINT `user_chapters_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `badges` ADD CONSTRAINT `badges_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `badges` ADD CONSTRAINT `badges_chapterId_fkey` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_badges` ADD CONSTRAINT `user_badges_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_badges` ADD CONSTRAINT `user_badges_badgeId_fkey` FOREIGN KEY (`badgeId`) REFERENCES `badges`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

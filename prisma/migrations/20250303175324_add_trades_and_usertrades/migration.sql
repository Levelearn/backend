-- AlterTable
ALTER TABLE `chapters` ADD COLUMN `courseCheckpointId` INTEGER NULL;

-- AlterTable
ALTER TABLE `courses` ADD COLUMN `courseCheckpointId` INTEGER NULL;

-- CreateTable
CREATE TABLE `trades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `requiredBadgeType` ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCE') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_trades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `tradeId` INTEGER NOT NULL,
    `purchasedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `user_trades_userId_idx`(`userId`),
    INDEX `user_trades_tradeId_idx`(`tradeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_courseCheckpointId_fkey` FOREIGN KEY (`courseCheckpointId`) REFERENCES `courses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chapters` ADD CONSTRAINT `chapters_courseCheckpointId_fkey` FOREIGN KEY (`courseCheckpointId`) REFERENCES `courses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_trades` ADD CONSTRAINT `user_trades_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_trades` ADD CONSTRAINT `user_trades_tradeId_fkey` FOREIGN KEY (`tradeId`) REFERENCES `trades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to alter the column `user_role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `assessment` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `assignment` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `chapter` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `course` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `coursechapter` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `material` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `instructor_course` INTEGER NULL,
    MODIFY `instructor_id` VARCHAR(191) NULL,
    MODIFY `student_badge` INTEGER NULL,
    MODIFY `student_course` INTEGER NULL,
    MODIFY `student_id` VARCHAR(191) NULL,
    MODIFY `student_point` INTEGER NULL,
    MODIFY `user_role` ENUM('STUDENT', 'INSTRUCTOR', 'ADMIN') NOT NULL;

-- AlterTable
ALTER TABLE `userchapter` MODIFY `chapter_status` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `status_material` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `status_assess` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `status_assign` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `asses_grade` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `usercourse` MODIFY `enrollmentTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

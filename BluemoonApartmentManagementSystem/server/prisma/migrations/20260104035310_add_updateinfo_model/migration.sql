-- CreateTable
CREATE TABLE `UpdateInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNum` VARCHAR(191) NOT NULL,
    `identificationNumber` VARCHAR(191) NOT NULL,
    `householdId` INTEGER NULL,
    `familyRole` ENUM('OWNER', 'MEMBER') NOT NULL DEFAULT 'MEMBER',
    `status` ENUM('PERMANENT', 'TEMPORARY') NOT NULL DEFAULT 'PERMANENT',
    `userId` INTEGER NULL,
    `changeAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UpdateInfo` ADD CONSTRAINT `UpdateInfo_householdId_fkey` FOREIGN KEY (`householdId`) REFERENCES `Household`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UpdateInfo` ADD CONSTRAINT `UpdateInfo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

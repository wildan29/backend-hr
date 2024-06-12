/*
  Warnings:

  - You are about to drop the `pegawai` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `pegawai`;

-- CreateTable
CREATE TABLE `pengguna` (
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `foto` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `role` ENUM('HRD', 'ADMIN') NOT NULL DEFAULT 'HRD',
    `token` VARCHAR(100) NULL,

    UNIQUE INDEX `pengguna_email_key`(`email`),
    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;

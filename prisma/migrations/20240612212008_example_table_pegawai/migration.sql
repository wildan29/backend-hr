-- CreateTable
CREATE TABLE `pegawai` (
    `id_pegawai` VARCHAR(60) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `nama_pegawai` VARCHAR(100) NOT NULL,
    `jenis_kelamin` VARCHAR(3) NOT NULL,
    `foto_pegawai` VARCHAR(255) NULL,
    `kontak` VARCHAR(100) NULL,
    `divisi` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`id_pegawai`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

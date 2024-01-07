/*
  Warnings:

  - You are about to drop the column `pendaftaranId` on the `calon_siswa` table. All the data in the column will be lost.
  - You are about to drop the column `calon_siswaId` on the `jenis_kelamin` table. All the data in the column will be lost.
  - Added the required column `jenis_kelaminId` to the `calon_siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calon_siswaId` to the `pendaftaran` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "calon_siswa" DROP CONSTRAINT "calon_siswa_pendaftaranId_fkey";

-- DropForeignKey
ALTER TABLE "jenis_kelamin" DROP CONSTRAINT "jenis_kelamin_calon_siswaId_fkey";

-- DropIndex
DROP INDEX "calon_siswa_pendaftaranId_key";

-- DropIndex
DROP INDEX "jenis_kelamin_calon_siswaId_key";

-- AlterTable
ALTER TABLE "calon_siswa" DROP COLUMN "pendaftaranId",
ADD COLUMN     "jenis_kelaminId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "jenis_kelamin" DROP COLUMN "calon_siswaId";

-- AlterTable
ALTER TABLE "pendaftaran" ADD COLUMN     "calon_siswaId" INTEGER NOT NULL;

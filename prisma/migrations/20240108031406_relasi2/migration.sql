/*
  Warnings:

  - You are about to drop the column `calon_siswaId` on the `jenis_kelamin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[jenis_kelaminId]` on the table `calon_siswa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jenis_kelaminId` to the `calon_siswa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "jenis_kelamin" DROP CONSTRAINT "jenis_kelamin_calon_siswaId_fkey";

-- DropIndex
DROP INDEX "jenis_kelamin_calon_siswaId_key";

-- AlterTable
ALTER TABLE "calon_siswa" ADD COLUMN     "jenis_kelaminId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "jenis_kelamin" DROP COLUMN "calon_siswaId";

-- CreateIndex
CREATE UNIQUE INDEX "calon_siswa_jenis_kelaminId_key" ON "calon_siswa"("jenis_kelaminId");

-- AddForeignKey
ALTER TABLE "calon_siswa" ADD CONSTRAINT "calon_siswa_jenis_kelaminId_fkey" FOREIGN KEY ("jenis_kelaminId") REFERENCES "jenis_kelamin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

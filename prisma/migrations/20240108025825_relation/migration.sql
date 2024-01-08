/*
  Warnings:

  - You are about to drop the column `jenis_kelaminId` on the `calon_siswa` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[calon_siswaId]` on the table `jenis_kelamin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calon_siswaId` to the `jenis_kelamin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calon_siswa" DROP COLUMN "jenis_kelaminId";

-- AlterTable
ALTER TABLE "jenis_kelamin" ADD COLUMN     "calon_siswaId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "jenis_kelamin_calon_siswaId_key" ON "jenis_kelamin"("calon_siswaId");

-- AddForeignKey
ALTER TABLE "jenis_kelamin" ADD CONSTRAINT "jenis_kelamin_calon_siswaId_fkey" FOREIGN KEY ("calon_siswaId") REFERENCES "calon_siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

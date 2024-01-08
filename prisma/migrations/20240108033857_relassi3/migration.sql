/*
  Warnings:

  - A unique constraint covering the columns `[calon_siswaId]` on the table `pendaftaran` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_calon_siswaId_key" ON "pendaftaran"("calon_siswaId");

-- AddForeignKey
ALTER TABLE "pendaftaran" ADD CONSTRAINT "pendaftaran_calon_siswaId_fkey" FOREIGN KEY ("calon_siswaId") REFERENCES "calon_siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[data_ortuId]` on the table `pendaftaran` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `data_ortuId` to the `pendaftaran` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pendaftaran" ADD COLUMN     "data_ortuId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "data_ortu" (
    "id" SERIAL NOT NULL,
    "nama_ayah" TEXT NOT NULL,
    "pekerjaan_ayahId" INTEGER NOT NULL,
    "pendidikan_ayahId" INTEGER NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "pekerjaan_ibuId" INTEGER NOT NULL,
    "pendidikan_ibuId" INTEGER NOT NULL,

    CONSTRAINT "data_ortu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pekerjaan_ayah" (
    "id" SERIAL NOT NULL,
    "pekerjaan_ayah" TEXT NOT NULL,

    CONSTRAINT "pekerjaan_ayah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendidikan_ayah" (
    "id" SERIAL NOT NULL,
    "pendidikan_ayah" TEXT NOT NULL,

    CONSTRAINT "pendidikan_ayah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pekerjaan_ibu" (
    "id" SERIAL NOT NULL,
    "pekerjaan_ibu" TEXT NOT NULL,

    CONSTRAINT "pekerjaan_ibu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendidikan_ibu" (
    "id" SERIAL NOT NULL,
    "pekerjaan_ibu" TEXT NOT NULL,

    CONSTRAINT "pendidikan_ibu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_data_ortuId_key" ON "pendaftaran"("data_ortuId");

-- AddForeignKey
ALTER TABLE "pendaftaran" ADD CONSTRAINT "pendaftaran_data_ortuId_fkey" FOREIGN KEY ("data_ortuId") REFERENCES "data_ortu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_ortu" ADD CONSTRAINT "data_ortu_pekerjaan_ayahId_fkey" FOREIGN KEY ("pekerjaan_ayahId") REFERENCES "pekerjaan_ayah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_ortu" ADD CONSTRAINT "data_ortu_pendidikan_ayahId_fkey" FOREIGN KEY ("pendidikan_ayahId") REFERENCES "pendidikan_ayah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_ortu" ADD CONSTRAINT "data_ortu_pekerjaan_ibuId_fkey" FOREIGN KEY ("pekerjaan_ibuId") REFERENCES "pekerjaan_ibu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_ortu" ADD CONSTRAINT "data_ortu_pendidikan_ibuId_fkey" FOREIGN KEY ("pendidikan_ibuId") REFERENCES "pendidikan_ibu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

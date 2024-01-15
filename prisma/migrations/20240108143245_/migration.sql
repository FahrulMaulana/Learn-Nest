/*
  Warnings:

  - A unique constraint covering the columns `[data_ortuId]` on the table `pendaftaran` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `data_ortuId` to the `pendaftaran` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pendaftaran" ADD COLUMN     "data_ortuId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_data_ortuId_key" ON "pendaftaran"("data_ortuId");

-- AddForeignKey
ALTER TABLE "pendaftaran" ADD CONSTRAINT "pendaftaran_data_ortuId_fkey" FOREIGN KEY ("data_ortuId") REFERENCES "data_ortu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

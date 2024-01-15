/*
  Warnings:

  - You are about to drop the column `data_ortuId` on the `pendaftaran` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pendaftaran" DROP CONSTRAINT "pendaftaran_data_ortuId_fkey";

-- DropIndex
DROP INDEX "pendaftaran_data_ortuId_key";

-- AlterTable
ALTER TABLE "pendaftaran" DROP COLUMN "data_ortuId";

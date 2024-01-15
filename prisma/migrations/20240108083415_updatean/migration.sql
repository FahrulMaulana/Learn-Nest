/*
  Warnings:

  - You are about to drop the column `pekerjaan_ibu` on the `pendidikan_ibu` table. All the data in the column will be lost.
  - Added the required column `pendidikan_ibu` to the `pendidikan_ibu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pendidikan_ibu" DROP COLUMN "pekerjaan_ibu",
ADD COLUMN     "pendidikan_ibu" TEXT NOT NULL;

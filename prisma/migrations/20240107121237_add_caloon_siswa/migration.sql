-- CreateTable
CREATE TABLE "calon_siswa" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nisn" INTEGER NOT NULL,
    "pendaftaranId" INTEGER NOT NULL,

    CONSTRAINT "calon_siswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jenis_kelamin" (
    "id" SERIAL NOT NULL,
    "kelamin" TEXT NOT NULL,
    "calon_siswaId" INTEGER NOT NULL,

    CONSTRAINT "jenis_kelamin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendaftaran" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "pendaftaran_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "calon_siswa_pendaftaranId_key" ON "calon_siswa"("pendaftaranId");

-- CreateIndex
CREATE UNIQUE INDEX "jenis_kelamin_calon_siswaId_key" ON "jenis_kelamin"("calon_siswaId");

-- AddForeignKey
ALTER TABLE "calon_siswa" ADD CONSTRAINT "calon_siswa_pendaftaranId_fkey" FOREIGN KEY ("pendaftaranId") REFERENCES "pendaftaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jenis_kelamin" ADD CONSTRAINT "jenis_kelamin_calon_siswaId_fkey" FOREIGN KEY ("calon_siswaId") REFERENCES "calon_siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

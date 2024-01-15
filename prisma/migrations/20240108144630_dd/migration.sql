-- AddForeignKey
ALTER TABLE "pendaftaran" ADD CONSTRAINT "pendaftaran_data_ortuId_fkey" FOREIGN KEY ("data_ortuId") REFERENCES "data_ortu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

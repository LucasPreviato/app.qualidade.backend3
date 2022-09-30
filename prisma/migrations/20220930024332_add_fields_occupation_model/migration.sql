/*
  Warnings:

  - Added the required column `jobCategoryId` to the `Occupation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Occupation" ADD COLUMN     "desirableExperience" TEXT,
ADD COLUMN     "formation" TEXT,
ADD COLUMN     "jobCategoryId" INTEGER NOT NULL,
ADD COLUMN     "mandatoryExperience" TEXT,
ADD COLUMN     "skills" TEXT,
ADD COLUMN     "tasks" TEXT;

-- AddForeignKey
ALTER TABLE "Occupation" ADD CONSTRAINT "Occupation_jobCategoryId_fkey" FOREIGN KEY ("jobCategoryId") REFERENCES "JobCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

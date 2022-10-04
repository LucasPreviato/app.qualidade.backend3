-- CreateEnum
CREATE TYPE "Bond" AS ENUM ('CLT', 'PJ', 'COOPERATIVE', 'TRAINEE', 'OWNER', 'PARTNER', 'OUTSOURCED');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'EXPERIENCE', 'MOVEMENT', 'NA', 'AWAY');

-- CreateTable
CREATE TABLE "Collaborator" (
    "id" SERIAL NOT NULL,
    "admissionAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bond" "Bond" NOT NULL DEFAULT 'CLT',
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "tasks" TEXT,
    "personalpresentation" TEXT,
    "fiveYears" TEXT,
    "pros" TEXT,
    "cons" TEXT,
    "obsGeneral" TEXT,
    "unitId" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "occupationId" INTEGER NOT NULL,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_occupationId_fkey" FOREIGN KEY ("occupationId") REFERENCES "Occupation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

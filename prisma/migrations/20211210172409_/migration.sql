/*
  Warnings:

  - Added the required column `assistido` to the `filmes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "filmes" ADD COLUMN     "assistido" TEXT NOT NULL;

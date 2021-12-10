/*
  Warnings:

  - A unique constraint covering the columns `[nome_filme]` on the table `filmes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imagem` to the `filmes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "filmes" ADD COLUMN     "imagem" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "filmes_nome_filme_key" ON "filmes"("nome_filme");

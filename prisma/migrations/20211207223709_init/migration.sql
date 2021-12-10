-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filmes" (
    "filme_id" TEXT NOT NULL,
    "nome_filme" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "ator_principal" TEXT NOT NULL,
    "diretor" TEXT NOT NULL,
    "lancamento" TEXT NOT NULL,
    "produtora" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "filmes_pkey" PRIMARY KEY ("filme_id")
);

-- CreateTable
CREATE TABLE "generos" (
    "genero_id" TEXT NOT NULL,
    "genero" TEXT NOT NULL,

    CONSTRAINT "generos_pkey" PRIMARY KEY ("genero_id")
);

-- CreateTable
CREATE TABLE "atores" (
    "ator_id" TEXT NOT NULL,
    "nome_ator" TEXT NOT NULL,

    CONSTRAINT "atores_pkey" PRIMARY KEY ("ator_id")
);

-- CreateTable
CREATE TABLE "produtoras" (
    "produtora_id" TEXT NOT NULL,
    "nome_produtora" TEXT NOT NULL,

    CONSTRAINT "produtoras_pkey" PRIMARY KEY ("produtora_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

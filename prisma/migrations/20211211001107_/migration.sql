-- CreateTable
CREATE TABLE "_filmesTousuarios" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_filmesTousuarios_AB_unique" ON "_filmesTousuarios"("A", "B");

-- CreateIndex
CREATE INDEX "_filmesTousuarios_B_index" ON "_filmesTousuarios"("B");

-- AddForeignKey
ALTER TABLE "_filmesTousuarios" ADD FOREIGN KEY ("A") REFERENCES "filmes"("filme_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filmesTousuarios" ADD FOREIGN KEY ("B") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

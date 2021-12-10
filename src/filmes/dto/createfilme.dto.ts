import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateFilmDTO {
    @IsString()
    @IsNotEmpty({ message: ' O nome não pode ficar vazio' })
    nome_filme: string;

    @IsString()
    @IsNotEmpty({ message: ' Adicione uma imagem' })
    imagem: string;

    @IsString()
    @IsOptional()
    ator_principal: string;

    @IsString()
    @IsNotEmpty({ message: ' Gênero não informado' })
    genero: string;

    @IsString()
    @IsOptional()
    diretor: string;

    @IsString()
    @IsOptional()
    lancamento: string;

    @IsString()
    @IsOptional()
    produtora: string;

    @IsString()
    @IsNotEmpty({ message: ' Informe a duração do filme' })
    duracao: string;

    @IsString()
    @IsNotEmpty({ message: ' Informe o preço' })
    preco: string;

    @IsString()
    @IsOptional()
    sinopse: string;
}
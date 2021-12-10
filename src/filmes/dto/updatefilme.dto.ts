import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateFilmDTO {

    @IsString()
    @IsNotEmpty({ message: ' O nome não pode ficar vazio' })
    @IsOptional()
    nome_filme: string;

    @IsString()
    @IsOptional()
    imagem: string;

    @IsString()
    @IsOptional()
    ator_principal: string;

    @IsString()
    @IsNotEmpty({ message: ' Gênero não informado' })
    @IsOptional()
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
    @IsOptional()
    duracao: string;

    @IsString()
    @IsOptional()
    preco: string;

    @IsString()
    @IsOptional()
    sinopse: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    assistido: string;
}
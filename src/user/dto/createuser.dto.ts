import { IsString, IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDTO {
    @IsString({ message: ' O nome não é válido' })
    @IsNotEmpty({ message: ' O nome não pode ficar vazio' })
    @Length(2, 12)
    nome: string;

    @IsString({ message: ' O sobrenomenome não é válido' })
    @IsNotEmpty({ message: ' O sobrenome não pode ficar vazio' })
    sobrenome: string;

    @IsString()
    @IsNotEmpty({ message: ' informe a data de nascimento' })
    nascimento: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty({ message: ' informe seu email' })
    email: string;

    @IsString({ message: ' senha inválida' })
    @IsNotEmpty({ message: ' informe a senha' })
    @Length(6, 12)
    senha: string;

    @IsString()
    confirmacao: string;
}
import { IsString, IsEmail, IsNotEmpty, Length, IsOptional } from "class-validator";

export class UpdateUserDTO {

    @IsString()
    @IsNotEmpty()
    @Length(2, 12)
    @IsOptional()
    nome: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    sobrenome: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @IsOptional()
    email: string;
}
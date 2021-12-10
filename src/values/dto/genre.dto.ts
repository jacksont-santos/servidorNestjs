import { IsString, IsNotEmpty, Length } from "class-validator";

export class GenresDTO {

    @IsString()
    @IsNotEmpty()
    @Length(4,20)
    genero: string;
}
import { IsString, IsNotEmpty } from "class-validator";

export class ActorDTO {

    @IsString()
    @IsNotEmpty()
    nome_ator: string;
}
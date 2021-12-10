import { IsString, IsNotEmpty } from "class-validator";

export class ProducersDTO {

    @IsString()
    @IsNotEmpty()
    nome_produtora: string;
}
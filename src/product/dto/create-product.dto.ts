import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;

}

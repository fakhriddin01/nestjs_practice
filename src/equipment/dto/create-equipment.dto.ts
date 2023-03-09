import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength, IsInt } from "class-validator";


export class CreateEquipmentDto {
    @ApiProperty({example: "notebook", description: "uskuna nomi"})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    
    @ApiProperty({example: "1000", description: "uskuna narxi"})
    @IsInt()
    readonly price: number;
    
    @ApiProperty({example: "https://images.unsplash.com/photo", description: "uskuna rasmi linki"})
    @IsString()
    readonly image: string;

    @ApiProperty({example: "Bu MacBook", description: "uskunaga izoh"})
    @IsString()
    readonly description: string;
}

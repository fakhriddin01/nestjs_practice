import { ApiProperty } from "@nestjs/swagger/dist";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";



export class LoginDto {
    @ApiProperty({example: "user1@mail.uz", description: "foydalanuvchi emaili"})
    @IsEmail()
    readonly email: string;
    
    @ApiProperty({example: "P@$$wordd1", description: "Foydalanuvchi paroli"})
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}

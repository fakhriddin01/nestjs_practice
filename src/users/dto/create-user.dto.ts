import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength, IsBoolean } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: "user1", description: "Foydalanuvchi ismi"})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    
    @ApiProperty({example: "user1@mail.uz", description: "Foydalanuvchi emaili"})
    @IsEmail()
    readonly email: string;
    
    @ApiProperty({example: "P@$$wordd1", description: "Foydalanuvchi paroli"})
    @IsStrongPassword()
    @MinLength(10, {})
    readonly password: string;

    @ApiProperty({example: "+998991234567", description: "Foydalanuvchi telefon raqami"})
    @IsString()
    readonly phone_number: string;


    @ApiProperty({example: "admin", description: "Foydalanuvchi statusi"})
    @IsBoolean()
    readonly isAdmin: boolean;


    @ApiProperty({example: `{lat: "11.11112", lon: "63.12345"}`, description: "Foydalanuvchi locatsiyasi"})
    @IsNotEmpty()
    readonly location: {
        lat: string;
        lon: string;
    };

}
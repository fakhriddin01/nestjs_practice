import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength, IsInt } from "class-validator";

export class CreateUserEquipmentDto {
    @ApiProperty({example: "1", description: "hardor id raqami"})
    @IsNotEmpty()
    @IsInt()
    readonly userId: number;

    @ApiProperty({example: "1", description: "uskuna id raqami"})
    @IsNotEmpty()
    @IsInt()
    readonly equipmentId: number;
    
    @ApiProperty({example: "1", description: "harid qilinayotgan uskuna soni"})
    @IsNotEmpty()
    @IsInt()
    readonly amount: number;
}

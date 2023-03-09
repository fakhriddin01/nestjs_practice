import { PartialType } from '@nestjs/swagger';
import { CreateUserEquipmentDto } from './create-user_equipment.dto';

export class UpdateUserEquipmentDto extends PartialType(CreateUserEquipmentDto) {}

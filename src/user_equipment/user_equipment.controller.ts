import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEquipmentService } from './user_equipment.service';
import { CreateUserEquipmentDto } from './dto/create-user_equipment.dto';
import { UpdateUserEquipmentDto } from './dto/update-user_equipment.dto';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags("Xaridlar")
@Controller('user-equipment')
export class UserEquipmentController {
  constructor(private readonly userEquipmentService: UserEquipmentService) {}

  @Post()
  create(@Body() createUserEquipmentDto: CreateUserEquipmentDto) {
    return this.userEquipmentService.create(createUserEquipmentDto);
  }

  @Get('all')
  findAll() {
    return this.userEquipmentService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userEquipmentService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserEquipmentDto: UpdateUserEquipmentDto) {
  //   return this.userEquipmentService.update(+id, updateUserEquipmentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userEquipmentService.remove(+id);
  // }
}

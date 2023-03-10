import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { ApiTags } from '@nestjs/swagger/dist';
import { Roles } from 'src/decorators/roles-auth.decorator';
import { RolesGuard } from 'src/guards/roles.guard';

@ApiTags("Uskunalar")
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get("all")
  findAll() {
    return this.equipmentService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.equipmentService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEquipmentDto: UpdateEquipmentDto) {
  //   return this.equipmentService.update(+id, updateEquipmentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.equipmentService.remove(+id);
  // }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserEquipmentService } from './user_equipment.service';
import { CreateUserEquipmentDto } from './dto/create-user_equipment.dto';
import { UpdateUserEquipmentDto } from './dto/update-user_equipment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Roles } from 'src/decorators/roles-auth.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';

@ApiTags("Xaridlar")
@Controller('user-equipment')
export class UserEquipmentController {
  constructor(private readonly userEquipmentService: UserEquipmentService) {}

  @ApiOperation({summary: "Order yaratish"})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createUserEquipmentDto: CreateUserEquipmentDto) {
    return this.userEquipmentService.create(createUserEquipmentDto);
  }
  
  @ApiOperation({summary: "Hamma orderlarni olish"})
  @UseGuards(JwtModule)
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

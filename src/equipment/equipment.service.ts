import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './models/equipment.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EquipmentService {

  constructor(@InjectModel(Equipment) private equipmentRepo: typeof Equipment){}

  async create(createEquipmentDto: CreateEquipmentDto) {
    const newEquipment = await this.equipmentRepo.create(createEquipmentDto);
    return newEquipment;
  }

  async findAll() {
    const allEquipment = await this.equipmentRepo.findAll({include: {all: true}})
    return allEquipment;
  }

  async findOne(id: number) {
    const oneEquipment = await this.equipmentRepo.findOne({where: {id}, include: {all: true}});
    return oneEquipment;
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return `This action updates a #${id} equipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipment`;
  }
}

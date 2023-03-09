import { Injectable } from '@nestjs/common';
import { CreateUserEquipmentDto } from './dto/create-user_equipment.dto';
import { UpdateUserEquipmentDto } from './dto/update-user_equipment.dto';
import { UserEquipment } from './models/user-equipment.model';
import { InjectModel } from '@nestjs/sequelize';
import { EquipmentService } from 'src/equipment/equipment.service';

@Injectable()
export class UserEquipmentService {

  constructor(@InjectModel(UserEquipment) private userEquipmentRepo: typeof UserEquipment, private readonly equipmentService: EquipmentService){}

  async create(createUserEquipmentDto: CreateUserEquipmentDto) {
    const newUserEquipment = await this.userEquipmentRepo.create(createUserEquipmentDto);
    const equipment = await this.equipmentService.findOne(createUserEquipmentDto.equipmentId)

    newUserEquipment.totalPrice =  (newUserEquipment.amount * equipment.price);
    
    await newUserEquipment.save();   
    return newUserEquipment;
  }

  async findAll() {
    const orders = await this.userEquipmentRepo.findAll({include: {all: true}});
    return orders;
  }

  findOne(id: number) {
    return `This action returns a #${id} userEquipment`;
  }

  update(id: number, updateUserEquipmentDto: UpdateUserEquipmentDto) {
    return `This action updates a #${id} userEquipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} userEquipment`;
  }
}

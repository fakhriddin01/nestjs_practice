import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { Equipment } from './models/equipment.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/models/user.model';
import { UserEquipment } from 'src/user_equipment/models/user-equipment.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Equipment, User, UserEquipment])
  ],
  controllers: [EquipmentController],
  providers: [EquipmentService],
  exports:[EquipmentService]
})
export class EquipmentModule {}

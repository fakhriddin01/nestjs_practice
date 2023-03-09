import { Module } from '@nestjs/common';
import { UserEquipmentService } from './user_equipment.service';
import { UserEquipmentController } from './user_equipment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/models/user.model';
import { UserEquipment } from './models/user-equipment.model';
import { Equipment } from 'src/equipment/models/equipment.model';
import { EquipmentModule } from 'src/equipment/equipment.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserEquipment, Equipment],),
    EquipmentModule
  ],
  controllers: [UserEquipmentController],
  providers: [UserEquipmentService]
})
export class UserEquipmentModule {}

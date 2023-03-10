import { Module, forwardRef } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { Equipment } from './models/equipment.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/models/user.model';
import { UserEquipment } from 'src/user_equipment/models/user-equipment.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Equipment, User, UserEquipment]),
    forwardRef(()=> AuthModule)
  ],
  controllers: [EquipmentController],
  providers: [EquipmentService],
  exports:[EquipmentService]
})
export class EquipmentModule {}

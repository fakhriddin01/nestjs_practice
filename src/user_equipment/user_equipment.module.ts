import { Module, forwardRef } from '@nestjs/common';
import { UserEquipmentService } from './user_equipment.service';
import { UserEquipmentController } from './user_equipment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/models/user.model';
import { UserEquipment } from './models/user-equipment.model';
import { Equipment } from 'src/equipment/models/equipment.model';
import { EquipmentModule } from 'src/equipment/equipment.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserEquipment, Equipment],),
    EquipmentModule,
    forwardRef(()=> AuthModule)
  ],
  controllers: [UserEquipmentController],
  providers: [UserEquipmentService]
})
export class UserEquipmentModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserEquipment } from '../user_equipment/models/user-equipment.model';
import { Equipment } from 'src/equipment/models/equipment.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserEquipment, Equipment])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

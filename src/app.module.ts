import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { EquipmentModule } from './equipment/equipment.module';
import { UserEquipmentModule } from './user_equipment/user_equipment.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env', 
    isGlobal: true
}),
SequelizeModule.forRoot({
    dialect: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: String(process.env.POSTGRES_PASSWORD),
    database: process.env.POSTGRES_DB,
    models:[],
    autoLoadModels: true,
    logging: true,
}),
UsersModule,
EquipmentModule,
UserEquipmentModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

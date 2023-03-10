import {Column, Table, DataType, Model, BelongsToMany, HasMany} from "sequelize-typescript"
import { Equipment } from "src/equipment/models/equipment.model";
import { UserEquipment } from "src/user_equipment/models/user-equipment.model";

interface UserCreationAttr{
    name: string;
    email: string;
    password: string;
    phone_number: string;
    location: {
        lat: string,
        lon: string,
    };
    // isAdmin: boolean;
    // isActive: boolean;
}

@Table ({tableName: "users"})
export class User extends Model<User, UserCreationAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    name: string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique: true,
    })
    email: string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    password: string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    phone_number: string;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false,
    })
    isActive: boolean;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false,
    })
    isAdmin: boolean;
    
    @HasMany(()=> UserEquipment)
    buyers: UserEquipment[];

}


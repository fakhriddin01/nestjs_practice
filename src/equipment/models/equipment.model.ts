import {Column, Table, DataType, Model, BelongsToMany, HasMany} from "sequelize-typescript"
import { UserEquipment } from "src/user_equipment/models/user-equipment.model";
import { User } from "src/users/models/user.model";

interface EquipmentCreationAttr{
    name: string;
    price: number;
    image: string;
    description: string;
    // isActive: boolean;
}

@Table ({tableName: "equipment"})
export class Equipment extends Model<Equipment, EquipmentCreationAttr> {
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
        type:DataType.DECIMAL,
        allowNull:false,
    })
    price: number;

    @Column({
        type:DataType.STRING(1000),
        allowNull:false,
    })
    image: string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    description: string;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false,
    })
    isActive: boolean;

    // @BelongsToMany(()=> User, ()=> UserEquipment)
    // users: User[];

    @HasMany(()=> UserEquipment)
    orders: UserEquipment[];

}


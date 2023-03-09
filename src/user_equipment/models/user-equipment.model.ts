import {Column, Table, DataType, Model, BelongsToMany, ForeignKey, BelongsTo} from "sequelize-typescript"
import { User } from "../../users/models/user.model";
import { Equipment } from "src/equipment/models/equipment.model";

interface UserEquipmentCreationAttr{
    userId: number;
    equipmentId: number;
    amount: number;
    // orderDate: Date;
}

@Table ({tableName: "users_equipment", createdAt:false, updatedAt: false})
export class UserEquipment extends Model<UserEquipment, UserEquipmentCreationAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> User)
    @Column({
        type:DataType.INTEGER
    })
    userId: number;

    @ForeignKey(()=> Equipment)
    @Column({
        type:DataType.INTEGER
    })
    equipmentId: number;

    @Column({
        type:DataType.INTEGER,
        defaultValue: 1,
    })
    amount: number;

    @Column({
        type:DataType.DECIMAL,
        defaultValue: 0
    })
    totalPrice: number;

    @Column({
        type:DataType.DATE,
        defaultValue: Date.now(),
    })
    orderDate: Date;

    @BelongsTo(()=> User)
    users: User[];

    @BelongsTo(()=> Equipment)
    equipments: Equipment[];

}


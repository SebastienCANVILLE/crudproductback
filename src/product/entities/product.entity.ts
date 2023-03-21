import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class Product extends BaseEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;
    
    @ApiProperty()
    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        default: 0
    })
    price: number;
    
    @ApiProperty()
    @Column()
    quantity: number;

}


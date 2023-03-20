import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Product {

    
    @PrimaryGeneratedColumn()
    id: number;

    
    @Column()
    name: string;

    
    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        default: 0
    })
    price: number;

    
    @Column()
    quantity: number;

}


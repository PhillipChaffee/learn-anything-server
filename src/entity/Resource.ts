import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Resource {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @ManyToOne(type => Category, category => category.resources)
    category: Category;

}
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Resource {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @ManyToMany(type => Category, category => category.resources)
    categories: Category[];

}
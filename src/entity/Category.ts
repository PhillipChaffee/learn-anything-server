import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Resource} from "./Resource";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Resource, resource => resource.category)
    resources: Resource[];

}

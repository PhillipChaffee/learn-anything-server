import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Resource} from "./Resource";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Resource, resource => resource.category, {
        cascade: true,
    })
    resources: Resource[];

}

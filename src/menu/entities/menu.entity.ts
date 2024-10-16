import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Menu {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column({ unique:true})
    email: string;

}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';





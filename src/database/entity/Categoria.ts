import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

import { Produto } from "./Produto";

@Entity()
export class Categoria {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({ default: () => true })
    status: boolean;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    updatedAt: Date;

    @OneToMany(type => Produto, categoria => Categoria )
    produtos: Promise<Produto[]>;

}

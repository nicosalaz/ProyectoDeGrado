import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Especie {
    @PrimaryGeneratedColumn()
    id_especie : number;
    @Column()
    nombre_especie : string;
    @Column()
    descripcion_especie : string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('identificacion')
export class Identificacion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_tipo: string;

    @Column()
    is_active: number;
}

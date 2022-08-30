import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permiso')
export class Permiso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_permiso: string;

    @Column()
    descripcion_permiso: string;

    @Column()
    is_active: number;
}

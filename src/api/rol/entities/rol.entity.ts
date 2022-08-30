import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_rol: string;

    @Column()
    descripcion_rol: string;

    @Column()
    permiso_id: number;

    @Column()
    is_active: number;
}

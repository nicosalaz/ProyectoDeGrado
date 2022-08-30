import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publicacion')
export class Publicacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    

    @Column()
    usuario_id: number;

    @Column()
    puclicacion_id: number;

    @Column()
    is_active: number;
}

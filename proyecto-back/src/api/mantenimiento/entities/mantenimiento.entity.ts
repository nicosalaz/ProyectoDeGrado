import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mantenimiento')
export class Mantenimiento extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    id_especie_arborea: number;

    @Column()
    id_usuario: number;

    @Column()
    estado: number;

    @Column()
    id_empleado: number;

    @Column()
    imagen?: string;
}

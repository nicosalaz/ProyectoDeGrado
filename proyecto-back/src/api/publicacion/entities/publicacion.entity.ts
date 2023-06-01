import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publicacion')
export class Publicacion extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    id_usuario: number;

    @Column()
    imagen: string;
}

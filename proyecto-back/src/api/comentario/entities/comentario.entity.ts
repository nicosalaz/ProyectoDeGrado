import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comentario')
export class Comentario extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    id_publicacion: number;

    @Column()
    id_usuario: number;
}

import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reaccion')
export class Reaccion extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo_reaccion: string;

    @Column()
    id_usuario: number;

    @Column()
    id_publicacion: number;

}

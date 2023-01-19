import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permiso')
export class Permiso extends AuditableEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

}

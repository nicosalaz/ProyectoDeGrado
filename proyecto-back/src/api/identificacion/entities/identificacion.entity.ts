import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('identificacion')
export class Identificacion extends AuditableEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

}

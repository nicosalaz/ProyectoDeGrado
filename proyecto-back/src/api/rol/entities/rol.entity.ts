import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class Rol extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

}

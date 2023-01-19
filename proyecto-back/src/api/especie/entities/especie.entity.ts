import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('especie')
export class Especie extends AuditableEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
}

import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class UsuarioRol extends AuditableEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_usuario: number;

  @Column()
  id_rol: number;

}
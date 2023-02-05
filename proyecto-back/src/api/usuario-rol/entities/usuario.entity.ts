import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioRol } from './usuario-rol.entity';
import { Rol } from '../../rol/entities/rol.entity';

@Entity('usuario')
export class Usuario extends AuditableEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  id_identificacion: number;

  @Column()
  numero_identificacion: number;

  @Column()
  correo: string;

  @Column()
  usuario: string;

  @Column()
  clave: string;

  permissions:string[];

  @OneToMany(() => UsuarioRol, (cof) => cof.usuario_object)
  rol_object: Rol;
}

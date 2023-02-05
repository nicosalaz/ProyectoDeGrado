import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Rol } from 'src/api/rol/entities/rol.entity';

@Entity('usuario_rol')
export class UsuarioRol extends AuditableEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_usuario: number;

  @Column()
  id_rol: number;


  @ManyToOne(() => Usuario, (i) => i.rol_object)
  @JoinColumn({ name: 'id_usuario' })
  usuario_object: Usuario;

  @ManyToOne(() => Rol, (i) => i.usuario_object)
  @JoinColumn({ name: 'id_rol' })
  rol_object: Rol;
}
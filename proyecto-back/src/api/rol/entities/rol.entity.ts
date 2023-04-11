import { AuditableEntity } from 'src/shared/entitites/extendes/auditable-entity.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioRol } from '../../usuario-rol/entities/usuario-rol.entity';
import { Usuario } from 'src/api/usuario-rol/entities/usuario.entity';

@Entity('rol')
export class Rol extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @ManyToOne(() => UsuarioRol, (cof) => cof.rol_object)
    usuario_object: Usuario[];
}

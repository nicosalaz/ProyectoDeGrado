import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { PeticionesRegistro } from './entities/peticiones_registro.entity';
import { CreatePeticionesRegistroDto } from './dto/create-peticiones_registro.dto';


@Injectable()
export class UsuarioRepository extends Repository<PeticionesRegistro> {
  constructor(private dataSource: DataSource) {
    super(PeticionesRegistro, dataSource.createEntityManager());
  }

   async creacionPeticion(peticionRegistro:CreatePeticionesRegistroDto){
    try {
        if(peticionRegistro.nombre == null&&
            peticionRegistro.descripcion == null &&
            peticionRegistro.id_especie == null && 
            peticionRegistro.id_usuario == null &&
            peticionRegistro.longitud == null &&
            peticionRegistro.latitud == null
            ){
                return {
                    error: 'Error informacion obligatoria.',
                    statu: 404
                }
            }

            

    } catch (error) {
        return error
    }
   }
}

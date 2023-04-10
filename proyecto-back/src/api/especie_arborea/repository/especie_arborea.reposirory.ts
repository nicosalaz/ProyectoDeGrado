import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EspecieArborea } from '../entities/especie_arborea.entity';
import { CreateEspecieArboreaDto } from '../dto/create-especie_arborea.dto';
import { UpdateEspecieArboreaDto } from '../dto/update-especie_arborea.dto';


@Injectable()
export class EspecieArboreaRepository extends Repository<EspecieArborea> {
  constructor(private dataSource: DataSource,) {
    super(EspecieArborea, dataSource.createEntityManager());
  }

  async createEspecieArborea(especieArborea:CreateEspecieArboreaDto){
    try {
        const EspecieArboreaNew = await this.save(especieArborea);

        return {
            status:200,
            response: EspecieArboreaNew
        }
    } catch (error) {
        return error
    }
  }

  async especieArborea(){
    try {
        
            const especierborea = await this.query(`
            select ea.nombre as title, concat('{ lat: ',eau.latitud , ', lng:', eau.longitud , '}') as "position" , e.id as 'id_especie', e.nombre as 'nombre_especie',
	        ea.descripcion 
	        from especie_arborea ea
	        join especie_arborea_ubicacion eau  on eau.id_especie_arborea  = ea.id 
	        join especie e on e.id = ea.id_especie 
	        where ea.activo = 1;`)

            return {
                status: 200,
                response: especierborea
            }
        
    } catch (error) {
        return error;
    }
  }

  async editarEspecieArborea(especieArborea:UpdateEspecieArboreaDto){
    try {
      const EspecieArboreaNew = await this.update(especieArborea.id, especieArborea);

      return {
          status:200,
          response: EspecieArboreaNew
      }
  } catch (error) {
      return error
  }
  }


  async eliminarEspecieArborea(especieArborea:UpdateEspecieArboreaDto){
    try {
      const EspecieArboreaNew = await this.update(especieArborea.id, {
        activo : especieArborea.active
      });

      return {
          status:200,
          response: EspecieArboreaNew
      }
  } catch (error) {
      return error
  }
  }

}
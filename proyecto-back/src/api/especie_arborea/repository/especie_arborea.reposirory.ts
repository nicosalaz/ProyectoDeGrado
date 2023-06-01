import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EspecieArborea } from '../entities/especie_arborea.entity';
import { CreateEspecieArboreaDto } from '../dto/create-especie_arborea.dto';
import { UpdateEspecieArboreaDto } from '../dto/update-especie_arborea.dto';
import { CreateEspecieArboreaUbicacionDto } from 'src/api/especie_arborea_ubicacion/dto/create-especie_arborea_ubicacion.dto';
import { EspecieArboreaUbicacionRepository } from 'src/api/especie_arborea_ubicacion/especie-arborea-ubicacion.repository';


@Injectable()
export class EspecieArboreaRepository extends Repository<EspecieArborea> {
  constructor(private dataSource: DataSource,private ubicacionRepo: EspecieArboreaUbicacionRepository) {
    super(EspecieArborea, dataSource.createEntityManager());
  }

  async createEspecieArborea(especieArborea:CreateEspecieArboreaDto, ubicacione:any = null){

    try {
        const EspecieArboreaNew = await this.save(especieArborea);
        if(ubicacione != null){
          const ubicacionEspecie = new CreateEspecieArboreaUbicacionDto();
        
        ubicacionEspecie.latitud = ubicacione.latitud;
        ubicacionEspecie.longitud = ubicacione.longitud;
        ubicacionEspecie.id_especie_arborea = EspecieArboreaNew.id;
        const ubicacion = await this.ubicacionRepo.crearUbicacion(ubicacionEspecie);
        return {
          status:200,
          response: EspecieArboreaNew,
          registro: ubicacion
      }
        }
        
        return {
            status:200,
            response: EspecieArboreaNew,
        }
    } catch (error) {
        return error
    }
  }

  async especieArborea(){
    try {
        
            const especierborea = await this.query(`
            select ea.id as id, ea.nombre as title, concat('{ "lat": ',eau.latitud , ', "lng":', eau.longitud , '}') as "position" , e.id as 'id_especie', e.nombre as 'nombre_especie',
	        ea.descripcion, ea.imagen
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
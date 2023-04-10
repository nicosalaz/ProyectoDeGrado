import { Injectable } from "@nestjs/common";
import { EspecieArboreaUbicacion } from "./entities/especie_arborea_ubicacion.entity";
import { DataSource, Repository } from "typeorm";
import { CreateEspecieArboreaUbicacionDto } from "./dto/create-especie_arborea_ubicacion.dto";

@Injectable()
export class EspecieArboreaUbicacionRepository extends Repository<EspecieArboreaUbicacion> {
  constructor(private dataSource: DataSource) {
    super(EspecieArboreaUbicacion, dataSource.createEntityManager());
  }
  async crearUbicacion(especieNueva:CreateEspecieArboreaUbicacionDto){
    try {
        console.log(especieNueva);
        
      const EspecieArboreaNew = await this.save(especieNueva);

      return {
          status:200,
          response: EspecieArboreaNew
      }
  } catch (error) {
      return error
  }
  }
}
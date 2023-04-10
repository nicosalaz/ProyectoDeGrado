import { Injectable } from '@nestjs/common';
import { CreateEspecieArboreaUbicacionDto } from './dto/create-especie_arborea_ubicacion.dto';
import { UpdateEspecieArboreaUbicacionDto } from './dto/update-especie_arborea_ubicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EspecieArboreaUbicacion } from './entities/especie_arborea_ubicacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EspecieArboreaUbicacionService {
  constructor(
    @InjectRepository(EspecieArboreaUbicacion)
    private especieRepository: Repository<EspecieArboreaUbicacion>,
  ) {}
  async crearEspecie(especieNueva:CreateEspecieArboreaUbicacionDto){
    try {
      const EspecieArboreaNew = await this.especieRepository.save(especieNueva);

      return {
          status:200,
          response: EspecieArboreaNew
      }
  } catch (error) {
      return error
  }
  }

}

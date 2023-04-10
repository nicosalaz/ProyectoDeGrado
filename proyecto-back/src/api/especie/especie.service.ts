import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
import { Especie } from './entities/especie.entity';

@Injectable()
export class EspecieService {
  constructor(
    @InjectRepository(Especie)
    private especieRepository: Repository<Especie>,
  ) {}

  async crearEspecie(especieNueva:CreateEspecieDto){
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

  async buscarEspecies(){
    try {
      const EspecieArboreaNew = await this.especieRepository.find();

      return {
          status:200,
          response: EspecieArboreaNew
      }
  } catch (error) {
      return error
  }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
import { Especie } from './entities/especie.entity';

@Injectable()
export class EspecieService {
  constructor(@InjectRepository(Especie) private readonly especieRepository:Repository<Especie>){}

  async create(createEspecieDto: CreateEspecieDto) {
    try {
      const especie = await this.especieRepository.create(createEspecieDto);
      this.especieRepository.save(especie);
      return true;
    }catch(e){
      console.log(e.message);
    }
    return false;
  }

   findAll(){
    return this.especieRepository.find();
  }
  /*
    - funcion asyn que retorna promesa de la entidad.
    - el nombre del parametro debe coincidir con el de la entidad.
    - la función findOneBy trae un valor especifico
  */
  public async findOne(id_especie: number): Promise<Especie> {
    return await this.especieRepository.findOneBy({id_especie});
  }
/*
  async update(id_especie:number,updateEspecieDto: UpdateEspecieDto): Promise<Especie> {
    return this.especieRepository.update(id_especie,updateEspecieDto);
  }*/
  /*
  remove(id: number) {
    return `This action removes a #${id} especie`;
  }*/
}

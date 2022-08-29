import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecieArboreaDto } from './dto/create-especie_arborea.dto';
import { UpdateEspecieArboreaDto } from './dto/update-especie_arborea.dto';
import { EspecieArborea } from './entities/especie_arborea.entity';

@Injectable()
export class EspecieArboreaService {
  constructor(
    @InjectRepository(EspecieArborea)
    private readonly repositoryEspecieArborea: Repository<EspecieArborea>,
  ) {}

  async findAll(): Promise<EspecieArborea[]> {
    return await this.repositoryEspecieArborea.find();
  }

  async findOne(id_especie_arborea: number): Promise<EspecieArborea> {
    return await this.repositoryEspecieArborea.findOneBy({
      id_especie_arborea,
    });
  }

  async update(
    updateEspecieArboreaDto: UpdateEspecieArboreaDto[],
  ): Promise<EspecieArborea[]> {
    return await this.repositoryEspecieArborea.save(updateEspecieArboreaDto);
  }

  /*
  update(id: number, updateEspecieArboreaDto: UpdateEspecieArboreaDto) {
    return `This action updates a #${id} especieArborea`;
  }

  remove(id: number) {
    return `This action removes a #${id} especieArborea`;
  }
  */
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecieArboreaUbicacionService } from './especie_arborea_ubicacion.service';
import { CreateEspecieArboreaUbicacionDto } from './dto/create-especie_arborea_ubicacion.dto';
import { UpdateEspecieArboreaUbicacionDto } from './dto/update-especie_arborea_ubicacion.dto';

@Controller('especie-arborea-ubicacion')
export class EspecieArboreaUbicacionController {
  constructor(private readonly especieArboreaUbicacionService: EspecieArboreaUbicacionService) {}

  @Post()
  create(@Body() createEspecieArboreaUbicacionDto: CreateEspecieArboreaUbicacionDto) {
    return this.especieArboreaUbicacionService.create(createEspecieArboreaUbicacionDto);
  }

  @Get()
  findAll() {
    return this.especieArboreaUbicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especieArboreaUbicacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEspecieArboreaUbicacionDto: UpdateEspecieArboreaUbicacionDto) {
    return this.especieArboreaUbicacionService.update(+id, updateEspecieArboreaUbicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especieArboreaUbicacionService.remove(+id);
  }
}

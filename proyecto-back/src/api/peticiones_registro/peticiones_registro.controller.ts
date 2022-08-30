import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeticionesRegistroService } from './peticiones_registro.service';
import { CreatePeticionesRegistroDto } from './dto/create-peticiones_registro.dto';
import { UpdatePeticionesRegistroDto } from './dto/update-peticiones_registro.dto';

@Controller('peticiones-registro')
export class PeticionesRegistroController {
  constructor(private readonly peticionesRegistroService: PeticionesRegistroService) {}

  @Post()
  create(@Body() createPeticionesRegistroDto: CreatePeticionesRegistroDto) {
    return this.peticionesRegistroService.create(createPeticionesRegistroDto);
  }

  @Get()
  findAll() {
    return this.peticionesRegistroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peticionesRegistroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeticionesRegistroDto: UpdatePeticionesRegistroDto) {
    return this.peticionesRegistroService.update(+id, updatePeticionesRegistroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peticionesRegistroService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';
import { dataSource } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { Usuario } from './api/usuario/entities/usuario.entity';
import { UsuarioService } from './api/usuario/usuario.service';
import { GuardsModule } from './shared/guards/guards.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...dataSource.options,
    keepConnectionAlive: true,
    autoLoadEntities: true,
  }), 
  ApiModule,
  ScheduleModule.forRoot(),
  RouterModule.register(routes),
  AuthModule,
  TypeOrmModule.forFeature([Usuario]),
  GuardsModule,
],
  controllers: [AppController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}

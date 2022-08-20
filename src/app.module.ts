import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'vhqv7A0js+',
    database: 'proyecto_grado',
    keepConnectionAlive: true,
    autoLoadEntities: true,
  }), 
  ApiModule,
  RouterModule.register(routes),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

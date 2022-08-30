import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';
import { dataSource } from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...dataSource.options,
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

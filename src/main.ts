import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyparser from 'body-parser';
import { dataSource } from './ormconfig';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyparser.urlencoded({ limit: '100mb', extended: true }));
  app.use(bodyparser.json({ limit: '100mb' }));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await dataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    }
  );
  await app.listen(3000);
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  /**
   * swagger configuration section
   */
  const configSwagger = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('The todo example whit nestjs')
    .setContact("Sumerio Code","", "sumeriocode@gmail.com")
    .setVersion('1.0')
    .addServer('http://localhost:3000')
    .addServer('https://localhost:3000')
    .addTag('Todo', 'Set of Apis of Todo')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('/api/v1/api-explorer', app, document);

  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'));
  });
}

bootstrap();

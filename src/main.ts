import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Autenticacion')
    .setDescription('esta api es para ejercer conocimientos de como manejar nestjs')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //

  await app.listen(3000);
}
bootstrap();

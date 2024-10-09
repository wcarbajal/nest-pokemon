import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
      transform: true, // This will transform the incoming request body to class instances
      transformOptions: {
        enableImplicitConversion: true, // This will automatically convert string values to their respective types
        //allowNumberString: true, // This will allow numbers to be passed as strings
        //excludeExtraneousKeys: false, // This will allow additional properties in the incoming request body
        //transformOptions: {
        //  excludePrefixes: ['transform'], // This will exclude properties starting with 'transform'
        //},
      }
    })
  );

  await app.listen( process.env.PORT );
  console.log(`Server is running on port ${process.env.PORT}`);
}
bootstrap();

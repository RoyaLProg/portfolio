import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { jwtConstants } from './Auth/jwtConstants';
import { readFileSync } from 'fs';

async function bootstrap() {
  jwtConstants.secret = readFileSync('keys/key.pem').toString().replace(/----.*-----/g, '');

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

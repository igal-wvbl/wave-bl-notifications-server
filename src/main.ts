import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ?? 5096;
  const app = await NestFactory.create(AppModule);
  console.log(`Server is running on port ${port}`);
  const localHostAndPort = `http://localhost:${port}`;
  console.log(`testUrl: ${localHostAndPort}`);
  console.log(`bucNotifications: ${localHostAndPort}/buc-notifications`)
  await app.listen(port);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {

  // const appMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.TCP,
  //   },
  // );
  // await appMicroservice.listen();

  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();

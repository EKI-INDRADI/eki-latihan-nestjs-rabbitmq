import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {

  const app_microservices = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      // urls: ['amqp://guest:guest@localhost:5672/hello'],
      // urls: ['amqps://pcgjiwdh:NvoLZXkWunaD4JtZsaq3qfas_cPywvRo@baboon.rmq.cloudamqp.com/pcgjiwdh'],  
      // urls: ['amqp://ekiuser2:ekipassword@0.0.0.0:5672'],
      urls: ['amqp://ekiuser:ekipassword@0.0.0.0:5672'],
      queue:  'EKITESTING_SERVICE',
    
      queueOptions: {
        durable: false
      },
    },
  });
  await app_microservices.listen();


  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}
bootstrap();

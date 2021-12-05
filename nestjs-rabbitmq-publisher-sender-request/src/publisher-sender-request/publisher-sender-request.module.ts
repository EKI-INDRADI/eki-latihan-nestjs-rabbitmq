import { Module } from '@nestjs/common';
import { PublisherSenderRequestService } from './publisher-sender-request.service';
import { PublisherSenderRequestController } from './publisher-sender-request.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // ClientsModule.register([
    //   { name: 'EKITESTING_SERVICE', transport: Transport.TCP },
    // ]),

    ClientsModule.register([
      {
        name: 'EKITESTING_SERVICE', 
        transport: Transport.RMQ,
        options: {
        //  urls: ['amqp://ekiuser:ekipassword@127.0.0.1:5672/EKITESTING_SERVICE'], //https://github.com/jwalton/node-amqp-connection-manager/issues/49
        //  urls: ['amqp://ekiuser:ekipassword@127.0.0.1:5672'], 
        //  urls: ['amqp://ekiuser:ekipassword@0.0.0.0:5672'],  // ampq ga keiatan error , amps error
        //  urls: ['amqp://ekiuser:ekipassword@192.168.100.8:5672'],  // ampq ga keiatan error , amps error

        //  urls: ['amqps://pcgjiwdh:NvoLZXkWunaD4JtZsaq3qfas_cPywvRo@baboon.rmq.cloudamqp.com/pcgjiwdh'],  
        //  urls: ['amqp://ekiuser:ekipassword@127.0.0.1:5672/EKITESTING_SERVICE'],

         urls: ['amqp://ekiuser:ekipassword@0.0.0.0:5672'],
        //  urls: ['amqp://ekiuser:ekipassword@192.168.100.8:5672'],
        
         // cmd administrator check 
         // https://www.alphr.com/how-to-check-which-ports-open-windows-10-pc/
         //netstat -ab 
         //netstat -aon
       
         // urls: ['amqp://127.0.0.1'],
          // urls: ['amqp://127.0.0.1:5672'],
          queue: 'EKITESTING_SERVICE',
          // queue: 'EKITESTING_SERVICE',
          
          queueOptions: {
            durable: false //https://wanago.io/2020/11/23/api-nestjs-rabbitmq-microservices/
          },
          // noAck: false,
    
        },
      },
    ])

  ],
  controllers: [PublisherSenderRequestController],
  providers: [PublisherSenderRequestService]
})
export class PublisherSenderRequestModule { }

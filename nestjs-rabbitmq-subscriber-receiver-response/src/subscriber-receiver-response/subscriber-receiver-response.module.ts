import { Module } from '@nestjs/common';
import { SubscriberReceiverResponseService } from './subscriber-receiver-response.service';
import { SubscriberReceiverResponseController } from './subscriber-receiver-response.controller';

@Module({
  controllers: [SubscriberReceiverResponseController],
  providers: [SubscriberReceiverResponseService]
})
export class SubscriberReceiverResponseModule {}

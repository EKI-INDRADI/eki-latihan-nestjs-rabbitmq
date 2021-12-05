import { Injectable } from '@nestjs/common';
import { CreateSubscriberReceiverResponseDto } from './dto/create-subscriber-receiver-response.dto';
import { UpdateSubscriberReceiverResponseDto } from './dto/update-subscriber-receiver-response.dto';

@Injectable()
export class SubscriberReceiverResponseService {
  create(createSubscriberReceiverResponseDto: CreateSubscriberReceiverResponseDto) {
    return 'This action adds a new subscriberReceiverResponse';
  }

  findAll() {
    return `This action returns all subscriberReceiverResponse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriberReceiverResponse`;
  }

  update(id: number, updateSubscriberReceiverResponseDto: UpdateSubscriberReceiverResponseDto) {
    return `This action updates a #${id} subscriberReceiverResponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriberReceiverResponse`;
  }
}

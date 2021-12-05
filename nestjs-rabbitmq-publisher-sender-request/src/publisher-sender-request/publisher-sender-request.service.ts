import { Injectable } from '@nestjs/common';
import { CreatePublisherSenderRequestDto } from './dto/create-publisher-sender-request.dto';
import { UpdatePublisherSenderRequestDto } from './dto/update-publisher-sender-request.dto';

@Injectable()
export class PublisherSenderRequestService {
  create(createPublisherSenderRequestDto: CreatePublisherSenderRequestDto) {
    return 'This action adds a new publisherSenderRequest';
  }

  findAll() {
    return `This action returns all publisherSenderRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publisherSenderRequest`;
  }

  update(id: number, updatePublisherSenderRequestDto: UpdatePublisherSenderRequestDto) {
    return `This action updates a #${id} publisherSenderRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} publisherSenderRequest`;
  }
}

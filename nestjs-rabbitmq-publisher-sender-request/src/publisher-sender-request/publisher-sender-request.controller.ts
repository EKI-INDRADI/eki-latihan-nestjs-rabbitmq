import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { PublisherSenderRequestService } from './publisher-sender-request.service';
import { CreatePublisherSenderRequestDto } from './dto/create-publisher-sender-request.dto';
import { UpdatePublisherSenderRequestDto } from './dto/update-publisher-sender-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, Observable, firstValueFrom } from 'rxjs';
import { Message } from './/etc/message.event';

@Controller('publisher-sender-request')
export class PublisherSenderRequestController {
  constructor(
    @Inject('EKITESTING_SERVICE') private client: ClientProxy,
    private readonly publisherSenderRequestService: PublisherSenderRequestService
  ) {
    // this.client.connect()
  }


  @Post('rabbitmq-sender')
  // async createRabbitMqSender(@Body() req_body: any): Promise<Observable<any>> { // FIX : Promise<Observable<any>>
  // createRabbitMqSender(@Body() req_body: any): Promise<Observable<any>> {
  // createRabbitMqSender(@Body() req_body: any): Observable<any> 
  //  createRabbitMqSender(@Body() req_body: any){ 
  async createRabbitMqSender(@Body() req_body: any) { //: Promise<Observable<any>>
    try {
      // return this.client.send({ 
      // https://wanago.io/2020/11/23/api-nestjs-rabbitmq-microservices/
      // https://rxjs.dev/api/index/function/lastValueFrom

      // lastValueFrom(this.client.send({
      //   cmd: 'from publisher-sender-request services'
      // }, JSON.stringify(req_body)))

      // let data : any  = await lastValueFrom(this.client.send('from publisher-sender-request services', JSON.stringify(req_body)))
      // lastValueFrom(this.client.send('from publisher-sender-request services', JSON.stringify(req_body))) 

      // lastValueFrom(this.client.send('from publisher-sender-request services', JSON.stringify(req_body))) 

      //  this.client.send({
      //       cmd: 'from-publisher-sender-request services'
      //     }, JSON.stringify(req_body))


      // let data: any = null // bug fix rxjs "no elements in sequence"

      // data = await lastValueFrom(this.client.send('from publisher-sender-request services', JSON.stringify(req_body)))  // (harus nunggu subcriber on)


     // lastValueFrom(this.client.send('from publisher-sender-request services', JSON.stringify(req_body))) //(gak harus nunggu subcriber  & muncul error abaikan)

      this.client.send('from publisher-sender-request services', JSON.stringify(req_body)).subscribe(() => {
        console.log("from publisher-sender-request services'")
      }) //(gak harus nunggu subcriber  & muncul error abaikan)

      return req_body



    } catch (error) {

      let error_data: any = {
        statusCode: 0,
        message: error.message
      }
      return error_data
    }

    // return this.client.send<number>({ cmd: 'sum' }, [1,2,3,4]);
    // lastValueFrom(this.client.send({ cmd: 'sum' }, JSON.stringify(req_body)))
    // cmd: 'sum' 
    // return  this.client.send({}, JSON.stringify(req_body))


    // return this.client.send({  // https://wanago.io/2020/11/23/api-nestjs-rabbitmq-microservices/
    //   cmd: 'add-subscriber'
    // },JSON.stringify(req_body))


    // }

    // createRabbitMqSender(@Body() req_body: any) {
    // const pattern = { cmd: 'sum' };
    // const payload = [1, 2, 3];
    // return this.client.send<number>(pattern, payload);

    // return lastValueFrom(this.client.send<number>({ cmd: 'sum' }, [1, 2, 3, 4]))

    // createRabbitMqSender(@Body() req_body: any): Observable<any> {

    // console.log(req_body)
    // this.client.emit<any>('message_printed', new MessageEvent('Hello World'))
    // this.client.send(JSON.stringify(req_body), {})
    //lastValueFrom(this.client.send(JSON.stringify(req_body), {}))
    // return lastValueFrom(this.client.send(JSON.stringify(req_body), {})) // this.client.emit<any>('message_printed', new Message('Hello World'))

    // this.client.emit<any>('message_printed', new Message('Hello World'));
    // return 'Hello World printed';

    // this.client.send(JSON.stringify(req_body), {})
    // this.client.emit<any>('message_printed', new Message('Hello World'));
    // this.client.send(JSON.stringify(req_body), {}) 
    // this.client.emit<any>('message_printed', new Message('Hello World'));
    // this.client.send(JSON.stringify(req_body), {}) 

    // getHello(@Body() body: number[]): Observable<number> {
    // let data  : any =   { statusCode : 1}
    // lastValueFrom(this.client.send<number>({ cmd: 'sum' }, [1, 2, 3, 4]))
    // console.log(this.client.send<number>({ cmd: 'sum' }, [1, 2, 3, 4]))
    // }

    // this.client.emit<any>('message_printed', new Message('Hello World'))
    // return this.client.send<number>({ cmd: 'sum' }, [1, 2, 3, 4])
    // return this.client.emit<any>('message_printed', new Message('Hello World'))
  }


  @Post()
  create(@Body() createPublisherSenderRequestDto: CreatePublisherSenderRequestDto) {
    return this.publisherSenderRequestService.create(createPublisherSenderRequestDto);
  }

  @Get()
  findAll() {
    return this.publisherSenderRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publisherSenderRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublisherSenderRequestDto: UpdatePublisherSenderRequestDto) {
    return this.publisherSenderRequestService.update(+id, updatePublisherSenderRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publisherSenderRequestService.remove(+id);
  }


}

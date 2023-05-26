import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

//prefix for every route in this controller
@Controller('cats')
export class CatsController {
  @Get() //can add path information in the decorator to add to the route. example @Get('breed')
  //   findAll(@Req() request: Request): string {
  findAll(): string {
    return 'This action returns all cats!';
  }
}

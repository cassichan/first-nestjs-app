import { Controller, Get, HttpCode, Post, Header, Param } from '@nestjs/common';

//prefix for every route in this controller
@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none') //can add headers to the response
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }
  @Get() //can add path information in the decorator to add to the route. example @Get('breed')
  findAll(): string {
    return 'This action returns all cats!';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    //decorate the params method to make the route parameters available as properties of that decorated method parameter
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}

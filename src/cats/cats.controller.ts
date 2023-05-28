import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus,
  ForbiddenException,
} from '@nestjs/common';
import { Response } from 'express';
import { UpdateCatDto } from './update-cat.dto';

//prefix for every route in this controller
@Controller('cats')
export class CatsController {
  @Post()
  async create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }
  // @Get() //can add path information in the decorator to add to the route. example @Get('breed')
  // findAll(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json([]);
  // }

  @Get()
  async findAll() {
    throw new ForbiddenException();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    //decorate the params method to make the route parameters available as properties of that decorated method parameter
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

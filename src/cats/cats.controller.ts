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
  ParseIntPipe,
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

  //define catsService. will throw exception if route is not a numeric string
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
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

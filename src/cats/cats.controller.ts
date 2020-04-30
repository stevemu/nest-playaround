import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Redirect,
  Param,
  Body,
  Query,
  Put,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto, ListAllEntities, UpdateCatDto } from "./dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interface";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // @Get()
  // async findAll(@Query() query: ListAllEntities) {
  //   return query.limit;
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    // return this.catsService.findAll();
    // throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: "This is a custom message"
      },
      403
    );
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return `this action udpates a ${id} cat`;
  }

  @Get(":id")
  findOne(@Param() params): string {
    // console.log(params.id);
    return `this action returns a ${params.id} cat`;
  }
}

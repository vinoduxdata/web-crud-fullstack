import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Prisma, Student } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'prisma/prisma.service';
import { StudentDto } from './student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly prismaService: PrismaService) { }

  @Get()
  findAll(): Promise<StudentDto[]> {
    return this.prismaService.student.findMany()
  }

  @Get(':id')
  async getPost(@Param('id') id: number): Promise<Student> {

    console.log("id", typeof (id));
    id = Number(id);
    console.log("id1", typeof (id));


    const studentDetail = await this.prismaService.student.findUnique({
      where: {
        id
      },
    });
    console.log(studentDetail);
    return studentDetail;
  }


  @Post()
  create(@Body() { id, name, course }: StudentDto): Promise<Student> {
    return this.prismaService.student.create({ data: { id, name, course } })
  }




  @Put(':id')
  updatePost(@Param('id') id: number, @Body() post: StudentDto) {
    id = Number(id);
    console.log("id", typeof (id));
    console.log(post);
    return this.prismaService.student.update({

      data: {
        ...post

      },
      where: {
        id,
      }
    });

  }





  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.prismaService.student.delete({
      where: { id: Number(id) }
    })
  }

}
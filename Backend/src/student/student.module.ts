import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { StudentController } from './student.controller';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController]
})
export class StudentModule { }

import { Prisma, Student } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { StudentDto } from './student.dto';
export declare class StudentController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<StudentDto[]>;
    getPost(id: number): Promise<Student>;
    create({ id, name, course }: StudentDto): Promise<Student>;
    updatePost(id: number, post: StudentDto): Prisma.Prisma__StudentClient<Student>;
    deleteStudent(id: number): Prisma.Prisma__StudentClient<Student>;
}

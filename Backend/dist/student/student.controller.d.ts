import { PrismaService } from 'src/prisma/prisma.service';
import { StudentDto } from './student.dto';
export declare class StudentController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<StudentDto[]>;
    Create({ id, name, course }: StudentDto): Promise<StudentDto>;
}

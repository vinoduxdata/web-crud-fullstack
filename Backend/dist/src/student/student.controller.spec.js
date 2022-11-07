"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const student_controller_1 = require("./student.controller");
describe('StudentController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [student_controller_1.StudentController],
        }).compile();
        controller = module.get(student_controller_1.StudentController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=student.controller.spec.js.map
import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Appointment } from './schema/appointment.schema';
import { SubmitAppointmentDTO } from './dto/submit-appointment.dto';

@Controller('appointment')
export class AppointmentController {
    constructor (private appointmentService: AppointmentService) {}
    @Get()
    async findAll():Promise<Appointment[]> {
        return this.appointmentService.findAll()
    }

    @Post()
    // @UsePipes(new ValidationPipe())
    async submitAppointment(@Body() submitAppointment:SubmitAppointmentDTO): Promise<Appointment> {
        console.log("DTO Object",submitAppointment);
        
        return this.appointmentService.createAppointment(submitAppointment)
    }

    @Get(':id')
    async findAppointment(@Param() id:string):Promise<Appointment> {
        return this.appointmentService.findById(id);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Appointment } from './schema/appointment.schema';

@Injectable()
export class AppointmentService {
    constructor(
        @InjectModel('Appointment')
        private appointmentModel: mongoose.Model<Appointment>
    ){}

    // find all appointment
    async findAll() :Promise<Appointment[]> {
        const appointments = await this.appointmentModel.find().sort({createdAt:'desc'});
        return appointments;
    }

    // find appointment by id
    async findById(id:string): Promise<Appointment> {
        const appointment = await this.appointmentModel.findById(id);
        return appointment;
    }

    // submit appointment
    async createAppointment(appt : Appointment):Promise<Appointment> {
        const newAppointment = await this.appointmentModel.create(appt);
        return newAppointment;
    }

}

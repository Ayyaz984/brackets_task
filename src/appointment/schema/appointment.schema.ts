import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

@Schema({timestamps:true})

export class Appointment {
    @Prop({required:true})
    doctorId: string;
    @Prop({required:true})
    patientName: string;
    @Prop()
    patientPhone:string;
    @Prop({required:true})
    appointmentDate: Date;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment)
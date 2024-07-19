import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SubmitAppointmentDTO {
    @IsString()
    @IsNotEmpty()
    readonly doctorId:string;
    
    @IsString()
    @IsNotEmpty()
    readonly patientName:string;
    
    @IsString()
    @IsOptional()
    readonly patientPhone:string;

    @IsNotEmpty()
    readonly appointmentDate:Date
}
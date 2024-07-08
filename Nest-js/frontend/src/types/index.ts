// src/types.ts

export interface Biodata {
    id?: number;
    firstName: string; // Changed from first_name
    lastName: string; // Changed from surname
    middleName?: string; // Changed from middle_name
    dateOfBirth?: string; // Changed from date_of_birth
    HOME_address?: string; // Changed from home_address
    dateOfReg?: string; // Changed from date_of_registration
    MAT_no: string; // Changed from string to boolean
}

export interface ClinicalRecord {
    id?: number;
    MAT_no: string; // Added to match CreateRecordDto
    ClinicDate: string; // Changed from clinic_date
    NatureOfAilment: string; // Changed from nature_of_ailment
    MedicinePrescribed: string; // Changed from medicine_prescribed
    procedure: string; // Changed from procedure_undertaken
    DateOfNextApt: string; // Changed from date_of_next_appointment
}

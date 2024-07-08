// src/components/ClinicalRecordForm.tsx

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { ClinicalRecord } from '../types';
import { addClinicalRecord } from '../services/api';
import styled from 'styled-components';

const FormWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & .MuiTextField-root {
    margin-bottom: 20px;
  }
`;

const ClinicalRecordForm: React.FC = () => {
  const [formData, setFormData] = useState<ClinicalRecord>({
    MAT_no: '',
    ClinicDate: '',
    NatureOfAilment: '',
    MedicinePrescribed: '',
    procedure: '',
    DateOfNextApt: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newRecord = await addClinicalRecord(formData);
      console.log('Clinical record added successfully:', newRecord);
    } catch (error) {
      console.error('Error adding clinical record:', error);
    }
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          name="MAT_no"
          value={formData.MAT_no}
          onChange={handleChange}
          label="MAT Number"
          fullWidth
          required
        />
        <TextField
          type="date"
          name="ClinicDate"
          value={formData.ClinicDate}
          onChange={handleChange}
          label="Clinic Date"
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="NatureOfAilment"
          value={formData.NatureOfAilment}
          onChange={handleChange}
          label="Nature of Ailment"
          fullWidth
          required
          multiline
        />
        <TextField
          name="MedicinePrescribed"
          value={formData.MedicinePrescribed}
          onChange={handleChange}
          label="Medicine Prescribed"
          fullWidth
          multiline
        />
        <TextField
          name="procedure"
          value={formData.procedure}
          onChange={handleChange}
          label="Procedure Undertaken"
          fullWidth
          multiline
        />
        <TextField
          type="date"
          name="DateOfNextApt"
          value={formData.DateOfNextApt}
          onChange={handleChange}
          label="Date of Next Appointment"
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '10px', backgroundColor: '#4CAF50' }}
        >
          Add Clinical Record
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default ClinicalRecordForm;

import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Biodata } from '../types';
import { addPatient } from '../services/api';
import styled from 'styled-components';

const FormWrapper = styled.div`
  margin-bottom: 20px;
`;

const PatientForm: React.FC = () => {
  const [formData, setFormData] = useState<Biodata>({
    MAT_no: '', 
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    HOME_address: '',
    dateOfReg: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newPatient = await addPatient(formData);
      console.log('Patient added successfully:', newPatient);
      // Clear the form after successful submission
      setFormData({
        MAT_no: '', 
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        HOME_address: '',
        dateOfReg: '',
      });
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          label="First Name"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          label="Surname"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          label="Middle Name"
          fullWidth
          margin="normal"
        />
        <TextField
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          label="Date of Birth"
          fullWidth
          margin="normal"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="HOME_address"
          value={formData.HOME_address}
          onChange={handleChange}
          label="Home Address"
          fullWidth
          margin="normal"
          required
          multiline
        />
        <TextField
          type="date"
          name="dateOfReg"
          value={formData.dateOfReg}
          onChange={handleChange}
          label="Date of Registration"
          fullWidth
          margin="normal"
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
          style={{ marginTop: '10px' }}
        >
          Add Patient
        </Button>
      </form>
    </FormWrapper>
  );
};

export default PatientForm;

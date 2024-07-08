// src/pages/ManagePatientsPage.tsx

import React from 'react';
import { Container, Typography } from '@mui/material';
import PatientForm from '../components/PatientForm';
import PatientList from '../components/PatientList';

const ManagePatientsPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Manage Patients
      </Typography>
      <PatientForm />
      <PatientList />
    </Container>
  );
};

export default ManagePatientsPage;


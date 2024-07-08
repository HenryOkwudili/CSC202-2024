// src/pages/ManageClinicalRecordsPage.tsx

import React from 'react';
import { Container, Typography } from '@mui/material';
import ClinicalRecordForm from '../components/ClinicalRecordForm';
import ClinicalRecordList from '../components/ClinicalRecordList';

const ManageClinicalRecordsPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Manage Clinical Records
      </Typography>
      <ClinicalRecordForm />
      <ClinicalRecordList />
    </Container>
  );
};

export default ManageClinicalRecordsPage;




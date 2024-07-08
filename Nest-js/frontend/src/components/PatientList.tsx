// src/components/PatientList.tsx

import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import { getPatients } from '../services/api';

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getPatients();
        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Patients List
      </Typography>
      <List>
        {patients.map((patient) => (
          <ListItem key={patient.id}>
            <ListItemText
              primary={`${patient.firstName || 'Unknown'} ${patient.lastName || 'Unknown'}`}
              secondary={`Date of Birth: ${patient.dateOfBirth || 'Not provided'}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default PatientList;

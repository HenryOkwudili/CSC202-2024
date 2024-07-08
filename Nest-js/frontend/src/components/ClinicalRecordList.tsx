// src/components/ClinicalRecordList.tsx

import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import { getClinicalRecords } from '../services/api';
import { ClinicalRecord } from '../types'; // Adjust the import as per your actual type definition

const ClinicalRecordList: React.FC = () => {
  const [clinicalRecords, setClinicalRecords] = useState<ClinicalRecord[]>([]); // Explicitly specify type ClinicalRecord[]

  useEffect(() => {
    const fetchClinicalRecords = async () => {
      try {
        const recordsData = await getClinicalRecords();
        setClinicalRecords(recordsData);
      } catch (error) {
        console.error('Error fetching clinical records:', error);
      }
    };

    fetchClinicalRecords();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Clinical Records List
      </Typography>
      <List>
        {clinicalRecords.map((record: ClinicalRecord) => (
          <ListItem key={record.id}>
            <ListItemText
              primary={`MAT Number: ${record.MAT_no}`}
              secondary={`Clinic Date: ${record.ClinicDate}, Nature of Ailment: ${record.NatureOfAilment}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ClinicalRecordList;

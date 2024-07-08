import axios from 'axios';
import { Biodata, ClinicalRecord } from '../types';

const api = axios.create({
  baseURL: '/api', // Ensure this points to your backend URL
});

export const getPatients = async (): Promise<Biodata[]> => {
  const response = await api.get('/patients');
  return response.data;
};

export const addPatient = async (patient: Biodata): Promise<Biodata> => {
  const response = await api.post('/patients', patient);
  return response.data;
};

export const getClinicalRecords = async (): Promise<ClinicalRecord[]> => {
  const response = await api.get('/clinical-records');
  return response.data;
};

export const addClinicalRecord = async (record: ClinicalRecord): Promise<ClinicalRecord> => {
  const response = await api.post('/clinical-records', record);
  return response.data;
};

export default api;

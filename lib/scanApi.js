import api from './api';

export const startScan = async (domain, scanOptions) => {
  try {
    const response = await api.post('/scan', { domain, scanOptions });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error starting scan';
  }
};

import api from './api';

export const saveLead = async (leadData) => {
  try {
    const response = await api.post('/contact/lead', leadData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error saving lead';
  }
};

export const submitContact = async (contactData) => {
  try {
    const response = await api.post('/contact', contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error sending message';
  }
};

import API from "./api";

export const sendQuoteRequest = async (formData) => {
  return await API.post("/quote", formData);
};

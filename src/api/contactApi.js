import API from "./api";

export const sendContactForm = async (formData) => {
  return await API.post("/contact", formData);
};

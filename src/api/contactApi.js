import API from "./api";

export const sendContactForm = async (data) => {
  return API.post("/contact", data);
};

import API from "./api";

export const sendContactForm = async (data) => {
  // Use /api/contact as the base URL is likely just the domain
  return API.post("/api/contact", data);
};

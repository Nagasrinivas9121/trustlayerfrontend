import API from "./api";

export const sendQuoteForm = async (data) => {
  return API.post("/api/quote", data);
};

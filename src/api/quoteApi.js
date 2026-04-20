import API from "./api";

export const sendQuoteForm = async (data) => {
  return API.post("/quote", data);
};

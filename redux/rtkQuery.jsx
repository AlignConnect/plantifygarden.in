
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_APP_API_URL,
  prepareHeaders(headers) {
    const token =process.env.SHOPIFY_GENERATE_TOKEN;

    headers.append("Authorization", token);
    return headers;
  },
});
const rtkBaseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export default rtkBaseQuery;

export const resolveRTKError = (error) => {
  let message = "Something went wrong!";
  if (error && Object.hasOwn(error, "message")) {
    message = error.message;
  }

  if (message === "Rejected") {
    message = "Internet error. Please check your connection.";
  }

  return message;
};



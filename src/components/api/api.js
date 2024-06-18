import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = {
  middleware: () => (storeAPI) => (next) => (action) => {
    // Your middleware logic here
    console.log("API Middleware:", action);
    return next(action);
  },
};

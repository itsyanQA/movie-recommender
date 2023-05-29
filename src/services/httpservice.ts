import axios from "axios";
import { ObjectLiteral } from "../models/ObjectLiteral";

const _axios = axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com",
});

type httpServiceType = {
  endpoint: string;
  method: string;
  data: ObjectLiteral;
};

export const httpService = async ({ method, endpoint, data }: httpServiceType) => {
  try {
    switch (method) {
      case "GET":
        return (await _axios.get(endpoint)).data;
      case "POST":
        return (await _axios.post(endpoint, data)).data;
      case "PUT":
        return (await _axios.put(endpoint)).data;
      case "DELETE":
        return (await _axios.delete(endpoint)).data;
      default:
        throw new Error(`Unsupported http method: [${method}]`);
    }
  } catch (error) {
    console.error("An error occurred during the HTTP request:", error);
    throw error;
  }
};

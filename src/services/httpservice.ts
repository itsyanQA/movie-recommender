import axios from "axios";
import { ObjectLiteral } from "../models/ObjectLiteral";
import { HttpMethod } from "../models/enum/HttpMethod";

const _axios = axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com",
});

type httpServiceType = {
  endpoint: string; // TODO: Use enum values for all relevant endpoint
  method: HttpMethod;
  data: ObjectLiteral;
};

export const httpService = async ({ method, endpoint, data }: httpServiceType) => {
  try {
    switch (method) {
      case HttpMethod.GET:
        return (await _axios.get(endpoint)).data;
      case HttpMethod.POST:
        return (await _axios.post(endpoint, data)).data;
      case HttpMethod.PUT:
        return (await _axios.put(endpoint)).data;
      case HttpMethod.DELETE:
        return (await _axios.delete(endpoint)).data;
      default:
        throw new Error(`Unsupported http method: [${method}]`);
    }
  } catch (error) {
    console.error("An error occurred during the HTTP request:", error);
    throw error;
  }
};

import axios from 'axios';

import { API_URL as developmentAPI } from "../../data/config.development";
import { API_URL as productionAPI } from "../../data/config.production";

const API_URL = process.env.NODE_ENV === 'production' ? productionAPI : developmentAPI;


export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { emailOrUserName: email, password });

  
  return response;
};

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response;
};

export const resetPassword = async (email) => {
  const response = await axios.post(`${API_URL}/reset-password`, { email });
  return response;
};

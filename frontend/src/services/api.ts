import axios from "axios";

const API = axios.create({
  baseURL: "https://dashboard-backend1-5xgg.onrender.com"
});

export async function fetchWidgetData(type: string) {
  const response = await API.get(`/${type}`);
  return response.data.data;
}

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/widgets"
});

export async function fetchWidgetData(type: string) {
  const response = await API.get(`/${type}`);
  return response.data.data;
}

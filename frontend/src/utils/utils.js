import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const API_URL = "http://localhost:3001";
const AUTH_API_URL = "http://localhost:3002";

// fetchRequest('/posts')
export default async function fetchRequest(url, params) {
  let response = await fetch(`${API_URL}${url}`, params);
  let result = await response.json();
  console.log("fetchRequest", { url, result });
  return result;
}

export async function fetchAuthRequest(url, params) {
  let response = await fetch(`${AUTH_API_URL}${url}`, params);
  let result = await response.json();
  return result;
}

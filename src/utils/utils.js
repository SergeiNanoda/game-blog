const API_URL = "http://localhost:3001";

// fetchRequest('/posts')
export default async function fetchRequest(url, params) {
  let response = await fetch(`${API_URL}${url}`, params);
  let result = await response.json();
  console.log("fetchRequest", { url, result });
  return result;
}

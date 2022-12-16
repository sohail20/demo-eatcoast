// BASE_URL for APIS
const BASE_URL = "https://backend.eatcoast.ca/v1/api";
const token = localStorage.getItem("token");
const config = {
  "Authorization": `Bearer ${token}`,
};

export { config, BASE_URL };

// BASE_URL for APIS https://backend.eatcoast.ca/v1/api
const BASE_URL = "http://localhost:5055/api";
const token = localStorage.getItem("token");
const config = {
  "Authorization": `Bearer ${token}`,
};

export { config, BASE_URL };

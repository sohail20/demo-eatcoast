// BASE_URL for APIS https://lionfish-app-osa4k.ondigitalocean.app/api
const BASE_URL = "http://localhost:5055/api";
const token = localStorage.getItem("token");
const config = {
  "Authorization": `Bearer ${token}`,
};

export { config, BASE_URL };

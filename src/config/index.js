// BASE_URL for APIS https://lionfish-app-osa4k.ondigitalocean.app/api
const BASE_URL = "https://lionfish-app-osa4k.ondigitalocean.app/api";
const token = localStorage.getItem("token");
const config = {
  "Authorization": `Bearer ${token}`,
};

export { config, BASE_URL };

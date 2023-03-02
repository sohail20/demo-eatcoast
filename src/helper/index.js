export const getCurrentEmpoyee = () => {
  const user = localStorage.getItem("employee")
  const userCaterer = JSON.parse(localStorage.getItem("user"))

  if (userCaterer !== "" || userCaterer !== null && user === "" || user === null) {
    localStorage.setItem("employee", JSON.stringify({ ...userCaterer, role: "manager" }))
  }

  const userData = localStorage.getItem("employee")

  if (userData !== "" && userData !== null) {
    return JSON.parse(userData)
  }

  return false
}

export const getCaterer = () => {
  const userCaterer = localStorage.getItem("user")
  if (userCaterer !== "" || userCaterer !== null) {
    return JSON.parse(userCaterer)
  }
  return false
}

export const generateImageURL = (key, image) => {
  const development = "http://localhost:5055/image"
  const production = "https://backend.eatcoast.ca/v1/image"
  return `${process.env.NODE_ENV === "development" ? development : production}/${key}/${image}`
}

export const subscriptionType = [
  {
    label: "Personal subscription",
    id: "personal-subscription",
    color: "#7B49E5",
  },
  {
    label: "Fitness subscription",
    id: "fitness-subscription",
    color: "#FF8D85",
  },
  {
    label: "Multiple subscription",
    id: "multiple-subscription",
    color: "#158FAD",
  },
  { label: "Single order", id: "single-order", color: "#7ECC49" },
  {
    label: "Bussines subscription",
    id: "bussines-subscription",
    color: "#FF9933",
  },
];

export const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};
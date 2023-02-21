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
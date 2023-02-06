export const getCurrentEmpoyee = () => {
    const user = localStorage.getItem("employee")
    if (user !== "" && user !== null) {
        return JSON.parse(user)
    }

    return false
}
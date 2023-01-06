import CustomDataGrid from "components/DataTable/DataGrid";
import { Avatar } from "@mui/material";
import MenuButton from "components/Inputs/MenuButton";
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from "api/employee";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tableColumns = [
  { field: "id", headerName: "#", width: 240 },
  {
    field: "photo",
    headerName: "Photo",
    width: 260,
    renderCell: () => {
      return (
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXRsnR0QT7j2y_UF5kppM3OI-KkfwASC-EP7g6CYPAQ&s"
        />
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
];

const filterData = data =>{
 const {_id,email,name} = data 
 return {id:_id, email,name, photo:""}
}

const EmployeesTable = ({ handleOnAddClick,handleEditEmployee }) => {
  const navigate = useNavigate()
  const [employeesFilterData,setEmployeesFilteredData] = useState([])
  const [deleteEmployee,{isLoading:deleteLoading}] = useDeleteEmployeeMutation()
  const { data: employees, isLoading } = useGetEmployeesQuery();
  
  useEffect(()=>{
    if(employees){
      const dataEmployee = employees.data.map(item=>filterData(item))
      setEmployeesFilteredData(dataEmployee)
    }
  },[employees,deleteLoading])

  const handleAction = (type, id) => {
    switch (type) {
      case "edit":
        handleEditEmployee(id)
        break;
  
      case "delete":
        deleteEmployee({id});
        break;
  
      default:
        break;
    }
  };
    
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <CustomDataGrid
        heading="Employees"
        handleAction={(e) => console.log(e)}
        tableRow={employeesFilterData}
        tableColumns={tableColumns}
        handleOnAddClick={handleOnAddClick}
        handleMenuAction={handleAction}
      />
    </>
  );
};

export default EmployeesTable;

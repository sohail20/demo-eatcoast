import CustomDataGrid from "components/DataTable/DataGrid";
import { Avatar } from "@mui/material";
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from "api/employee";
import { useEffect, useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

const tableColumns = [
  { field: "id", headerName: "ID", width: 240 },
  // {
  //   field: "photo",
  //   headerName: "Photo",
  //   width: 260,
  //   renderCell: () => {
  //     return (
  //       <Avatar
  //         alt="Remy Sharp"
  //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXRsnR0QT7j2y_UF5kppM3OI-KkfwASC-EP7g6CYPAQ&s"
  //       />
  //     );
  //   },
  // },
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
  {
    field: "role",
    headerName: "Type",
    width: 230,
  },
];

const filterData = (data) => {
  const { _id, email, name, role } = data;
  return { id: _id, email, name, photo: "", role };
};

const EmployeesTable = ({ handleOnAddClick, handleEditEmployee }) => {
  const navigate = useNavigate();
  const [employeesFilterData, setEmployeesFilteredData] = useState([]);
  const [deleteEmployee, { isLoading: deleteLoading }] =
    useDeleteEmployeeMutation();
  const { data: employees, isLoading } = useGetEmployeesQuery();

  useEffect(() => {
    if (employees) {
      const dataEmployee = employees.data.map((item) => filterData(item));
      setEmployeesFilteredData(dataEmployee);
    }
  }, [employees, deleteLoading]);

  const handleAction = (type, id) => {
    switch (type) {
      case "edit":
        handleEditEmployee(id);
        break;

      case "delete":
        deleteEmployee({ id });
        break;

      default:
        break;
    }
  };

  const onChangeValue = useCallback(
    debounce((value) => {
      const tmpData = [];
      console.log("employees", employees);
      if (employees && employees.data) {
        employees.data
          .filter((item) => {
            console.log("asdasd", item.name, value);
            // if (item.name.includes(value) || value == "") return item;
          })
          .map((item, index) => {
            // console.log("item", item);
          });
        // console.log("dataEmployee",dataEmployee)
      }
      // setEmployeesFilteredData(dataEmployee);
    }, 1500),
    []
  );

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
        handleSearch={(e) => onChangeValue(e)}
      />
    </>
  );
};

export default EmployeesTable;

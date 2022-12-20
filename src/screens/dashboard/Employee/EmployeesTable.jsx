import CustomDataGrid from "components/DataTable/DataGrid";
import { Avatar } from "@mui/material";
import MenuButton from "components/Inputs/MenuButton";
import { useGetEmployeesQuery } from "api/employee";

const handleAction = (type, id) => {
  switch (type) {
    case "edit":
      console.log("edited" + id);
      break;

    case "delete":
      console.log("deleted " + id);
      break;

    default:
      break;
  }
};
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
  {
    field: "action",
    headerName: "Action",
    width: 230,
    renderCell: (params) => {
      return (
        <>
          <MenuButton
            items={[
              { label: "Edit Account", id: "edit" },
              { label: "Delete Account", id: "delete" },
            ]}
            onClick={(type) => handleAction(type, params.row.name)}
          />
        </>
      );
    },
  },
];

const tableRow = [
  {
    id: 1,
    photo: "ECS - 12345",
    name: "Mesopotamian cuisine",
    email: "09/11 - 09/18",
  },
];

const EmployeesTable = ({ handleOnAddClick }) => {
  const { data: employees, isLoading } = useGetEmployeesQuery();
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <CustomDataGrid
        heading="Employees"
        handleAction={(e) => console.log(e)}
        tableRow={tableRow}
        tableColumns={tableColumns}
        handleOnAddClick={handleOnAddClick}
      />
    </>
  );
};

export default EmployeesTable;

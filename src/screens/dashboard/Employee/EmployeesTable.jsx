import SimpleDataTable from "../../../components/DataTable/SimpleDataTable";

const EmployeesTable = () => {
  return (
    <>
      <SimpleDataTable
        topBar={{
          title: "Employee",
          buttonTitle: "Add Employee",
          handleOnClick: () => {
            console.log("I am clicked");
          },
        }}
      />
    </>
  );
};

export default EmployeesTable;

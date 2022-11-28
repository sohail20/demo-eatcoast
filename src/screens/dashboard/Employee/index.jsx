import React from "react";
import { Box } from "@mui/material";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import CustomIconButton from "../../../components/Button/CustomIconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { H1Typo, LightTitle } from "../../../components/Typography";
import {
  BorderContainer,
  FlexBoxContainer,
} from "../../../components/Containers";
import AddEmployees from "./AddEmployees";
import EmployeesTable from "./EmployeesTable";

const Employee = () => {
  return (
    <>
      <DashboardLayout>
        <Box p={3}>
          {/* <FlexBoxContainer width="100%">
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent="space-between"
            style={{ marginBottom: "20px", width:"100%" }}
          >
            <H1Typo>Employee</H1Typo>

            <CustomIconButton
              variant="contained"
              label="Add Employee"
              icon={<AddRoundedIcon style={{ color: "#fff" }} />}
            />
          </Box>
        </FlexBoxContainer>

        <BorderContainer style={{height:"232px"}}>
          <LightTitle>No employee added</LightTitle>
        </BorderContainer> */}

          <AddEmployees/>
          {/* <EmployeesTable /> */}
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Employee;

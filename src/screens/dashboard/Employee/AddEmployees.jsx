import { useState } from "react";
import { Radio, Box, Grid, Stack } from "@mui/material";
import {
  BorderContainer,
  FlexBoxContainer,
} from "../../../components/Containers";
import { H1Typo, LightTitle } from "../../../components/Typography";
import CustomInput from "../../../components/Inputs/CustomInput";
import CustomIconButton from "../../../components/Button/CustomIconButton";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const AddEmployees = () => {
  const [empoyeeType, setEmployeeType] = useState("");
  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        mb={4}
      >
        <CustomIconButton
          label=""
          icon={<ClearRoundedIcon style={{ color: "#E75C62" }} />}
        />
        <Box style={{ width: "100%", textAlign: "center" }}>
          <H1Typo>Add Employee</H1Typo>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} sm={2}></Grid>
        <Grid item xs={12} md={4} sm={12}>
          <BorderContainer
            onClick={() => {
              setEmployeeType("staff");
            }}
          >
            <FlexBoxContainer>
              <Radio checked={empoyeeType === "staff"}></Radio>
              <Box>
                <H1Typo>Staff</H1Typo>
                <LightTitle>
                  This staff member will handle daily subscriptions and will
                  have access to orders section only
                </LightTitle>
              </Box>
            </FlexBoxContainer>
          </BorderContainer>
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <BorderContainer
            onClick={() => {
              setEmployeeType("manager");
            }}
          >
            <FlexBoxContainer>
              <Radio checked={empoyeeType === "manager"}></Radio>
              <Box>
                <H1Typo>Manager</H1Typo>
                <LightTitle>
                  This employee will manage meal plan creations, and financials
                  and will have access to these sections
                </LightTitle>
              </Box>
            </FlexBoxContainer>
          </BorderContainer>
        </Grid>
        <Grid item xs={12} md={2} sm={2}></Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={3} sm={3}></Grid>
        <Grid item xs={12} md={6} sm={6}>
          <BorderContainer>
            <Stack spacing={2} style={{ width: "100%" }}>
              <CustomInput label={"Name"} placeholder="Name" />
              <CustomInput label={"Email"} placeholder="Email" />
              <CustomInput label={"Set Pin"} placeholder="X-X-X-X" />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <CustomIconButton label="Save as Draft" variant="outlined" />
                <CustomIconButton label="Submit" variant="contained" />
              </Box>
            </Stack>
          </BorderContainer>
        </Grid>
        <Grid item xs={12} md={3} sm={3}></Grid>
      </Grid>
    </>
  );
};

export default AddEmployees;

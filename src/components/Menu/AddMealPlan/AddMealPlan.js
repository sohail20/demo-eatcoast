import React, { useState } from "react";
import {
  Box,
  IconButton,
  styled,
  Typography,
  Stack,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";
import CustomIconButton from "../../Button/CustomIconButton";
import BackButton from "../../Button/CustomIconButton";
import SmallInfoCard from "../../Cards/SmallInfoCard";
import { FlexBoxContainer, BorderContainer } from "../../Containers";
import { H1Typo, H3Typo } from "../../Typography";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CustomizedModal from "../../Modal/CustomModal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const TopConainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "32px",
  gap: "24px",
  width: "100%",
  height: "auto",
  background: "#FFFFFF",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
}));

const CustomPaper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  width: "100%",
  height: "96px",
  background: " #FFFFFF",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
}));

const LightTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  maxWidth: "569px",
  letterSpacing: "0.015em",
  color: "#9EA3AE",
}));

const AddMealPlan = () => {
  const [planAddon, setPlanAddon] = useState({ mealPlan: "", addOn: "" });
  const [showAddMealPlan, setShowAddMealPlan] = useState(false);
  const [showAddOn, setShowAddOn] = useState(false);

  const [dataMealPlan, setDataMealPlan] = useState([
    {
      label: "Main course",
    },
    {
      label: "Sweet dishes",
    },
    {
      label: "Salad dishes",
    },
  ]);

  const [dataAddon, setDataAddon] = useState([
    {
      label: "Main course",
    },
    {
      label: "Sweet dishes",
    },
    {
      label: "Salad dishes",
    },
  ]);

  const handleAddData = (data, key) => {
    if (key === "mealplan") {
      setDataMealPlan([...dataMealPlan, { label: data }]);
      setPlanAddon({ mealPlan: "", addOn: "" });
    }
    if (key === "addon") {
      setDataAddon([...dataAddon, { label: data }]);
      setPlanAddon({ mealPlan: "", addOn: "" });
    }
  };

  return (
    <>
      <Box>
        <Box display={"flex"} alignItems="center">
          <BackButton
            icon={<ArrowBackIosIcon style={{ color: "#2B817B" }} />}
          />
          <Box style={{ width: "100%", textAlign: "center" }}>
            <H1Typo>Meal Plan</H1Typo>
          </Box>
        </Box>

        <Box mt={5}>
          <TopConainer>
            <SmallInfoCard
              borderLess
              data={{
                img: "https://picsum.photos/200",
                heading: "Mesopotamian cuisine",
                address:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              }}
              hasAddButton
            />

            {/* <TabsMealPlan/> */}

            <FlexBoxContainer style={{ width: "100%" }}>
              <H1Typo>Meal Courses</H1Typo>
              <CustomIconButton
                label="hello"
                variant={"outlined"}
                icon={<AddIcon style={{ color: "#2B817B" }} />}
              />
            </FlexBoxContainer>
            <CustomPaper>
              <LightTitle>No Meal Courses added</LightTitle>
            </CustomPaper>

            <FlexBoxContainer style={{ width: "100%" }}>
              <H1Typo>Add-ons</H1Typo>
              <CustomIconButton
                label="hello"
                variant={"outlined"}
                icon={<AddIcon style={{ color: "#2B817B" }} />}
              />
            </FlexBoxContainer>
            <CustomPaper>
              <LightTitle>No Add-ons added</LightTitle>
            </CustomPaper>
          </TopConainer>
        </Box>
      </Box>

      <CustomizedModal isOpened={true}>
        <FlexBoxContainer>
          <IconButton>
            <ClearIcon />
          </IconButton>
          <H1Typo>Add Contents</H1Typo>
          <CustomIconButton label="Save" variant={"contained"} />
        </FlexBoxContainer>

        <BorderContainer mt={2}>
          <Box style={{ width: "100%" }}>
            <Stack>
              <LightTitle>Meal Courses</LightTitle>
              {dataMealPlan.map((item) => (
                <FlexBoxContainer>
                  <H3Typo>{item.label}</H3Typo>
                  <Checkbox />
                </FlexBoxContainer>
              ))}
            </Stack>
            {showAddMealPlan ? (
              <FlexBoxContainer display="flex">
                <TextField
                  placeholder="Type your add-ons"
                  style={{ width: "80%", background: "#F6F6F6" }}
                  sx={{
                    ".MuiInputBase-root": {
                      height: "36px",
                    },
                  }}
                  value={planAddon.mealPlan}
                  onChange={(e) => {
                    setPlanAddon({ ...planAddon, mealPlan: e.target.value });
                  }}
                />
                <CustomIconButton
                  icon={<AddIcon style={{ color: "#fff", fontSize: "16px" }} />}
                  label="Add"
                  variant={"contained"}
                  onClick={() => handleAddData(planAddon.mealPlan, "mealplan")}
                />
              </FlexBoxContainer>
            ) : (
              <Box justifyContent="center" alignItems={"center"} display="flex">
                <Button
                  variant="text"
                  onClick={() => {
                    setShowAddMealPlan(true);
                  }}
                >
                  Other{" "}
                  <AddIcon style={{ color: "#1976d2", fontSize: "16px" }} />
                </Button>
              </Box>
            )}
          </Box>
        </BorderContainer>

        <BorderContainer mt={2}>
          <Box style={{ width: "100%" }}>
            <Stack>
              <LightTitle>Add-ons</LightTitle>
              {dataAddon.map((item) => (
                <FlexBoxContainer>
                  <H3Typo>{item.label}</H3Typo>
                  <Checkbox />
                </FlexBoxContainer>
              ))}
            </Stack>
            {showAddOn ? (
              <FlexBoxContainer display="flex">
                <TextField
                  placeholder="Type your add-ons"
                  style={{ width: "80%", background: "#F6F6F6" }}
                  sx={{
                    ".MuiInputBase-root": {
                      height: "36px",
                    },
                  }}
                  value={planAddon.addOn}
                  onChange={(e) => {
                    setPlanAddon({ ...planAddon, addOn: e.target.value });
                  }}
                />
                <CustomIconButton
                  icon={<AddIcon style={{ color: "#fff", fontSize: "16px" }} />}
                  label="Add"
                  variant={"contained"}
                  onClick={() => handleAddData(planAddon.addOn, "addon")}
                />
              </FlexBoxContainer>
            ) : (
              <Box justifyContent="center" alignItems={"center"} display="flex">
                <Button variant="text" onClick={() => setShowAddOn(true)}>
                  Other{" "}
                  <AddIcon style={{ color: "#1976d2", fontSize: "16px" }} />
                </Button>
              </Box>
            )}
          </Box>
        </BorderContainer>
      </CustomizedModal>
    </>
  );
};

export default AddMealPlan;

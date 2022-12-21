import styled from "@emotion/styled";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MenuButton1 from "../AddCuisineMenuButtons/MenuButton1";
import MenuButton2 from "../AddCuisineMenuButtons/MenuButton2";
import MenuButton3 from "../AddCuisineMenuButtons/MenuButton3";

export default function DishesStepper2({formik}) {
  const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    color: "#1A1824",
  }));
  
  const [word, setWord] = React.useState(0);
  
  return (
    <>
      {/* <Container maxWidth="xs"> */}
      <Container>
        <Box mt={6}>
          <Box mb={2}>
            <Box mb={1}>
              <Typo1
                sx={{
                  fontSize: {
                    xl: "20px",
                    lg: "14px",
                    md: "14px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontWeight: "500",
                }}
              >
                Cuisine Category
              </Typo1>
            </Box>

            <MenuButton1
            // setDisableFunc={setDisable}
            />
          </Box>
          <Box mb={2}>
            <Box mb={1}>
              <Typo1
                sx={{
                  fontSize: {
                    xl: "20px",
                    lg: "14px",
                    md: "14px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontWeight: "500",
                }}
              >
                Sub-Cuisine(optional)
              </Typo1>
            </Box>

            <MenuButton2
            // setDisableFunc={setDisable}
            />
          </Box>
          <Box mb={2}>
            <Box mb={1}>
              <Typo1
                sx={{
                  fontSize: {
                    xl: "20px",
                    lg: "14px",
                    md: "14px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontWeight: "500",
                }}
              >
                Meal Plan
              </Typo1>
            </Box>

            <MenuButton3
            // setDisableFunc={setDisable}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

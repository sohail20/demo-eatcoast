import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CenteredBoxContainer from "../../../Containers/CenteredBox";
import { styled, alpha } from "@mui/material/styles";
import DetailDishesTabs from "./DetailDishesTabs";

export const DetailDishesMainCard = () => {
  const BoxContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    paddingLeft: "16px",
    paddingRight: "16px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "30px",
    textTransform: "capitalize",
    // justifyContent: "flex-start",
    // display: "flex",
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#545359",
    textAlign: "justify",
    width: "460px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      fontSize: "14px",
    },
  }));

  return (
    <div>
      <Box mt="32px">
        <BoxContainer sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: {
                xl: "476px",
                lg: "476px",
                md: "476px",
                sm: "476px",
                xs: "100%",
              },
              height: {
                xl: "241.87px",
                lg: "241.87px",
                md: "241.87px",
                sm: "241.87px",
                xs: "auto",
              },
            }}
          >
            <img
              src="./images/Rectangle 65.svg"
              alt=""
              width="100%"
              height="auto"
            />
          </Box>

          <Box>
            <Title mt="16px">Kabasa</Title>

            <Typo1>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typo1>
          </Box>

          <Box>
            <DetailDishesTabs />
          </Box>
        </BoxContainer>
      </Box>
    </div>
  );
};

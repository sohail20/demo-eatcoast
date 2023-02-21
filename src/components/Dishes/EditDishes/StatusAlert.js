import React from "react";
import { styled } from "@mui/material";
import {
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import { CustomChip } from "../AllDishes/CustomChip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CircleIcon from "@mui/icons-material/Circle";

export const StatusAlert = () => {
  const Data = [
    {
      desc: "Additional dishes are not on the list",
    },
    {
      desc: " The selection of food ingredients does not match the composition of the selected food",
    },
    {
      desc: "The description you provide does not match the description of the selected food",
    },
  ];
  const MainBox = styled(Typography)(({ theme }) => ({
    // width: "1036px",
    width: "100%",
    height: "210px",
    border: "1px solid #E1E1E6",
    borderRadius: "6px",
    padding: "32px",

    [theme.breakpoints.only("xl")]: {
      width: "100%",
      justifyContent: "center",
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "auto"
      },
  }));

  const SubBox = styled(Typography)(({ theme }) => ({
    // width: "934px",
    width: "100%",
    height: "108px",
    borderRadius: "4px",
    padding: "24px, 16px, 24px, 16px",
    backgroundColor: "#F6F6F6",

    [theme.breakpoints.only("xl")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "auto",
        paddingBottom: "24px",
        paddingRight: "10px"
      },

  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#1A1824",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "18px",
    },
  }));

  return (
    <div>
      <MainBox sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "inline-flex", flexDirection: {xl: "row", lg: "row", md: "row", sm: "column", xs: "column"} , alignItems: {xl: "center", lg: "flex-start"}, pb: "18px" }}>
          <Box sx={{ display: "inline-flex", flexDirection: "row"  }}>
          <Box>
            <Typo1>
              regarding the status of your dish shipment a while ago is
            </Typo1>
          </Box>
          <Box pl="14px" pr="14px">
            <CustomChip label={"Rejected"} color={"#E75C62"} width="72px" />
          </Box>
          </Box>
          <Box>
            <Typo1>
              We rejected your application because it did not meet our
              requirements, such as:
            </Typo1>
          </Box>
        </Box>

        <SubBox >


          <Box sx={{marginLeft: "16px", marginTop: "24px"}}>
            {Data.map((item) => {
              return (
                <>
                  <List
                    // component="nav"
                    disablePadding
                    aria-label="main mailbox folders"
                    disableGutters={true}
                    sx={{
                      padding: "0px",
                      paddingBottom: "0px",
                      margin: "24px, 16px, 24px, 16px"
                    }}
                  >
                    <ListItem
                      disableGutters
                      disableRipple
                      disablePadding
                      sx={{ paddingBottom: "0px" }}
                    >
                      <CircleIcon sx={{ width: "4px", height: "4px", color: "#545359" }} />
                      <Typography
                        sx={{
                          padding: "0px",
                          display: "flex",
                          alignItems: "center",
                          color: "#545359",
                          fontFamily: "Outfit",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "20px",
                          paddingBottom: "0px",
                          marginLeft: "10px"
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </ListItem>
                  </List>
                </>
              );
            })}
          </Box>
        </SubBox>
      </MainBox>
    </div>
  );
};

import React from "react";
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
import CustomSearchBar from "../../Dishes/AddDishes/AddDishesDrawer/AddIngridient/CustomSearchBar";

export const HelpCenter = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    letterSpacing: "0.015em",
    color: "#1A1824",
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    color: "#9EA3AE",
    textAlign: "justify",
    lineHeight: "16px",
    width: "596px",
  }));

  const Heading1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#2B817B",
    textTransform: "capitalize",
  }));

  const ImgBox = styled("div")(({ theme }) => ({
    backgroundImage: "url(./images/HelpCenterBg.svg)",
    // backgroundSize: "contain",
    width: "972px",
    height: "235px",
    display: "flex",
    justifyContent: "center",
  }));

  return (
    <div>
      <Box>
        <Box display={"flex"} alignItems="center">
          <Box width="10%">
            <Box>
              <Button width="20%">
                <Box
                  sx={{
                    display: "flex",
                    //  alignItems: "center"
                  }}
                >
                  <img
                    src="./images/leftArrow.svg"
                    alt=""
                    width="16px"
                    height="16px"
                  />
                </Box>
                <Box pl="14px">
                  <Heading1>Back</Heading1>
                </Box>
              </Button>
            </Box>
          </Box>

          <Box style={{ width: "80%", textAlign: "center" }}>
            <Title
              sx={{
                fontSize: {
                  xl: "36px",
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "16px",
                },
              }}
            >
              Help Center
            </Title>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", pt: "16px" }}>
          <ImgBox>
            <Box mt="147px">
              <CustomSearchBar
                //   onChangeProp={(e) => setNewIngridient(e.target.value)}
                placeholder={"Search"}
                icon={"./images/search-normal.svg"}
                bgColor={"#F6F6F6"}
                color={"#9EA3AE"}
                border={"1px solid #E1E1E6"}
                height={"48px"}
                //   onClickIconBtn={handleButtonClick}
                borderColor={"#E1E1E6"}
                // title={"Search"}
              />
            </Box>
          </ImgBox>
        </Box>
      </Box>
    </div>
  );
};

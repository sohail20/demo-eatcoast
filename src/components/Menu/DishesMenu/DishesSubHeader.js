import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomSelectMenu from "../CuisineMenu/CustomSelectMenu";
import AddIcon from "@mui/icons-material/Add";

export default function DishesSubHeader({
  isShownButtonBox,
  setShowAllCuisine,
  setIsShown,
  handleClickBtn,
  title,
  setStepper,
}) {
  const Bg = {
    backgroundImage: "url(./images/MenuBg.png)",
    position: "absolute",
    width: "320px",
    height: "300px",
    backgroundPosition: "contain",
    justifyContent: "center",
    alignItems: "center",
  };

  const Typo1 = {
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: { xl: "30px", lg: "20px", md: "20px", sm: "20px", xs: "20px" },
    lineHeight: "28px",
    display: "flex",
    alignItems: "center",
    color: "#1A1824",
  };

  const Typo2 = {
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: { xl: "20px", lg: "16px", md: "16px", sm: "16px", xs: "16px" },
    lineHeight: "24px",
    textDecoration: "none",
    color: "#2B817B",
    mt: { xl: "40px", lg: "0px", md: "0px", sm: "0px", xs: "0px" },
  };

  const Link1 = {
    // marginTop: { lg: "-30px" },
    textTransform: "none",
    "&:hover": { backgroundColor: "transparent" },
  };

  const Btn1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 5px",
    textTransform: "capitalize",
    background: "#2B817B",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#2B817B",
    },
    fontSize: { xl: "26px", lg: "16px", md: "16px", sm: "14px", xs: "8px" },
  };
  const Btn2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 12px",
    textTransform: "capitalize",
    background: "#2B817B",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#2B817B",
    },
    fontSize: { xl: "20px", lg: "16px", md: "16px", sm: "14px", xs: "12px" },
  };

  const Typo3 = {
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: { xl: "30px", lg: "18px", md: "18px", sm: "18px", xs: "18px" },
    lineHeight: "26px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingTop: { xl: "40px", lg: "30px", md: "30px", sm: "30px", xs: "30px" },
    color: "#000000",
  };

  const IconBtn = {
    // width: { xl: "26px", lg: "16px", md: "16px", sm: "16px", xs: "12px" },
    width: { xl: "26px", lg: "16px", xs: "12px" },
    // marginTop: { xl: "10px", lg: "10px", md: "10px", sm: "10px", xs: "10px" },
    // marginTop: "10px",
    height: "auto",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box>
            <Typography sx={Typo1}>{title}</Typography>
          </Box>

          {isShownButtonBox ? (
            ""
          ) : (
            // <CustomSelectMenu setShowAllCuisine />
            <Box>
              <Button
                disableRipple={true}
                sx={Link1}
                onClick={() => setIsShown((current) => !current)}
              >
                <Typography sx={Typo2}>Add Cuisine +</Typography>
              </Button>
            </Box>
          )}
        </Box>

        <Box sx={{}}>
          <Button
            variant="contained"
            startIcon={<AddIcon sx={IconBtn} />}
            sx={Btn2}
            onClick={() => setStepper(true)}
          >
            Add Dishes
          </Button>
        </Box>
      </Box>
    </>
  );
}

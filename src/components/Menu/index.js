import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState } from "react";
import CustomSelectMenu from "./CuisineMenu/CustomSelectMenu";
import ImageSection from "./ImageSection";
import CuisineCategoryCard from "./CuisineMenu/CuisineCategoryCard";
import AddCuisine from "./AddCuisine";
import { Data2 } from "./CuisineMenu/config";
import AddMealPlan from "./AddMealPlan/AddMealPlan";

export const MenuComponent = () => {
const [isShownCuisine, setIsShownCuisine] = useState(false);
const [isShown, setIsShown] = useState(false);
const [isShownButtonBox, setIsShownButtonBox] = useState(false);
const [showAllCuisine, setShowAllCuisine] = React.useState(false);

  console.log("add cuisine button is clicked", isShown);
  console.log("all cuisine button is clicked", showAllCuisine);

  const handleClickBtn = (event) => {
    setIsShownCuisine((current) => !current);
  };

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
    textDecoration: "none",
  };

  const Btn1 = {
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
    fontSize: { xl: "20px", lg: "16px", md: "16px", sm: "14px", xs: "8px" },
  };

  const Typo3 = {
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: { xl: "22px", lg: "18px", md: "18px", sm: "18px", xs: "18px" },
    lineHeight: "26px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingTop: { xl: "40px", lg: "30px", md: "30px", sm: "30px", xs: "30px" },
    color: "#000000",
  };

  const IconBtn = {
    width: { xl: "20px", lg: "16px", md: "16px", sm: "16px", xs: "12px" },
    height: "auto",
  };

  return (
    <>
      <Box component="container">
        {/* {false ? ( */}
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
                  <Typography sx={Typo1}>Meal Plans</Typography>
                </Box>

                {isShownButtonBox ? (
                  <CustomSelectMenu setShowAllCuisineFunc={setShowAllCuisine} />
                ) : (
                  <Box>
                    <Link
                      component="button"
                      sx={Link1}
                      onClick={() => setIsShown((current) => !current)}
                    >
                      <Typography sx={Typo2}>Add Cuisine +</Typography>
                    </Link>
                  </Box>
                )}
              </Box>

              <Box
                sx={{
                  pr: {
                    // xl: "329px",
                    // lg: "329px",
                    // md: "150px",
                    // sm: "150px",
                    xs: "0px",
                  },
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<AddIcon sx={IconBtn} />}
                  sx={Btn1}
                  onClick={handleClickBtn}
                >
                  Add Dishes
                </Button>
              </Box>
            </Box>

            <Box>
              {isShown ? (
                <AddCuisine setIsShownButtonBoxFunc={setIsShownButtonBox} />
              ) : (
                <ImageSection />
              )}
            </Box>

            {/* <Box>{showAllCuisine ? <AllCuisineMenu /> : ""}</Box> */}
            <Box>
              {showAllCuisine ? (
                <CuisineCategoryCard
                  Data={Data2}
                  title={"American Cuisine"}
                  subTitle={"6 Sub-cuisine"}
                />
              ) : (
                ""
              )}
            </Box>
          </>
        {/* ) : (
          <AddMealPlan/>
        )} */}
      </Box>
    </>
  );
};

import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CustomSearchBar from "./CustomSearchBar";
import Input from "@mui/material/Input";
import { IngridientMenuButton } from "./IngridientMenuButton";
import { CustomCloseIcon } from "./CustomCloseIcon";
import { IngridientMenuButton2 } from "./IngridientMenuButton2";

export default function IngridientCard({ mealPlan, Data }) {
  // const Data = [
  //   {
  //     id: 1,
  //     title: "Beef",
  //     digit: "*10",
  //     // btnName: "Pcs",
  //     btnComp: <IngridientMenuButton />,
  //     closeIconComp: <CustomCloseIcon />,
  //     image: "./images/Beef.svg",
  //   },
  //   // {
  //   //   id: 2,
  //   //   title: "Onion",
  //   //   digit: "*10",
  //   //   // btnComp: <IngridientMenuButton2 />,
  //   //   // btnName: "%",

  //   //   image: "./images/onion.svg",
  //   // },
  // ];
  const MainBox = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1px solid #E1E1E6",
    background: "#FFFFFF",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  }));

  const ImgBox = styled("div")(({ theme }) => ({
    height: "40px",
    width: "40px",
    display: "flex",
    padding: "8px",
    borderRadius: "5px",
    background: "#F7F7F8",
    alignItems: "flex-start",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    color: "#1A1824",
    paddingLeft: "16px",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  }));

  const DigitBox = styled(Input)(({ theme }) => ({
    border: "1.5px solid #E1E1E6",
    height: "40px",
    width: "83px",
    display: "flex",
    // padding: "8px, 16px, 8px, 16px",
    borderRadius: "6px",
    background: "#F6F6F6",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  }));

  const DigitTypo = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#9EA3AE",
    variant: "text",
    justifyContent: "center",
  }));

  const PieceTypo = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "18px",
    color: "#2B817B",
    textTransform: "capitalize",
  }));

  // const [names, setNames] = React.useState(Data)

  // const filterNames = e => {
  //   const search = e.target.value.toLowerCase()
  //   const filteredNames = Data.filter(names => names.title.toLowerCase().includes(search))
  //   setNames(filteredNames)
  // }

  return (
    <>
      {/* <CustomSearchBar filterNames={filterNames} icon={"./images/search-normal.svg"} placeholder={"Search your Ingridient"} bgColor={"#F6F6F6"} color={"#9EA3AE"} border={"2px solid #80B3B0"} height={"48px"}/> */}

      {mealPlan.map((item) => {
        return (
          <>
            {Data.map((v, i) => {
              return (
                <MainBox
                  sx={{
                    ml: "0px",
                    mb: "16px",
                    width: {
                      xl: "476px",
                      lg: "476px",
                      md: "476px",
                      sm: "476px",
                      xs: "300px",
                    },
                  }}
                  key={v.id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <ImgBox
                        sx={{
                          marginTop: {xs: "5px"},
                          display: "flex",
                          alignItems: "center",
                          width: {
                            xl: "40px",
                            lg: "40px",
                            md: "40px",
                            sm: "40px",
                            xs: "30px",
                          },
                          height: {
                            xl: "40px",
                            lg: "40px",
                            md: "40px",
                            sm: "40px",
                            xs: "30px",
                          },
                        }}
                      >
                        <img src={v.image} alt="" width="100%" height="auto" />
                      </ImgBox>

                      <Title>{v.title}</Title>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Box
                        sx={{
                          // display: "flex",
                          // alignItems: "center",
                          // paddingLeft: { xs: "10px"},
                          width: {
                            xl: "83px",
                            lg: "83px",
                            md: "83px",
                            sm: "83px",
                            xs: "60px",
                          },
                          marginLeft: { xs: "10px" },
                        }}
                      >
                        <TextField
                          variant="filled"
                          placeholder="*10"
                          InputProps={{
                            disableUnderline: true,
                            textAlign: "right",
                            padding: "0px",
                            style: {
                              height: "40px",
                              paddingLeft: {
                                lg: "20px",
                                md: "20px",
                                sm: "20px",
                                xs: "0px",
                              },
                              paddingBottom: "15px",
                              borderRadius: "6px",
                              border: "1.5px solid #E1E1E6",
                              backgroundColor: "#F6F6F6",
                              // textAlign: "center"
                            },
                          }}
                          sx={{
                            padding: "0px",
                            margin: "0px",
                            width: { xs: "60px" },
                          }}
                        >
                          <Box
                            sx={{
                              fontFamily: "Outfit",
                              fontSize: {
                                lg: "16px",
                                md: "16px",
                                sm: "16px",
                                xs: "10px",
                              },
                              fontWeight: "600",
                              lineHeight: "24px",
                              color: "#1A1824",
                              variant: "text",
                            }}
                          >
                            {v.digit}
                          </Box>
                        </TextField>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          // pl: "10px",
                          pl: { lg: "26px", md: "26px", sm: "26px", xs: "0px" },
                        }}
                      >
                        {/* <IngridientMenuButton
                        // mapData={v.btnName}
                        /> */}
                        {v.btnComp}
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {v.closeIconComp}
                      </Box>
                    </Box>
                  </Box>
                </MainBox>
              );
            })}
          </>
        );
      })}

      {/* <Box>
        {
          names.map((item) => {
            return (
              <>
                <MainBox sx={{ ml: "32px", mb: "16px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <ImgBox>
                        <img
                          src={item.image}
                          alt=""
                          width="24px"
                          height="24px"
                        />
                      </ImgBox>

                      <Title>{item.title}</Title>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <DigitBox>
                        <DigitTypo>{item.digit}</DigitTypo>
                      </DigitBox>

                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button variant="text">
                          <PieceTypo>{item.btnName}</PieceTypo>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              pl: "10px",
                            }}
                          >
                            <img src="./images/arrow-down.svg" alt="" />
                          </Box>
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          pl: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <IconButton>
                          <CloseIcon
                            sx={{
                              fill: "#E75C62",
                              width: "16px",
                              height: "16px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </MainBox>
              </>
            );
          })}
      </Box> */}
    </>
  );
}

{
  /* <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button variant="text">
                          <PieceTypo>{v.btnName}</PieceTypo>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              pl: "10px",
                            }}
                          >
                            <img src="./images/arrow-down.svg" alt="" />
                          </Box>
                        </Button>
                      </Box> */
}

{
  /* <DigitBox>
                        <DigitTypo>
                          {v.digit}
                          </DigitTypo>
                      </DigitBox> */
}

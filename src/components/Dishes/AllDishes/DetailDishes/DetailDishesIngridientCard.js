import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

export const DetailDishesIngridientCard = () => {
  const Data = [
    {
      title: "Tomato Paste",
      subTitle: "2 Pcs",
      image: "./images/TomatoPaste.svg",
    },
    {
        title: "Olive Oil",
        subTitle: "2 Pcs",
        image: "./images/OliveOil.svg",
    },
    {
    title: "Garlic Clover",
    subTitle: "2 Pcs",
    image: "./images/Garlic.svg",
    },
    {
        title: "Small Onion",
        subTitle: "2 Pcs",
        image: "./images/onion.svg",
    },
    {
        title: "Black Pepper",
        subTitle: "2 Pcs",
        image: "./images/blackPepper.svg",
    },
  ];

  const ImgBox = styled("div")(({ theme }) => ({
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    padding: "8px",
    backgroundColor: "#F7F7F8",
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "26px",
    color: "#1A1824",
  }));

  const Typo2 = styled(Typography)(({ theme }) => ({
    fontFamily: "outfit",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#9EA3AE",
  }));

  return (
    <div>
      {Data.map((item) => {
        return (
          <>
            <Box sx={{ display: "flex", mb: "16px" }}>
              <ImgBox>
                <Box sx={{ width: "24px", height: "24px" }}>
                  <img src={item.image} alt="" />
                </Box>
              </ImgBox>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box pl="24px" sx={{ alignItems: "center", display: "flex" }}>
                  <Typo1>{item.title}</Typo1>
                </Box>
                <Box pl="24px" sx={{ alignItems: "center", display: "flex" }}>
                  <Typo2>{item.subTitle}</Typo2>
                </Box>
              </Box>
            </Box>
          </>
        );
      })}
    </div>
  );
};

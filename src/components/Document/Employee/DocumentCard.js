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

export const DocumentCard = ({ Data }) => {
  const CardBox = styled(Typography)(({ theme }) => ({
    width: "596px",
    height: "92px",
    borderRadius: "6px",
    padding: "16px",
    // justifyContent: "space-between",
    border: "1px solid #E1E1E6",
  }));

  const ImgBox = styled(Typography)(({ theme }) => ({
    width: "60px",
    height: "60px",
    borderRadius: "4px",
    padding: "18px",
    backgroundColor: "#F6F6F6",
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: 600,
    fontSize: "14px",
    color: "#1A1824",
    lineHeight: "20px",
    paddingBottom: "12px",
  }));

  const Typo2 = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: 400,
    fontSize: "14px",
    color: "#9EA3AE",
    lineHeight: "20px",
  }));

  const Button1 = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: 400,
    fontSize: "16px",
    color: "#9EA3AE",
    lineHeight: "24px",
    textDecoration: "underline",
    textTransform: "capitalize",
    color: "#2B817B",
  }));

  const Button2 = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: 600,
    fontSize: "14px",
    textTransform: "capitalize",
    color: "#2B817B",
    padding: "10px, 16px, 10px, 16px",
    borderRadius: "4px",
    // width: "102px",
    height: "40px",
    borderColor: "#80B3B0",
    "&:hover": {
      borderColor: "#80B3B0",
    },
  }));

  return (
    <div>
      <CardBox sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <ImgBox>
            <Box sx={{ width: "24px", height: "24px" }}>
              <img
                src="./images/directbox-notif.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </ImgBox>

          <Box pl="16px">
            <Typo1>{Data.title}</Typo1>
            <Typo2>{Data.subTitle}</Typo2>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {Data.hasTextBtn && (
            <Box>
              <Button1 variant="text">{Data.textBtnTitle}</Button1>
            </Box>
          )}

          {Data.hasOutlineBtn && (
            <Box pl="28px">
              <Button2 variant="outlined">Browse file</Button2>
            </Box>
          )}
        </Box>
      </CardBox>
    </div>
  );
};

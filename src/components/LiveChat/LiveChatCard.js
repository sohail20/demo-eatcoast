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
import LiveChatTabs from "./LiveChatTabs";

const ImgBox = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  padding: "12px",
  backgroundColor: "#F6F6F6",
}));

const Typo1 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  color: "#000000",
  textAlign: "justify",
  lineHeight: "24px",
}));

const CardBox = styled(Box)(({ theme }) => ({
  width: "333px",
  height: "204px",
  borderRadius: "6px",
//   padding: "16px",
paddingLeft: "16px",
paddingRight: "16px",
paddingBottom: "16px",
  border: "1px solid #E1E1E6",
}));


const CardMiniBox = styled(Box)(({ theme }) => ({
    width: "301px",
    height: "128px",
    borderRadius: "6px",
    padding: "24px",
    backgroundColor: "#F6F6F6",
  }));


  const Typo2 = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    color: "#2B817B",
    lineHeight: "16px",
  }));

export const LiveChatCard = () => {
  return (
    <div>
      <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column"}} >
        <Box  sx={{display: "flex", justifyContent: "center"}}>
        <ImgBox >
          <Box>
            <img src="./images/message-question.svg" alt="" />
          </Box>
        </ImgBox>
        </Box>

        <Box sx={{display: "flex", justifyContent: "center", mt:"8px"}}>
          <Typo1>You may want to know</Typo1>
        </Box>

        <Box mt="16px">
          <CardBox>
            <Box>
              <LiveChatTabs />
            </Box>

            <CardMiniBox mt="10px">
            <Typo2>How to withdraw my balance ?</Typo2>
            <Typo2 mt="16px">How to see my money report ?</Typo2>
            <Typo2 mt="16px">How to change my bank account ?</Typo2>
            </CardMiniBox>
          </CardBox>
        </Box>
      </Box>
    </div>
  );
};

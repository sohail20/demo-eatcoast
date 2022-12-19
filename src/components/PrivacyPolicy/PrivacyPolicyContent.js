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

const ImgBox = styled(Typography)(({ theme }) => ({
//   width: "1036px",
  width: "100%",
  height: "688px",
  borderRadius: "4px",
  paddingLeft: "16px",
  paddingTop: "32px",
  paddingRight: "32px",
  paddingBottom: "16px",
  border: "1px solid #E1E1E6",

  [theme.breakpoints.down('md')]:{
    width: "100%",
    height: "auto"
},
[theme.breakpoints.up('xl')]:{
   height: "auto"
},
}));

const Typo1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: 400,
  fontSize: "12px",
  color: "#9EA3AE",
  lineHeight: "16px",
  paddingBottom: "26px",

  
  [theme.breakpoints.up('xl')]:{
    fontSize: "16px",
    lineHeight: "26px",
},
}));

const Heading1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: 600,
  fontSize: "14px",
  color: "#1A1824",
  paddingBottom: "22px",
  lineHeight: "20px",

  [theme.breakpoints.up('xl')]:{
    fontSize: "16px",
    lineHeight: "26px",
},
}));

const Typo2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: 400,
  fontSize: "14px",
  color: "#1A1824",
  lineHeight: "20px",
  paddingBottom: "16px",
  maxWidth: "931.3px",
  [theme.breakpoints.up('xl')]:{
    fontSize: "16px",
    width: "100%",
    lineHeight: "26px",
    maxWidth: "1100px",
},
  [theme.breakpoints.down('md')]:{
    width: "100%"
},
[theme.breakpoints.down('sm')]:{
    fontSize: "12px",
}
}));

export const PrivacyPolicyContent = () => {
  return (
    <div>
      <Box >
        <ImgBox>
          <Box>
            <Typo1>Effective date: 2022-01-08</Typo1>
          </Box>

          <Box>
            <Typography>
              <Heading1>1. Introduction</Heading1>
              <Typo2>Welcome to eatcoast. </Typo2>
              <Typo2>
                eatcoast (“us”, “we”, or “our”) operates eatcoast.com
                (hereinafter referred to as “Service”).
              </Typo2>
              <Typo2>
                Our Privacy Policy governs your visit to eatcoast.com, and
                explains how we collect, safeguard and disclose information that
                results from your use of our Service.
              </Typo2>
              <Typo2>
                We use your data to provide and improve Service. By using
                Service, you agree to the collection and use of information in
                accordance with this policy. Unless otherwise defined in this
                Privacy Policy, the terms used in this Privacy Policy have the
                same meanings as in our Terms and Conditions.
              </Typo2>
              <Typo2>
                Our Terms and Conditions (“Terms”) govern all use of our Service
                and together with the Privacy Policy constitutes your agreement
                with us (“agreement”).
              </Typo2>
              <Heading1>2. Definitions</Heading1>
              <Typo2>
                SERVICE means the eatcoast.com website operated by eatcoast.
              </Typo2>
              <Typo2>
                PERSONAL DATA means data about a living individual who can be
                identified from those data (or from those and other information
                either in our possession or likely to come into our possessi
              </Typo2>
              <Heading1>3. Definitions</Heading1>
              <Typo2>
                SERVICE means the eatcoast.com website operated by eatcoast.
              </Typo2>
              <Typo2>
                PERSONAL DATA means data about a living individual who can be
                identified from those data (or from those and other information
                either in our possession or likely to come into our possessi
              </Typo2>
            </Typography>
          </Box>
        </ImgBox>
      </Box>
    </div>
  );
};

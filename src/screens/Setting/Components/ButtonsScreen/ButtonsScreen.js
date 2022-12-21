import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Link,
} from "@mui/material";
import profile from "./Icons/profile.png";
import dok from "./Icons/24.png";
import help from "./Icons/help.png";
import feedback from "./Icons/feedback.png";
import support from "./Icons/support.png";
import policy from "./Icons/policy.png";
import arrowRight from "./Icons/Vector.png";
import "../../style.css";

function ButtonsScreen({handleChangeScreen}) {
  const buttonData = [
    {
      title: "Profile",
      id: "profile",
      icon: profile,
    },
    {
      title: "Documents",
      id: "documents",
      icon: dok,
    },
    {
      title: "Help Center",
      id: "helpCenter",
      icon: help,
    },
    {
      title: "Customer Feedback",
      id: "customerFeedback",
      icon: feedback,
    },
    {
      title: "Contact Support",
      id: "contactSupport",
      icon: support,
    },
    {
      title: "Privacy & Policy",
      id: "privacy",
      icon: policy,
    },
  ];

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        maxWidth="sm"
      >
        {buttonData.map((item, index) => {
          return (
            <>
              <Link
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: { lg: "90%", md: "90%", sm: "80%", xs: "80%" },
                }}
                onClick={()=>handleChangeScreen(item.id)}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={item.icon} alt="icon" />
                  <Typography
                    sx={{
                      margin: 2,
                      color: "#1A1824",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <img src={arrowRight} alt="arrow icon" />
              </Link>
              <Divider
                sx={{
                  width: { lg: "95%", md: "95%", sm: "80%", xs: "80%" },
                }}
              />
            </>
          );
        })}
        <center>
          <Button
            sx={{
              width: {xs:"290px",sm:"320px",md:"404px"},
              height: "36px",
              border: "1px solid #FFF1F1",
              borderRadius: "4px",
              margin: "40px auto 0px auto",
              color: "#E75C62",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "600",
              "&:hover": { backgroundColor: "#2B817B", color: "white" },
              marginBottom: 2,
            }}
          >
            Logout
          </Button>
        </center>
      </Container>
    </>
  );
}

export default ButtonsScreen;

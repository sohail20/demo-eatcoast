import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useGetEmployeesQuery } from "api/employee";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export const Login2 = () => {
  const navigate = useNavigate();
  const { data: employees, isLoading } = useGetEmployeesQuery();
  const gotoLoginPin = (id) => {
    navigate("/signinPin",{state:{id}});
  };

  useEffect(()=>{
   const token = localStorage.getItem("token")
   if (token === null || token === "") navigate("/login");
  },[])
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <>
      <Grid container spacing={0} sx={{ marginTop: 8 }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography
              variant="h4"
              component="div"
              sx={{
                marginLeft: 9,
                color: "#1A1824",
                fontFamily: "Outfit",
                fontSize: "24px",
              }}
            >
              Select Operator
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ color: "#9EA3AE", fontFamily: "Outfit", fontSize: "18px" }}
            >
              Choose an account to get more authority
            </Typography>
          </Box>
        </Grid>
        <Container maxwidth="lg">
          <Grid container spacing={2} sx={{ marginTop: 5 }}>
            {employees &&
              employees.data.map((item,index) => {
                return (
                  <Grid
                    scpacing={2}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={index}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        height: 106,
                        padding: 1,
                        cursor: "pointer",
                      }}
                      onClick={()=>gotoLoginPin(item._id)}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="158"
                          sx={{ width: 50, height: 50, objectFit: "cover" }}
                          image="../images/Ellipse6.png"
                        />
                      </Box>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant=""
                          component="div"
                          sx={{
                            fontSize: 20,
                            fontFamily: "Outfit",
                            color: "#1A1824",
                            fontStyle: "normal",
                          }}
                        >
                          {item.name?item.name:"No Name"}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: 14,
                            fontFamily: "Outfit",
                            color: "#9EA3AE",
                            fontStyle: "normal",
                          }}
                        >
                          {item.type}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
          <Box sx={{ padding: 7, display: "flex", justifyContent: "center" }}>
            <Button
              disableRipple={true}
              style={{
                background: "#FFFFFF",
                border: "1px solid #FFF1F1",
                borderRadius: 4,
                width: 180,
              }}
            >
              <span
                style={{
                  color: "#E75C62",
                  fontFamily: "Outfit",
                  fontSize: 16,
                  textTransform: "lowercase",
                }}
              >
                <span
                  style={{
                    color: "#E75C62",
                    fontFamily: "Outfit",
                    fontSize: 16,
                    textTransform: "uppercase",
                  }}
                >
                  L
                </span>
                ogout
              </span>
            </Button>
          </Box>
        </Container>
      </Grid>
    </>
  );
};

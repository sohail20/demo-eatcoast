import { Box, Button, Grid, ThemeProvider, Typography, createTheme, TextField } from "@mui/material";
import { useChangePasswordMutation } from "api/signup";
import FullPageLoader from "components/Loader/FullPageLoader";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const CheckEmail = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [otp, setOpt] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [showChangePassword, setShowChangePassword] = useState("")

  const [changePassword, { isLoading }] = useChangePasswordMutation()
  const handleChangePassword = () => {
    changePassword({ email: location.state.email, otp, newPassword })
  }

  const formik = useFormik({
    initialValues: {
      email: location.state.email,
      newPassword: "",
      otp: ""
    },
    onSubmit: (values) => {
      changePassword(values).then((res)=>{
        if(res.data) navigate("/login")
      })
    },
  });

  return isLoading ? <FullPageLoader /> : (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          textAlign="center"
          component="div"
          sx={{
            color: "#1A1824",
            fontWeight: "600",
            fontFamily: "Outfit",
            fontSize: "24px",
          }}
        >
          Check Your Email
        </Typography>
      </Box>
      <Link to={-1}>
        <Button
          sx={{ position: "absolute", content: '""', marginTop: "40px" }}
          disableRipple={true}
        >
          <img
            src="images/leftAngle.svg"
            style={{ fontSize: "20px", color: "#1A1824" }}
          />
        </Button>
      </Link>

      {showChangePassword ? <ChangePasswordComponent formik={formik} handleChangePassword={handleChangePassword} setOpt={setOpt} setNewPassword={setNewPassword} email={location.state.email} />
        : <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sx={{ marginTop: "80px" }}>
              <Box textAlign="center">
                <img
                  alt=""
                  style={{ width: "112px", height: "112px" }}
                  src="../images/chekEmail1083.png"
                />
              </Box>

              <Typography
                variant="body2"
                textAlign="center"
                component={"div"}
                sx={{
                  color: "545359",
                  marginTop: "24px",
                  fontFamily: "Outfit",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                We have sent a password recover instruction <br />
                to your email
              </Typography>
              <a href={"https://mail.google.com/mail/u/0/#inbox"} target="_blank">
                <Button
                  disableRipple={true}
                  style={{
                    border: 2,
                    background: "#2B817B",
                    width: "100%",
                    color: "white",
                    marginTop: "20px",
                    textTransform: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Outfit",
                      textDecorationLine: "underline",
                      textDecorationColor: "#2B817B",
                      color: "#FFFFFF",
                      fontFamily: "Outfit",
                      fontSize: "16px",
                    }}
                  >
                    Open email app
                  </span>
                </Button>
              </a>

              <Typography
                variant="body2"
                component={"div"}
                textAlign="center"
                sx={{
                  fontFamily: "Outfit",
                  fontsize: "16px",
                  marginTop: "20px",
                  color: "#2B817B",
                }}
                onClick={() => {
                  setShowChangePassword(true)
                }}
              >
                Change password
              </Typography>

              <Typography
                variant="body2"
                component={"div"}
                textAlign="center"
                sx={{
                  fontFamily: "Outfit",
                  fontsize: "16px",
                  marginTop: "20px",
                  color: "#2B817B",
                }}
              >
                Skip, i’ll confirm later
              </Typography>
            </Grid>
          </Grid>
        </Box>}
      <Box sx={{ margin: "30px" }}>
        <Typography
          textAlign="center"
          variant="body1"
          component={"div"}
          sx={{
            color: "545359",
            fontFamily: "Outfit",
            fontWeight: "400",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        >
          Did not recieve the email ? Check your spam filter
        </Typography>
        <Link to={-1}>
          <Typography
            variant="body2"
            textAlign="center"
            component={"div"}
            sx={{
              letterSpacing: "1px",
              fontsize: "16px",
              fontFamily: "Outfit",
              color: "#2B817B",
            }}
          >
            <span
              style={{
                fontFamily: "Outfit",
                textDecorationLine: "underline",
                textDecorationColor: "#fff",
                color: "#2B817B",
                fontFamily: "Outfit",
                fontSize: "16px",
              }}
            >
              {" "}
              Try another email address
            </span>
          </Typography>
        </Link>
      </Box>
    </div>
  );
};


const ChangePasswordComponent = ({formik}) => {


  const theme = createTheme({
    palette: {
      loginField: {
        main: "#E1E1E",
      },
      loginField2: {
        main: "#E1E1E",
      },
    },
  });

  return (
    <>
      {/* <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          textAlign="center"
          component="div"
          sx={{
            color: "#1A1824",
            fontWeight: "600",
            fontFamily: "Outfit",
            fontSize: "24px",
          }}
        >
          Change Password
        </Typography>

        <Typography
          textAlign="center"
          variant="body2"
          component="div"
          sx={{
            color: "#9EA3AE",
            fontFamily: "Outfit",
            fontWeight: "400",
            fontSize: "20px",
          }}
        >
          Enter your account and we will send instructions
        </Typography>
      </Box> */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minheight: "100vh" }}
      >
        <Grid item xs={12} sx={{ marginTop: "80px" }}>
          <Box
            sx={{
              maxWidth: "450px",
              alignItems: "center",
              backgroundColor: "transparent",
              height: "auto",
            }}
          >
            <Box sx={{ py: 3, px: 5 }}>
              <form onSubmit={formik.handleSubmit}>
                <ThemeProvider theme={theme}>
                  <label
                    style={{
                      fontSize: "14px",
                      fontFamily: "Outfit",
                      fontWeight: "600",
                      color: "#1A1824",
                      mb: 1,
                    }}
                  >
                    Email
                  </label>
                  <TextField
                    sx={{
                      marginBottom: 3,
                      marginTop: "5px",
                      width: "100%",
                      background: "#F6F6F6",
                      height: "40px",
                      border: "1px solid #E1E1E6",
                      borderRadius: "6px",
                      "&:hover": { color: "#F6F6F6" },
                      color: "#E1E1E",
                    }}
                    color={"loginField"}
                    size="small"
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    autoFocus={true}
                    disabled
                  />

                  <label
                    style={{
                      fontSize: "14px",
                      fontFamily: "Outfit",
                      fontWeight: "600",
                      color: "#1A1824",
                      mb: 1,
                    }}
                  >
                    OTP
                  </label>
                  <TextField
                    sx={{
                      marginBottom: 3,
                      marginTop: "5px",
                      width: "100%",
                      background: "#F6F6F6",
                      height: "40px",
                      border: "1px solid #E1E1E6",
                      borderRadius: "6px",
                      "&:hover": { color: "#F6F6F6" },
                      color: "#E1E1E",
                    }}
                    color={"loginField"}
                    size="small"
                    type="number"
                    id="otp"
                    name="otp"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    autoFocus={true}
                  />

                  <label
                    style={{
                      fontSize: "14px",
                      fontFamily: "Outfit",
                      fontWeight: "600",
                      color: "#1A1824",
                      mb: 1,
                    }}
                  >
                    New Password
                  </label>
                  <TextField
                    sx={{
                      marginBottom: 3,
                      marginTop: "5px",
                      width: "100%",
                      background: "#F6F6F6",
                      height: "40px",
                      border: "1px solid #E1E1E6",
                      borderRadius: "6px",
                      "&:hover": { color: "#F6F6F6" },
                      color: "#E1E1E",
                    }}
                    color={"loginField"}
                    defaultValue=""
                    size="small"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                  />
                  <Button
                    disableRipple={true}
                    style={{
                      border: 2,
                      background: "#2B817B",
                      width: "100%",
                      color: "white",
                      textTransform: "none",
                    }}
                    type="submit"
                    //onClick={handleChangePassword}
                  >
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "Outfit",
                        fontSize: "16px",
                        textDecorationLine: "underline",
                        textDecorationColor: "#2B817B",
                      }}
                    >
                      Submit
                    </span>
                  </Button>
                </ThemeProvider>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
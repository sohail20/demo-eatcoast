import styled from "@emotion/styled";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";

const Typo1 = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#9EA3AE",
}));

const Typo2 = styled(Typography)(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "20px",
}));

const Button1 = {
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "20px",
  textTransform: "capitalize",
  color: "#2B817B",
  marginTop: "10px",
};

export default function DishesStepper1({ formik, setStepper }) {
  const [image, setImage] = React.useState("./images/image profile.svg");

  useEffect(() => {
    if (formik.values.image !== "") {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(formik.values.image);
    }
  }, [formik]);

  return (
    <>
      {/* <Container maxWidth="xs"> */}
      <Container>
        <Box width="100%" sx={{ display: "flex", mt: 6 }}>
          <Box>
            <img src={image} alt="" style={{ width: "96px", height: "97px" }}
            />
          </Box>
          <Box sx={{ ml: "32px" }}>
            <Box>
              <Typo1 sx={{ maxWidth: "230px", pb: "18px" }}>
                *uploaded photos are 1 : 1 in size and a maximum of 2 mb
              </Typo1>
            </Box>
            <Box>
              <Button
                sx={Button1}
                variant="text"
                component="label"
                startIcon={<AddIcon />}
              >
                Add photo
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  id="image"
                  image="image"
                  onChange={(event) => {
                    console.log(
                      " event.currentTarget.files[0]",
                      event.currentTarget.files[0]
                    );
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box sx={{ pt: "9px", pb: "8px" }}>
            <Typo2>Dish name</Typo2>
          </Box>
          <Box>
            <TextField
              fullWidth
              placeholder="Dish name"
              variant="outlined"
              InputProps={{
                style: {
                  height: "48px",
                },
              }}
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
                borderRadius: "6px",
                border: "1px solid #E1E1E6",
                backgroundColor: "#F6F6F6",
                color: "#9EA3AE",
              }}
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ pt: "9px", pb: "8px" }}>
              <Typo2>Description</Typo2>
            </Box>
            <Box sx={{ pt: "9px", pb: "8px" }}>
              <Typo2 color="#9EA3AE">{formik.values.description.length || 0}/80</Typo2>
            </Box>
          </Box>
          <Box>
            <TextField
              fullWidth
              placeholder="Type your reason"
              multiline
              rows={4}
              inputProps={{ maxLength: 80 }} // value={value}
              sx={{
                color: "#1A1B24",
                borderRadius: "6px",
                border: "1px solid  #E1E1E6",
                background: "#F6F6F6",
                "&:hover": {
                  color: "#E1E1E6",
                },
              }}
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

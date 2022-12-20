import { useCallback, useState, useEffect } from "react";
import { Box, styled, Button, Grid, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CenteredBoxContainer, FlexBoxContainer } from "components/Containers";
import CustomInput from "components/Inputs/CustomInput";
import { LightTitle } from "components/Typography";
import UnderlineButton from "components/Button/UnderlineButton";
import { useFormik } from "formik";
import debounce from "lodash.debounce";
import CustomIconButton from "components/Button/CustomIconButton";

const Typo1 = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#9EA3AE",
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

const RestaurantSettings = ({handleChangeAddress}) => {
  const [hasChanged, setHasChanged] = useState(false);
  const [image, setImage] = useState("./images/image profile.svg");
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onChangeValue = useCallback(
    debounce(() => {
      setHasChanged(true);
    }, 800),
    []
  );

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
    <form onSubmit={formik.handleSubmit} onChange={onChangeValue}>
      <Grid container>
        <Grid item xs={12} sm={12} md={2}></Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Box>
                <CenteredBoxContainer>
                  <img
                    src={image}
                    alt=""
                    style={{ width: "96px", height: "97px" }}
                  />
                </CenteredBoxContainer>
                <CenteredBoxContainer>
                  <Button
                    sx={Button1}
                    variant="text"
                    component="label"
                    startIcon={<AddIcon />}
                  >
                    Change Photo
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      id="image"
                      image="image"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "image",
                          event.currentTarget.files[0]
                        );
                      }}
                    />
                  </Button>
                </CenteredBoxContainer>
                <CenteredBoxContainer>
                  <Box>
                    <Typo1
                      sx={{
                        maxWidth: "230px",
                        pb: "18px",
                        textAlign: "center",
                      }}
                    >
                      *uploaded photos are 1 : 1 in size and a maximum of 2 mb
                    </Typo1>
                  </Box>
                </CenteredBoxContainer>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <FlexBoxContainer>
                <LightTitle>ID : 192 - 102 - 120</LightTitle>
                {hasChanged ? (
                  <CustomIconButton
                    isLoading={false}
                    variant="contained"
                    label={"Save"}
                    type="submit"
                  />
                ) : (
                  <UnderlineButton>Edit</UnderlineButton>
                )}
              </FlexBoxContainer>
              <Stack spacing={2}>
                <CustomInput
                  label="Restaurant Name"
                  placeholder="Chef Juna Food"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <CustomInput
                  label="Address"
                  placeholder="4474 Bridgeport Rd. Canada"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onClick={()=>handleChangeAddress(formik.values)}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={2}></Grid>
      </Grid>
    </form>
  );
};

export default RestaurantSettings;

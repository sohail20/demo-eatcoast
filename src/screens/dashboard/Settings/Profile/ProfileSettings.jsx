import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, styled, Button, Grid, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CenteredBoxContainer, FlexBoxContainer } from "components/Containers";
import CustomInput from "components/Inputs/CustomInput";
import { LightTitle } from "components/Typography";
import UnderlineButton from "components/Button/UnderlineButton";
import { useFormik } from "formik";
import debounce from "lodash.debounce";
import CustomIconButton from "components/Button/CustomIconButton";
import { getCurrentEmpoyee } from "helper";

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

const ProfileSettings = () => {
  const [hasChanged, setHasChanged] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState("./images/image profile.svg");
  const formik = useFormik({
    initialValues: {
      ownerName: "",
      email: "",
      phone: "",
      pin: "",
      image: "",
    },
    validateOnChange: (values) => {
      console.log("values", values);
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

  useMemo(()=>{
    const user = getCurrentEmpoyee()
    if(user){
      formik.initialValues.ownerName = user.ownerName
      formik.initialValues.email = user.email
      formik.initialValues.phone = user.phone
   }
  })
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
                  label="Owner Name"
                  placeholder="Ilham Syaif"
                  id="ownerName"
                  name="ownerName"
                  disabled
                  value={formik.values.ownerName}
                  onChange={formik.handleChange}
                />
                <CustomInput
                  label="Email"
                  placeholder="Ilhamsyaif@gmail.com"
                  id="email"
                  disabled
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <CustomInput
                  label="Phone Number"
                  placeholder="XXXX-XXXX-XXXX"
                  id="email"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                <CustomInput
                  label="Set Pin"
                  placeholder="X-X-X-X"
                  width="177px"
                  id="pin"
                  name="pin"
                  value={formik.values.pin}
                  onChange={formik.handleChange}
                />
                <LightTitle>*4 Digit Pin</LightTitle>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={2}></Grid>
      </Grid>
    </form>
  );
};

export default ProfileSettings;

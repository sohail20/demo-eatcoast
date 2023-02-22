import { useState, useCallback } from "react";
import { Grid, TextareaAutosize, styled, Box } from "@mui/material";
import CustomInput from "components/Inputs/CustomInput";
import Map from "components/Map/Map";
import { H3Typo } from "components/Typography";
import { useFormik } from "formik";
import debounce from "lodash.debounce";
import CloseHeader from "components/Header/CloseHeader";

const CustomTextArea = styled(TextareaAutosize)(({ theme }) => ({
  padding: "8px 16px 18px",
  gap: "10px",
  width: "100%",
  height: "140px",
  background: "#F7F7F7",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
  outline: "none",
}));

const initiallyValues = { lat: 25.395969, lng: 68.357773 };

const ChangeLocation = ({addRestaurantData, handleClose, handleSubmitForm }) => {
  const [latLng, setLatLng] = useState(initiallyValues);
  const formik = useFormik({
    initialValues: {
      address: addRestaurantData.address || "",
      lat: initiallyValues.lat,
      lng: initiallyValues.lng,
      note: addRestaurantData.note || "",
    },
    onSubmit: (values, action) => {
      handleSubmitForm(values);
      action.resetForm();
    },
  });

  const onChangeValue = useCallback(
    debounce((e) => {
      if (e.target.name === "lat" || e.target.name === "lng")
        setLatLng({ ...latLng, [e.target.name]: Number(e.target.value) });
    }, 800),
    []
  );

  return (
    <>
      <form onSubmit={formik.handleSubmit} onChange={(e) => onChangeValue(e)}>
        <CloseHeader
          label="Back"
          variant="back"
          handleClose={handleClose}
          title="Change Location"
          rightButton
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <CustomInput
                  label="Detail Address"
                  placeholder="4474 Bridgeport Rd. Canada"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <CustomInput
                  label="New Latitude Coordinate"
                  placeholder="41.40338"
                  type="number"
                  id="lat"
                  name="lat"
                  value={formik.values.lat}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <CustomInput
                  label="New Longtitude Coordinate"
                  placeholder="41.40338"
                  type="number"
                  id="lng"
                  name="lng"
                  value={formik.values.lng}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <H3Typo>Note</H3Typo>

              <CustomTextArea
                aria-label="empty textarea"
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                minRows={5}
                id="note"
                name="note"
                value={formik.values.note}
                onChange={formik.handleChange}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Map lat={latLng.lat} lng={latLng.lng} />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ChangeLocation;

import { Box, Grid } from "@mui/material";
import DeliveryCard from "components/Cards/DeliveryCard";
import { FlexBoxContainer } from "components/Containers";
import { H1Typo } from "components/Typography";
import DriverProfile from "./DriverProfile";

const OnDelivery = ({handleClickChat}) => {
  return (
    <Box>
      <FlexBoxContainer>
        <H1Typo>On Delivery</H1Typo>
      </FlexBoxContainer>

      {false ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}></Grid>
          <Grid item xs={12} sm={12} md={6}>
            <DeliveryCard />
          </Grid>
          <Grid item xs={12} sm={12} md={3}></Grid>
        </Grid>
      ) : (
        <DriverProfile handleClickChat={handleClickChat} />
      )}
    </Box>
  );
};

export default OnDelivery;

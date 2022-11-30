import { Box, Grid, Stack } from "@mui/material";
import { BorderContainer, FlexBoxContainer } from "components/Containers";
import SimpleChips from "components/Chips/SimpleChips";
import { H1Typo, LightTitle, H3Typo } from "components/Typography";
import CustomIconButton from "components/Button/CustomIconButton";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Prepare = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            subscriptionType: "Cooked",
            name: "Salmon with chili sauce",
            numberOfOrders: "30",
          },
          {
            subscriptionType: "On Progress",
            name: "Salmon with chili sauce",
            numberOfOrders: "30",
          },
          {
            subscriptionType: "Cooked",
            name: "Salmon with chili sauce",
            numberOfOrders: "30",
          },
          {
            subscriptionType: "On Progress",
            name: "Salmon with chili sauce",
            numberOfOrders: "30",
          },
          {
            subscriptionType: "Cooked",
            name: "Salmon with chili sauce",
            numberOfOrders: "30",
          },
          {
            subscriptionType: "On Progress",
            name: "Salmon with chili sauce",
            numberOfOrders: "30",
          },
        ].map((item) => (
          <Grid item xs={12} sm={12} md={6}>
            <BorderContainer>
              <Box width="100%">
                <Stack spacing={2}>
                  <Box
                    style={{
                      borderBottom: "1px solid #E1E1E6",
                      paddingBottom: "15px",
                    }}
                  >
                    <SimpleChips
                      label={item.subscriptionType}
                      chipColor={"#FAA641"}
                    />
                  </Box>
                  <FlexBoxContainer>
                    <H1Typo>{item.name}</H1Typo>
                    <H1Typo>{item.numberOfOrders} Order</H1Typo>
                  </FlexBoxContainer>
                </Stack>
              </Box>
            </BorderContainer>
          </Grid>
        ))}
      </Grid>

      {/* <BorderContainer
        style={{
          borderRadius: 0,
          height: "14%",
          position: "fixed",
          top: "86%",
        }}
      >
        <Grid container spacing={2} ml={0}>
          <Grid item xs={12} sm={12} md={6}>
            <LightTitle>Dishes :</LightTitle>
            <CustomIconButton label="6 Meal Plan" variant={"outlined"} />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box
              style={{
                background: "#80B3B0",
                border: "2px solid #2B817B",
                borderRadius: "8px",
                maxWidth: "494px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginRight: "5%",
                marginTop: "15px",
              }}
            >
              <Box>
                <BorderContainer
                  style={{
                    background: "#2B817B",
                    borderRadius: "6px",
                    border: "none",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <ArrowForwardIosOutlinedIcon style={{ color: "#ffffff" }} />
                </BorderContainer>
              </Box>

              <H3Typo color="#fff">Start Packing</H3Typo>
            </Box>
          </Grid>
        </Grid>
      </BorderContainer> */}
    </Box>
  );
};

export default Prepare;

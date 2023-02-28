import { Box, Grid, Stack } from "@mui/material";
import { BorderContainer, FlexBoxContainer } from "components/Containers";
import SimpleChips from "components/Chips/SimpleChips";
import { H1Typo, LightTitle, H3Typo } from "components/Typography";
import CustomIconButton from "components/Button/CustomIconButton";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetAllOrderQuery } from "api/order";
import FullPageLoader from "components/Loader/FullPageLoader";
import { useEffect, useState } from "react";


// [
//   {
//     subscriptionType: "Cooked",
//     name: "Salmon with chili sauce",
//     numberOfOrders: "30",
//   },
//   {
//     subscriptionType: "On Progress",
//     name: "Salmon with chili sauce",
//     numberOfOrders: "30",
//   },
//   {
//     subscriptionType: "Cooked",
//     name: "Salmon with chili sauce",
//     numberOfOrders: "30",
//   },
//   {
//     subscriptionType: "On Progress",
//     name: "Salmon with chili sauce",
//     numberOfOrders: "30",
//   },
//   {
//     subscriptionType: "Cooked",
//     name: "Salmon with chili sauce",
//     numberOfOrders: "30",
//   },
//   {
//     subscriptionType: "On Progress",
//     name: "Salmon with chili sauce",
//     numberOfOrders: "30",
//   },
// ]

const Prepare = () => {
  const [data,setData] = useState([])
  const { data: RequestedOrder, isLoading } = useGetAllOrderQuery(
    `page=1&size=10&sortBy=asc&status=on-progressorcooked`
  );

  useEffect(()=>{
    if(RequestedOrder && RequestedOrder.data){
      setData(RequestedOrder.data)
    }
  },[RequestedOrder])
  return isLoading?<FullPageLoader/>: (
    <Box>
      <Grid container spacing={2}>
        {data.map((item) => (
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
                      label={item.status}
                    />
                  </Box>
                  <FlexBoxContainer>
                    <H1Typo>"mealplaneId"</H1Typo>
                    <H1Typo>{item.orderSummary.length} Order</H1Typo>
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

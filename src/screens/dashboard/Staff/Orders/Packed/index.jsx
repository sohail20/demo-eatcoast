import { useState, useEffect } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { BorderContainer, FlexBoxContainer } from "components/Containers";
import SimpleChips from "components/Chips/SimpleChips";
import { H1Typo, H3Typo, LightTitle } from "components/Typography";
import Details from "./Details";
import StickedBar from "components/Header/StickedBar";
import CustomIconButton from "components/Button/CustomIconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useGetAllOrderQuery } from "api/order";
const Packed = () => {
  const [showDetail, setShowDetail] = useState("details");

  const renderScreen = {
    packedList: <Details handleClose={() => setShowDetail("details")} />,
    details: (
      <PackedList handleShowDetail={() => setShowDetail("packedList")} />
    ),
  };
  return (
    <Box>
      {renderScreen[showDetail]}

      <StickedBar hasBorder>
        <Box
          style={{
            pointerEvents: showDetail === "details" ? "none" : undefined,
            opacity: showDetail === "details" ? "0.5" : undefined,
          }}
        >
          <Grid container spacing={2} ml={0}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <LightTitle>
                  {showDetail === "details"
                    ? "Packed all order :"
                    : "Selected :"}
                </LightTitle>
                {showDetail === "details" ? (
                  <CustomIconButton label="6 Meal Plan" variant={"outlined"} />
                ) : (
                  <H3Typo bold>0/30 Packed</H3Typo>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              {showDetail === "details" ? (
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
                      <ArrowForwardIosIcon style={{ color: "#ffffff" }} />
                    </BorderContainer>
                  </Box>

                  <Box textAlign="center" width="100%">
                    <H3Typo color="#fff" style={{ textAlign: "center" }}>
                      Ready to Pickup
                    </H3Typo>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <CustomIconButton
                    label="Packed"
                    disabled
                    variant={"contained"}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </StickedBar>

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

const PackedList = ({ handleShowDetail }) => {
  const [data,setData] = useState([])
  const { data: RequestedOrder, isLoading } = useGetAllOrderQuery(
    `page=1&size=10&sortBy=asc&status=packed`
  );

  useEffect(()=>{
    if(RequestedOrder && RequestedOrder.data){
      setData(RequestedOrder.data)
    }
  },[RequestedOrder])
  return (
    <Grid container spacing={2} style={{ marginBottom: "86px" }}>
      {data.map((item) => (
        <Grid item xs={12} sm={12} md={6}>
          <BorderContainer pointer onClick={handleShowDetail}>
            <Box width="100%">
              <Stack spacing={2}>
                <Box
                  style={{
                    borderBottom: "1px solid #E1E1E6",
                    paddingBottom: "15px",
                  }}
                >
                  <SimpleChips label={item.status} />
                </Box>
                <FlexBoxContainer>
                  <H1Typo>"123132"</H1Typo>
                  <H1Typo>{item.orderSummary.length} Order</H1Typo>
                </FlexBoxContainer>
              </Stack>
            </Box>
          </BorderContainer>
        </Grid>
      ))}
    </Grid>
  );
};
export default Packed;

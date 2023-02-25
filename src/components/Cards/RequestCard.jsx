import { Box, Stack } from "@mui/material";
import { BorderContainer, FlexBoxContainer } from "components/Containers";
import { LightTitle, H1Typo, H3Typo } from "components/Typography";
import SimpleChips from "components/Chips/SimpleChips";
import CustomIconButton from "components/Button/CustomIconButton";
import { useEffect, useState } from "react";
import { subscriptionType } from "helper";

const getTotal = (tax, subtotal) => {
  return parseInt(tax) + parseInt(subtotal);
};

const RequestCard = ({
  item,
  variant = "card",
  borderLess,
  handleOnClickDetail,
  handleOnClickAccept,
}) => {
  const [subscription, setSubscription] = useState([]);
  const [deliveryData, setDeliveryData] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});
  const [orderSummary, setOrderSummary] = useState([]);
  const { name, numberOfOrder } = item;

  useEffect(() => {
    if (item && item.deliveryDetails && item.deliveryDetails[0]) {
      setSubscription(item.deliveryDetails[0].subscriptionId);
      setDeliveryData({
        from: item.deliveryDetails[0].deliveryTime,
        to: item.deliveryDetails[0].deliveryTime,
      });
      setPaymentDetails(item.paymentDetails[0]);
      setOrderSummary(item.orderSummary[0]);
    }
  }, [item]);

  return (
    item && (
      <>
        <BorderContainer style={{ border: borderLess ? "none" : undefined }}>
          <Box width="100%">
            <Stack spacing={2}>
              <FlexBoxContainer>
                <LightTitle>{item.orderId}</LightTitle>

                {subscriptionType.map((e) => {
                  if (subscription.type === e.id)
                    return <SimpleChips label={e.label} chipColor="#FF8D85" />;
                })}
              </FlexBoxContainer>
              <FlexBoxContainer>
                <H1Typo>{name}</H1Typo>
                <Box>
                  <H1Typo>{numberOfOrder}</H1Typo>
                  <LightTitle>Order</LightTitle>
                </Box>
              </FlexBoxContainer>
              <Box>
                <LightTitle>{subscription.category} subscription :</LightTitle>
                <BorderContainer>
                  <FlexBoxContainer>
                    <LightTitle>{subscription.from}</LightTitle>
                    <LightTitle>-</LightTitle>
                    <LightTitle>{subscription.to}</LightTitle>
                  </FlexBoxContainer>
                </BorderContainer>
              </Box>
              <Box>
                <FlexBoxContainer>
                  <LightTitle>Time :</LightTitle>

                  {variant === "card" && <LightTitle>Total paid :</LightTitle>}
                </FlexBoxContainer>
                <FlexBoxContainer>
                  <Box>
                    <BorderContainer>
                      <LightTitle>
                        {deliveryData.from} - {deliveryData.to}
                      </LightTitle>
                    </BorderContainer>
                  </Box>

                  <Box />
                  {variant === "card" && (
                    <H1Typo>$ {paymentDetails.totalPayment}</H1Typo>
                  )}
                </FlexBoxContainer>
              </Box>
              {variant === "card" && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={"space-evenly"}
                >
                  <CustomIconButton
                    label="Detail"
                    variant={"outlined"}
                    onClick={() => handleOnClickDetail(item._id)}
                  />
                  <CustomIconButton
                    label="Accept"
                    variant={"contained"}
                    onClick={() => handleOnClickAccept(item._id)}
                  />
                </Box>
              )}

              {variant === "modal" && (
                <>
                  <BorderContainer>
                    <Box width={"100%"}>
                      <Stack spacing={2}>
                        {Object.keys(orderSummary).map((item, index) => {
                          if (orderSummary[item].length) {
                            return (
                              <FlexBoxContainer>
                                <Box>
                                  <H3Typo>
                                    {orderSummary[item][0]["mealplaneId"].name}
                                  </H3Typo>
                                  <LightTitle>
                                    {
                                      orderSummary[item][0]["mealplaneId"]
                                        .description
                                    }
                                  </LightTitle>
                                </Box>

                                <Box display="flex" gap={5}>
                                  <H3Typo>{orderSummary[item][0].count}</H3Typo>
                                  <H3Typo>$ {orderSummary[item][0].count * 122}</H3Typo>
                                </Box>
                              </FlexBoxContainer>
                            );
                          }
                        })}
                      </Stack>
                    </Box>
                  </BorderContainer>
                  <Box>
                    <LightTitle></LightTitle>
                    <FlexBoxContainer style={{ justifyContent: "end" }}>
                      <Box display="flex">
                        <LightTitle>Subtotal:</LightTitle>
                        <LightTitle style={{ width: "85px", textAlign: "end" }}>
                          $170.00
                        </LightTitle>
                      </Box>
                    </FlexBoxContainer>

                    <FlexBoxContainer style={{ justifyContent: "end" }}>
                      <Box display="flex">
                        <LightTitle>Tax:</LightTitle>
                        <LightTitle style={{ width: "85px", textAlign: "end" }}>
                          ${subscription.tax}.00
                        </LightTitle>
                      </Box>
                    </FlexBoxContainer>

                    <FlexBoxContainer style={{ justifyContent: "end" }}>
                      <Box display="flex">
                        <LightTitle>Total:</LightTitle>
                        <LightTitle style={{ width: "85px", textAlign: "end" }}>
                          $180.00
                        </LightTitle>
                      </Box>
                    </FlexBoxContainer>
                  </Box>
                </>
              )}
            </Stack>
          </Box>
        </BorderContainer>
      </>
    )
  );
};

export default RequestCard;

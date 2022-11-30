import { Box, Stack } from "@mui/material";
import { BorderContainer, FlexBoxContainer } from "components/Containers";
import { LightTitle, H1Typo, H3Typo } from "components/Typography";
import SimpleChips from "components/Chips/SimpleChips";
import CustomIconButton from "components/Button/CustomIconButton";

const RequestCard = ({
  item,
  variant = "card",
  borderLess,
  handleOnClickDetail,
  handleOnClickAccept,
}) => {
  const {
    id,
    name,
    numberOfOrder,
    dateFrom,
    dateTo,
    timeFrom,
    timeTo,
    price,
    subscriptiontype,
  } = item;
  return (
    <>
      <BorderContainer style={{ border: borderLess ? "none" : undefined }}>
        <Box width="100%">
          <Stack spacing={2}>
            <FlexBoxContainer>
              <LightTitle>{id}</LightTitle>
              <SimpleChips
                label={subscriptiontype}
                chipColor={
                  subscriptiontype === "Personal Subscription"
                    ? "#7B49E5"
                    : "#7ECC49"
                }
              />
            </FlexBoxContainer>
            <FlexBoxContainer>
              <H1Typo>{name}</H1Typo>
              <Box>
                <H1Typo>{numberOfOrder}</H1Typo>
                <LightTitle>Order</LightTitle>
              </Box>
            </FlexBoxContainer>
            <Box>
              <LightTitle>Weekly subscription :</LightTitle>
              <BorderContainer>
                <FlexBoxContainer>
                  <LightTitle>{dateFrom}</LightTitle>
                  <LightTitle>-</LightTitle>
                  <LightTitle>{dateTo}</LightTitle>
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
                      {timeFrom} - {timeTo}
                    </LightTitle>
                  </BorderContainer>
                </Box>

                <Box />
                {variant === "card" && <H1Typo>$ {price}</H1Typo>}
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
                  onClick={() => handleOnClickDetail(item.id)}
                />
                <CustomIconButton
                  label="Accept"
                  variant={"contained"}
                  onClick={() => handleOnClickAccept(item.id)}
                />
              </Box>
            )}

            {variant === "modal" && (
              <>
                <BorderContainer>
                  <Box width={"100%"}>
                    <Stack spacing={2}>
                      {[
                        { dishName: "Main course", qty: "2", price: "120.00" },
                        { dishName: "Salad Dishes", qty: "1", price: "25.00" },
                        { dishName: "Sweet Dishes", qty: "2", price: "25.00" },
                      ].map((item) => (
                        <FlexBoxContainer>
                          <Box>
                            <H3Typo>{item.dishName}</H3Typo>
                            <LightTitle>All Dishes</LightTitle>
                          </Box>

                          <Box display="flex" gap={5}>
                            <H3Typo>{item.qty}</H3Typo>
                            <H3Typo>$ {item.price}</H3Typo>
                          </Box>
                        </FlexBoxContainer>
                      ))}
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
                        $10.00
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
  );
};

export default RequestCard;

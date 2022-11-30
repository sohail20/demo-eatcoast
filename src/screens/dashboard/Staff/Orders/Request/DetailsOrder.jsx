import { Box, Grid, Stack } from "@mui/material";
import { BorderContainer } from "components/Containers";
import { FlexBoxContainer } from "components/Containers";
import SimpleChips from "components/Chips/SimpleChips";
import { H1Typo, H3Typo, LightTitle } from "components/Typography";
import CloseHeader from "components/Header/CloseHeader";
import DateToFromCard from "components/Cards/DateToFromCard";

const dummyDate = [
  {
    id: "ECS - 12345",
    subscriptionType: "Fitness subscription",
    dishes: [
      {
        type: "Main course",
        name: "Kabasa",
        qty: "1",
      },
      {
        type: "Salad dishes",
        name: "Salad Dishes",
        qty: "1",
      },
      {
        type: "Sweet dishes",
        name: "Kabasa",
        qty: "1",
      },
    ],
  },
  {
    id: "ECS - 12345",
    subscriptionType: "Single order",
    dishes: [
      {
        type: "Main course",
        name: "Kabasa",
        qty: "1",
      },
      {
        type: "Salad dishes",
        name: "Salad Dishes",
        qty: "1",
      },
      {
        type: "Sweet dishes",
        name: "Kabasa",
        qty: "1",
      },
    ],
  },
  {
    id: "ECS - 12345",
    subscriptionType: "Bussines subscription",
    dishes: [
      {
        type: "Main course",
        name: "Kabasa",
        qty: "1",
      },
      {
        type: "Salad dishes",
        name: "Salad Dishes",
        qty: "1",
      },
      {
        type: "Sweet dishes",
        name: "Kabasa",
        qty: "1",
      },
    ],
  },
  {
    id: "ECS - 12345",
    subscriptionType: "Bussines subscription",
    dishes: [
      {
        type: "Main course",
        name: "Kabasa",
        qty: "1",
      },
      {
        type: "Salad dishes",
        name: "Salad Dishes",
        qty: "1",
      },
      {
        type: "Sweet dishes",
        name: "Kabasa",
        qty: "1",
      },
    ],
  },
];
const DetailsOrder = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Stack spacing={2}>
            {dummyDate.map((item) => (
              <Grid item xs={12} sm={12} md={12}>
                <BorderContainer>
                  <Stack spacing={2} width="100%">
                    <FlexBoxContainer>
                      <H1Typo>{item.id}</H1Typo>
                      <SimpleChips label={item.subscriptionType} />
                    </FlexBoxContainer>

                    <BorderContainer>
                      <Stack spacing={1} width="100%">
                        {item.dishes.map((dish) => (
                          <FlexBoxContainer>
                            <Box>
                              <LightTitle>{dish.type}</LightTitle>
                              <H3Typo>{dish.name}</H3Typo>
                            </Box>
                            <H3Typo>{dish.qty}</H3Typo>
                          </FlexBoxContainer>
                        ))}
                      </Stack>
                    </BorderContainer>
                  </Stack>
                </BorderContainer>
              </Grid>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <BorderContainer>
            <Stack width={"100%"} spacing={2}>
              <Box width="100%">
                <CloseHeader
                  title="All Detail"
                  handleClose={() => console.log("Im closed")}
                />
                <DateToFromCard
                  dateFrom={"Thursday, Sept 02, 2021"}
                  dateTo={"Monday, Sept 09, 2021"}
                  endTitle={"Total order :"}
                />
              </Box>

              <FlexBoxContainer>
                <DateToFromCard
                  time
                  dateFrom={"10.00 am"}
                  dateTo={"01.00 pm"}
                />
                <Box>
                  <LightTitle> Total order :</LightTitle>
                  <H3Typo>30 Order</H3Typo>
                </Box>
              </FlexBoxContainer>

              {[...Array(3)].map(() => (
                <BorderContainer>
                  <Box width={"100%"}>
                    <LightTitle>Main Course</LightTitle>
                    <Stack spacing={2}>
                      {[...Array(2)].map(() => (
                        <FlexBoxContainer>
                          <H3Typo bold>Kabasa </H3Typo>
                          <H3Typo bold>10</H3Typo>
                        </FlexBoxContainer>
                      ))}
                    </Stack>
                  </Box>
                </BorderContainer>
              ))}
            </Stack>
          </BorderContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsOrder;

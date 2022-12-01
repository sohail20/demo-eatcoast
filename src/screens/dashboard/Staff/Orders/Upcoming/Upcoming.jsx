import { useState } from "react";
import { Box, Checkbox, Stack, Grid, Avatar } from "@mui/material";
import {
  BorderContainer,
  CenteredBoxContainer,
  FlexBoxContainer,
} from "components/Containers";
import CustomizedDrop from "components/Inputs/DropDown";
import { H1Typo, H3Typo, LightTitle } from "components/Typography";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import CustomIconButton from "components/Button/CustomIconButton";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Upcoming = () => {
  return (
    <>
      <Stack spacing={2}>
        <FlexBoxContainer>
          <CustomizedDrop
            label="Mon, 09 Sept, 2021"
            items={[
              {
                label: "View Details",
                icon: "fa fa-eye",
                id: "view-details",
              },
              {
                label: "Pause Subscription",
                icon: "fa fa-eye",
                color: "#6A82CF",
                id: "pause-subscription",
              },
              {
                label: "Change Address",
                icon: "fa fa-eye",
                id: "change-address",
              },
              {
                label: "View Receipt",
                icon: "fa fa-eye",
                id: "view-receipt",
              },
              {
                label: "Cancel Subscription",
                icon: "fa fa-eye",
                color: "#E75C62",
                id: "cancel-subscription",
              },
              { label: "Help", icon: "fa fa-eye", id: "help" },
            ]}
            onClick={(e) => {
              console.log(e);
            }}
            height={24}
            title={"Today"}
          />

          <LightTitle>{"( 4 Menu )"}</LightTitle>
        </FlexBoxContainer>

        {true ? (
          <>
            <Box display="flex">
              <Stack direction={"row"} spacing={2}>
                {[...Array(4)].map(() => (
                  <Box
                    style={{
                      border: "1px solid #E1E1E6",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      padding: "3px",
                    }}
                  >
                    <TimerOutlinedIcon
                      style={{ fontSize: "18px", color: " #9EA3AE" }}
                    />
                    <LightTitle
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      10.00 Am - 01.00 Pm
                    </LightTitle>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box>
              <Grid container spacing={2}>
                {[
                  {
                    name: "Mazahr Lebanese Meal Plan",
                    qty: "25",
                    timeTo: "10.00 Am",
                    timeFrom: "01.00 Pm",
                    dishesType: [
                      {
                        title: "Main Course",
                        qty: "21 / 25",
                        isCompleted: true,
                        dishes: [
                          {
                            dishesName: "Kabasa",
                            servering: "1",
                          },
                          {
                            dishesName: "Kabasa",
                            servering: "1",
                          },
                          {
                            dishesName: "Kabasa",
                            servering: "1",
                          },
                        ],
                      },
                      {
                        title: "Tabbouleh Salad",
                        qty: "16 / 25",
                        isCompleted: false,
                        dishes: [
                          {
                            dishesName: "Tabbouleh Salad",
                            servering: "16",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "Mazahr Lebanese Meal Plan",
                    qty: "25",
                    timeTo: "10.00 Am",
                    timeFrom: "01.00 Pm",
                    dishesType: [
                      {
                        title: "Main Course",
                        qty: "21 / 25",
                        isCompleted: true,
                        dishes: [
                          {
                            dishesName: "Kabasa",
                            servering: "1",
                          },
                        ],
                      },
                      {
                        title: "Salad dishes",
                        qty: "16 / 25",
                        isCompleted: false,
                        dishes: [
                          {
                            dishesName: "Tabbouleh Salad",
                            servering: "16",
                          },
                        ],
                      },
                    ],
                  },
                ].map((item) => (
                  <Grid item xs={12} sm={12} md={6}>
                    <OrderCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        ) : (
          <Grid container spacing={2}>
            {[...Array(3)].map(() => (
              <Grid item xs={12} sm={12} md={4}>
                <CountingCard />
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </>
  );
};

const CountingCard = () => {
  return (
    <BorderContainer
      style={{
        PointerEvent: false ? "none" : undefined,
        opacity: false ? 0.5 : undefined,
      }}
    >
      <Stack spacing={2} width={"100%"}>
        <FlexBoxContainer>
          <Box display="flex" gap={2}>
            <Avatar
              src="https://www.w3schools.com/howto/img_avatar2.png"
              variant="rounded"
            ></Avatar>
            <Box>
              <H3Typo>Kabasa</H3Typo>
              <LightTitle color="#42C677">See detail</LightTitle>
            </Box>
          </Box>

          <CenteredBoxContainer>
            <CustomIconButton
              icon={<DoDisturbOnOutlinedIcon />}
              variant={"text"}
            />
            <H3Typo>2</H3Typo>
            <CustomIconButton
              icon={<AddCircleOutlineOutlinedIcon />}
              variant={"text"}
            />
          </CenteredBoxContainer>
        </FlexBoxContainer>

        <LightTitle style={{ display: "flex", alignItems: "center" }}>
          <CalendarMonthOutlinedIcon />
          Schedule cook
        </LightTitle>

        <Box
          border="1px solid #E1E1E6"
          style={{
            height: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LightTitle
            textAlign="center"
            style={{ marginTop: "-4px", background: "#fff", width: "133px" }}
          >
            December
          </LightTitle>
        </Box>

        <Box display="flex" gap={2}>
          {[...Array(3)].map(() => (
            <BorderContainer style={{ width: "32px", height: "32px" }}>
              <LightTitle>30</LightTitle>
            </BorderContainer>
          ))}
        </Box>
      </Stack>
    </BorderContainer>
  );
};

const OrderCard = ({ hasDropdown, item }) => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <BorderContainer>
      <Box width={"100%"}>
        <FlexBoxContainer>
          <CenteredBoxContainer>
            <Checkbox />
            <H1Typo>{item.name}</H1Typo>
          </CenteredBoxContainer>

          <H1Typo>{item.qty} Order</H1Typo>
        </FlexBoxContainer>

        <FlexBoxContainer
          style={{
            borderBottom: "1px solid #E1E1E6",
            paddingBottom: "10px",
          }}
        >
          <Box display="flex">
            <TimerOutlinedIcon
              style={{ fontSize: "18px", color: " #9EA3AE" }}
            />
            <LightTitle>Time</LightTitle>
          </Box>

          <Box
            style={{
              border: "1px solid #E1E1E6",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              padding: "3px",
            }}
          >
            <LightTitle
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.timeTo} - {item.timeFrom}
            </LightTitle>
          </Box>
        </FlexBoxContainer>
        <Stack spacing={2} mt={2}>
          {item.dishesType.map((dishes) => (
            <>
              <FlexBoxContainer>
                <CenteredBoxContainer
                  gap={2}
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenDetails(!openDetails)}
                >
                  <H3Typo>{dishes.qty}</H3Typo>
                  <LightTitle>{dishes.title}</LightTitle>
                  {dishes.isCompleted &&
                    (openDetails ? (
                      <ExpandLessOutlinedIcon style={{ color: "#9EA3AE" }} />
                    ) : (
                      <ExpandMoreOutlinedIcon style={{ color: "#9EA3AE" }} />
                    ))}
                </CenteredBoxContainer>
                {!dishes.isCompleted ? (
                  <CancelIcon style={{ color: "#E75C62", fontSize: "14px" }} />
                ) : (
                  <CheckCircleIcon
                    style={{ color: " #42C677", fontSize: "14px" }}
                  />
                )}
              </FlexBoxContainer>

              {(openDetails || !dishes.isCompleted) && (
                <BorderContainer>
                  <Box width={"100%"}>
                    {dishes.dishes.map((dish) => (
                      <FlexBoxContainer>
                        <H3Typo bold>{dish.dishesName}</H3Typo>
                        <H3Typo bold>{dish.servering} Servings</H3Typo>
                      </FlexBoxContainer>
                    ))}

                    {!dishes.isCompleted && (
                      <FlexBoxContainer>
                        <LightTitle color={"#E75C62"}>
                          some dishes have'nt selected
                        </LightTitle>
                        <LightTitle color={"#2B817B"}>
                          Select the dishes
                        </LightTitle>
                      </FlexBoxContainer>
                    )}
                  </Box>
                </BorderContainer>
              )}
            </>
          ))}
        </Stack>
      </Box>
    </BorderContainer>
  );
};

export default Upcoming;

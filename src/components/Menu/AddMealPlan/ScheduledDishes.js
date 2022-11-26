import React, { useState } from "react";
import { Grid, Box, Stack } from "@mui/material";
import CustomCalendar from "../../Calendar/Calendar";
import CustomScheduler from "../../Calendar/Scheduler";
import SimpleChips from "../../Chips/SimpleChips";
import { BorderContainer } from "../../Containers";
import CustomInput from "../../Inputs/CustomInput";
import CustomDrawer from "../../Modal/CustomDrawer";
import { H1Typo } from "../../Typography";
import LightTitle from "../../Typography/LightTitle";
import SmallInfoCard from "../../Cards/SmallInfoCard";
const ScheduledDishes = () => {
  const [step, setStep] = useState(1);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
          <Box
            style={{
              background: " #FFFFFF",
              border: "1px solid #E1E1E6",
              borderRadius: "8px",
              padding: 10,
            }}
          >
            <img
              src={"https://picsum.photos/200"}
              alt={"some title"}
              loading="lazy"
              height="100%"
              style={{
                width: "100%",
                height: "111px",
                borderRadius: "4px",
              }}
            />
            <SimpleChips label="Reviewed" chipColor={"#42C677"} />
            <H1Typo>Salmon with chili sauce</H1Typo>
            <LightTitle>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </LightTitle>
            <Box alignItems="center" justifyContent={"center"} mt={5}>
              <LightTitle style={{ textAlign: "center" }}>
                Meal plan end date :
              </LightTitle>
              <Box
                style={{
                  border: "1px solid #42C677",
                  borderRadius: "4px",
                  padding: "10px",
                }}
              >
                <LightTitle style={{ textAlign: "center" }}>
                  28 Desember 2022
                </LightTitle>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9} md={9}>
          <CustomScheduler handleAddClick={() => setModalIsOpened(true)} />
        </Grid>
      </Grid>
      {modalIsOpened && (
        <CustomDrawer
          topTitle={
            step === 1
              ? "Dish Schedule"
              : step === 2
              ? "Select Date"
              : "Select Dishes"
          }
          handleOnSave={() => {
            setModalIsOpened(false);
          }}
          handleOnBack={() => {
            setStep(step - 1);
          }}
        >
          <Box style={{ width: "400px", padding: 15 }}>
            <Stack spacing={2}>
              {step === 1 ? (
                <>
                  <CustomInput
                    label="Select Dishes"
                    placeholder="Select DIshes"
                    onClick={() => {
                      setStep(step + 1);
                    }}
                  />
                  <CustomInput label="Select Date" placeholder="Select Date" />
                </>
              ) : step === 2 ? (
                <>
                  <CustomCalendar
                    hasTopInput
                    handleOnSelect={() => {
                      setStep(step + 1);
                    }}
                  />
                  <BorderContainer>
                    <LightTitle>No dishes selected in this schedule</LightTitle>
                  </BorderContainer>
                </>
              ) : (
                <>
                  {[...Array(5)].map(() => (
                    <SmallInfoCard
                      borderLess
                      imgWidth="40px"
                      data={{
                        img: "https://picsum.photos/200",
                        heading: "Mesopotamian cuisine",
                      }}
                    />
                  ))}
                </>
              )}
            </Stack>
          </Box>
        </CustomDrawer>
      )}
    </>
  );
};

export default ScheduledDishes;

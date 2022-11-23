import { Grid, Box } from "@mui/material";
import CustomScheduler from "../../Calendar/Scheduler";
import SimpleChips from "../../Chips/SimpleChips";
import { BorderContainer } from "../../Containers";
import { H1Typo } from "../../Typography";
import LightTitle from "../../Typography/LightTitle";
const ScheduledDishes = () => {
  return (
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
        <CustomScheduler/>
      </Grid>
    </Grid>
  );
};

export default ScheduledDishes;

import React, { useState } from "react";
import { Box, Grid, Stack, styled } from "@mui/material";

//components
import CustomIconButton from "components/Button/CustomIconButton";
import { H1Typo, LightTitle } from "components/Typography";
import { BorderContainer, FlexBoxContainer } from "components/Containers";
import SimpleChips from "components/Chips/SimpleChips";
//icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomizedLineChart from "components/Charts/LineChart";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CustomStarIcon = styled(StarIcon)(() => ({
  fontSize: "18px",
}));

const CustomStarBorderIcon = styled(StarBorderIcon)(() => ({
  fontSize: "18px",
}));

const tmpSubsArray = [
  {
    customerName: "Ilham Syaif",
    date: "29 August 2021 - 10.00 Am - 01.00 Am",
    subject: "“Very nice service“",
    message: `Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industrys
  standard dummy text ever since the 1500s`,
    subscriptionType: "fitness-subscription",
  },
  {
    customerName: "Ilham Syaif",
    date: "29 August 2021 - 10.00 Am - 01.00 Am",
    subject: "“Very nice service“",
    message: `Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industrys
  standard dummy text ever since the 1500s`,
    subscriptionType: "fitness-subscription",
  },

  {
    customerName: "Ilham Syaif",
    date: "29 August 2021 - 10.00 Am - 01.00 Am",
    subject: "“Very nice service“",
    message: `Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industrys
  standard dummy text ever since the 1500s`,
    subscriptionType: "personal-subscription",
  },

  {
    customerName: "Ilham Syaif",
    date: "29 August 2021 - 10.00 Am - 01.00 Am",
    subject: "“Very nice service“",
    message: `Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industrys
  standard dummy text ever since the 1500s`,
    subscriptionType: "bussines-subscription",
  },
];

const subscriptionType = [
  {
    label: "Personal subscription",
    id: "personal-subscription",
    color: "#7B49E5",
  },
  {
    label: "Fitness subscription",
    id: "fitness-subscription",
    color: "#FF8D85",
  },
  {
    label: "Multiple subscription",
    id: "multiple-subscription",
    color: "#158FAD",
  },
  { label: "Single order", id: "single-order", color: "#7ECC49" },
  {
    label: "Bussines subscription",
    id: "bussines-subscription",
    color: "#FF9933",
  },
];

const CustomerFeedbackDashboard = ({ handleBack }) => {
  const [currentFeedBackType, setCurrentFeedBackType] = useState(
    "fitness-subscription"
  );
  const [feedback, setFeedBack] = useState(tmpSubsArray);

  const handleUpdateFeedback = (val) => {
    setCurrentFeedBackType(val);
    const filteredArray = tmpSubsArray.filter(
      (e) => e.subscriptionType === val
    );
    setFeedBack(filteredArray);
  };
  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        style={{ marginBottom: "20px" }}
      >
        <CustomIconButton
          label="Back"
          onClick={handleBack}
          icon={<ArrowBackIosIcon style={{ color: "#2B817B" }} />}
        />
        <Box style={{ width: "100%", textAlign: "center" }}>
          <H1Typo>Costumer Feedback</H1Typo>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <BorderContainer>
              <FlexBoxContainer>
                <Box>
                  <BorderContainer
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid #F6F6F6",
                      borderRadius: "8px",
                    }}
                  >
                    <CustomStarIcon style={{ color: "#FAA641" }} />
                  </BorderContainer>
                </Box>
                <Box>
                  <Box display="flex">
                    {[...Array(5)].map(() => (
                      <CustomStarIcon style={{ color: "#FAA641" }} />
                    ))}
                  </Box>

                  <H1Typo style={{ textAlign: "end", marginTop: "10px" }}>
                    4.4 / 5
                  </H1Typo>
                  <LightTitle style={{ textAlign: "end" }}>
                    Avg. rating
                  </LightTitle>
                </Box>
              </FlexBoxContainer>
            </BorderContainer>

            {[
              { value: 80 },
              { value: 60 },
              { value: 40 },
              { value: 20 },
              { value: 5 },
            ].map((item, index) => (
              <CustomizedLineChart value={item.value} stars={index} />
            ))}

            {subscriptionType.map((item, index) => (
              <BorderContainer
                key={index}
                onClick={() => handleUpdateFeedback(item.id)}
                style={{
                  cursor: "pointer",
                  background:
                    currentFeedBackType === item.id ? "#F6F6F6" : undefined,
                }}
              >
                <FlexBoxContainer>
                  <SimpleChips label={item.label} chipColor={item.color} />
                  <ArrowForwardIosIcon style={{ color: "#E1E1E6" }} />
                </FlexBoxContainer>
              </BorderContainer>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <FlexBoxContainer>
              <Box display="flex">
                <BorderContainer
                  style={{
                    borderRadius: "20px",
                    border: "none",
                    padding: 0,
                    width: "95px",
                    background: "#FAA641",
                  }}
                >
                  <LightTitle style={{ color: "#fff" }}>All Review</LightTitle>
                </BorderContainer>
                {[5, 4, 3, 2, 1].map((i) => (
                  <BorderContainer
                    key={i}
                    style={{
                      borderRadius: "20px",
                      padding: 0,
                      width: "61px",
                      marginLeft: 10,
                    }}
                  >
                    <LightTitle>{i}</LightTitle>
                    <CustomStarBorderIcon style={{ color: "#FAA641" }} />
                  </BorderContainer>
                ))}
              </Box>
              <LightTitle style={{ textAlign: "end" }}>
                {"( 52 Review )"}
              </LightTitle>
            </FlexBoxContainer>

            {feedback
              .filter((e) => e.subscriptionType === currentFeedBackType)
              .map((item) => (
                <FeedBackCard item={item} />
              ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const FeedBackCard = ({ item }) => (
  <BorderContainer>
    <Box width="100%">
      <FlexBoxContainer>
        <Box>
          {[...Array(5)].map(() => (
            <CustomStarIcon style={{ color: "#FAA641" }} />
          ))}
        </Box>
        {subscriptionType.map((e) => {
          if (item.subscriptionType === e.id)
            return <SimpleChips label={e.label} chipColor="#FF8D85" />;
        })}
      </FlexBoxContainer>

      <Box mt={2} style={{ borderBottom: "1px solid #F6F6F6" }} pb={2}>
        <H1Typo>{item.customerName}</H1Typo>
        <LightTitle>{item.date}</LightTitle>
      </Box>

      <Box mt={2}>
        <H1Typo>{item.subject}</H1Typo>
        <LightTitle>{item.message}</LightTitle>
      </Box>
    </Box>
  </BorderContainer>
);
export default CustomerFeedbackDashboard;

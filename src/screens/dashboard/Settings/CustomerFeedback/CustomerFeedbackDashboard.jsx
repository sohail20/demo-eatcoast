import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { useGetFeedbackQuery } from "api/feedback";
import FullPageLoader from "components/Loader/FullPageLoader";
import { subscriptionType } from "helper";

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



const CustomerFeedbackDashboard = ({ handleBack }) => {
  const [query, setQuery] = useState("page=1&size=10");
  const { data: FeedBackData, isLoading } = useGetFeedbackQuery(query);
  const [currentFeedBackType, setCurrentFeedBackType] = useState(
    "fitness-subscription"
  );
  const [feedback, setFeedBack] = useState([]);

  const handleUpdateFeedback = (val) => {
    setCurrentFeedBackType(val);
    const filteredArray = FeedBackData.data.feedback.filter(
      (e) => e.result.type === val
    );
    setFeedBack(filteredArray);
  };

  const updateQuery = useCallback(
    (query) => {
      console.log(query);
      setQuery(query);
    },
    [query]
  );

  useEffect(() => {
    if (FeedBackData && FeedBackData.data)
      setFeedBack(FeedBackData.data.feedback);
  }, [FeedBackData]);
  return isLoading ? (
    <FullPageLoader />
  ) : (
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
                    {FeedBackData.data.average} / 5
                  </H1Typo>
                  <LightTitle style={{ textAlign: "end" }}>
                    Avg. rating
                  </LightTitle>
                </Box>
              </FlexBoxContainer>
            </BorderContainer>

            {Object.keys(FeedBackData.data.counts).map((item, index) => (
              <CustomizedLineChart
                value={FeedBackData.data.counts[item]}
                stars={index + 1}
              />
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
                  <SimpleChips label={item.id} chipColor={item.color} />
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
                  onClick={()=>{
                    updateQuery(`page=1&size=10`);
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
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      updateQuery(`page=1&size=10&sortBy=${i}`);
                    }}
                  >
                    <LightTitle>{i}</LightTitle>
                    <CustomStarBorderIcon style={{ color: "#FAA641" }} />
                  </BorderContainer>
                ))}
              </Box>
              <LightTitle style={{ textAlign: "end" }}>
                ( {FeedBackData.data.queryCount} Review )
              </LightTitle>
            </FlexBoxContainer>

            {feedback.map((item) => (
              <FeedBackCard item={item} />
            ))}
            {feedback.length == 0 && <LightTitle style={{ textAlign:"center", width:"100%"}}>No Result Found</LightTitle>}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

// {feedback
//   .filter((e) => e.subscriptionType === currentFeedBackType)
//   .map((item) => (
//     <FeedBackCard item={item} />
//   ))}

const FeedBackCard = ({ item }) => (
  <BorderContainer>
    <Box width="100%">
      <FlexBoxContainer>
        <Box>
          {[...Array(item.stars)].map(() => (
            <CustomStarIcon style={{ color: "#FAA641" }} />
          ))}
        </Box>
          <SimpleChips label={item.result.type} chipColor="#FF8D85" />
      </FlexBoxContainer>

      <Box mt={2} style={{ borderBottom: "1px solid #F6F6F6" }} pb={2}>
        <H1Typo>{item.result.userData[0].fullName}</H1Typo>
        <LightTitle>{item.result.createdAt}</LightTitle>
      </Box>

      <Box mt={2}>
        <H1Typo>{item.name}</H1Typo>
        <LightTitle>{item.comment}</LightTitle>
      </Box>
    </Box>
  </BorderContainer>
);
export default CustomerFeedbackDashboard;

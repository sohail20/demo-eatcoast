import { Box } from "@mui/material";

//components
import CustomIconButton from "../../../../components/Button/CustomIconButton";
import { H1Typo, LightTitle } from "../../../../components/Typography";
import {
  BorderContainer,
  FlexBoxContainer,
} from "../../../../components/Containers";
import SimpleChips from "../../../../components/Chips/SimpleChips";
//icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomizedLineChart from "../../../../components/Charts/LineChart";

const CustomerFeedbackDashboard = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        style={{ marginBottom: "20px" }}
      >
        <CustomIconButton
          label="Back"
          icon={<ArrowBackIosIcon style={{ color: "#2B817B" }} />}
        />
        <Box style={{ width: "100%", textAlign: "center" }}>
          <H1Typo>Costumer Feedback</H1Typo>
        </Box>
      </Box>
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
              <StarIcon style={{ color: "#FAA641" }} />
            </BorderContainer>
          </Box>
          <Box>
            <Box display="flex">
              {[...Array(5)].map(() => (
                <StarIcon style={{ color: "#FAA641" }} />
              ))}
            </Box>

            <H1Typo style={{ textAlign: "end", marginTop: "10px" }}>
              4.4 / 5
            </H1Typo>
            <LightTitle style={{ textAlign: "end" }}>Avg. rating</LightTitle>
          </Box>
        </FlexBoxContainer>
      </BorderContainer>

<CustomizedLineChart/>

      {[
        { label: "Personal subscription", color: "#7B49E5" },
        { label: "Fitness subscription", color: "#FF8D85" },
        { label: "Multiple subscription", color: "#158FAD" },
        { label: "Single order", color: "#7ECC49" },
        { label: "Bussines subscription", color: "#FF9933" },
      ].map((item,index) => (
        <BorderContainer key={index}>
          <FlexBoxContainer>
            <SimpleChips label={item.label} chipColor={item.color}/>
            <ArrowForwardIosIcon style={{ color: "#E1E1E6" }} />
          </FlexBoxContainer>
        </BorderContainer>
      ))}
    </>
  );
};

export default CustomerFeedbackDashboard;

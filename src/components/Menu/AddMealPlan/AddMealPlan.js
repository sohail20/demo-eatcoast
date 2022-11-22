import { Box, styled } from "@mui/material";
import BackButton from "../../Button/BackButton";
import OutlinedCard from "../../Cards/CustomCards";
import SmallInfoCard from "../../Cards/SmallInfoCard";
import FlexBoxContainer from "../../Containers/FlexBoxContainer";
import H1Typo from "../../Typography/H1Typo";

const TopConainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "32px",
  gap: "24px",
  width: "100%",
  height: "auto",
  background: "#FFFFFF",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
}));

const AddMealPlan = () => {
  return (
    <>
      <Box>
        <Box display={"flex"} alignItems="center">
          <BackButton />
          <Box style={{ width: "100%", textAlign: "center" }}>
            <H1Typo>Meal Plan</H1Typo>
          </Box>
        </Box>

        <Box>
          <TopConainer>
            <SmallInfoCard
              borderLess
              data={{
                img: "https://picsum.photos/200",
                heading: "Mesopotamian cuisine",
                address:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              }}
              hasAddButton
            />
            <SmallInfoCard
              data={{
                img: "https://picsum.photos/200",
                heading: "Main Course",
                address: "30 Dishes selected",
              }}
              hasEditButton
            />
          </TopConainer>
        </Box>
      </Box>
    </>
  );
};

export default AddMealPlan;

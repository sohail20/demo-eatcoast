import { Stack } from "@mui/material";
import UnderlineButton from "../../../Button/UnderlineButton";
import SmallInfoCard from "../../../Cards/SmallInfoCard";
import { FlexBoxContainer } from "../../../Containers";
import LightTitle from "../../../Typography/LightTitle";

const FoodPlan = () => {
  return (
    <>
      <Stack spacing={2}>
        <FlexBoxContainer>
          <LightTitle>Meal Courses</LightTitle>
          <UnderlineButton>Edit</UnderlineButton>
        </FlexBoxContainer>
        {[...Array(2)].map(() => (
          <SmallInfoCard
            data={{
              img: "https://picsum.photos/200",
              heading: "Mesopotamian cuisine",
            }}
            rightSideTitle={"No dishes added"}
          />
        ))}

        <FlexBoxContainer>
          <LightTitle>Add-ons</LightTitle>
          <UnderlineButton>Edit</UnderlineButton>
        </FlexBoxContainer>
        {[...Array(1)].map(() => (
          <SmallInfoCard
            data={{
              img: "https://picsum.photos/200",
              heading: "Mesopotamian cuisine",
            }}
            rightSideTitle={"No dishes added"}
          />
        ))}
      </Stack>
    </>
  );
};

export default FoodPlan;

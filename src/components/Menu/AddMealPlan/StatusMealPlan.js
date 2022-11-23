import { Box, Stack } from "@mui/material";
import SmallInfoCard from "../../Cards/SmallInfoCard";
import SimpleChips from "../../Chips/SimpleChips";
import { BorderContainer } from "../../Containers";
import { H3Typo } from "../../Typography";

const StatusMealPlan = () => {
  return (
    <>
      <BorderContainer style={{ borderRadius: "4px", display: "flex" }} mt={2}>
        <Box>
          <BorderContainer
            style={{
              borderRadius: "4px",
              background: "#F6F6F6",
              border: "none",
            }}
          >
            <H3Typo>
              Regarding the status of your dish shipment a while ago is
            </H3Typo>{" "}
            <Box style={{ margin: "0px 10px 0px 10px" }}>
              <SimpleChips label={"Rejected"} chipColor="#E75C62"></SimpleChips>{" "}
            </Box>
            <H3Typo>
              Regarding the status of your dish shipment a while ago is
            </H3Typo>
          </BorderContainer>

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

          <Stack spacing={2}>
            {[
              {
                data: {
                  img: "https://picsum.photos/200",
                  heading: "Mesopotamian cuisine",
                },
                points: [
                  "Additional dishes are not on the list.",
                  "The selection of food ingredients does not match the composition of the selected food",
                  "The description you provide does not match the description of the selected food",
                ],
                dishes: "4 Dishes",
              },
              {
                data: {
                  img: "https://picsum.photos/200",
                  heading: "Mesopotamian cuisine",
                },
                points: [
                  "Additional dishes are not on the list.",
                  "The selection of food ingredients does not match the composition of the selected food",
                  "The description you provide does not match the description of the selected food",
                ],
                dishes: "4 Dishes",
              },
            ].map(({ data, points, dishes }) => (
              <SmallInfoCard
                data={data}
                hasPoints={points}
                rightSideTitle={dishes}
              />
            ))}
          </Stack>
        </Box>
      </BorderContainer>
    </>
  );
};

export default StatusMealPlan;

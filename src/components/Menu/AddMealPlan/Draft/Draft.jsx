import { Grid } from "@mui/material";
import SmallInfoCard from "../../../Cards/SmallInfoCard";
import { H1Typo } from "../../../Typography";

const Draft = () => {
  return (
    <>
      <H1Typo>Draft</H1Typo>
      <Grid container spacing={2}>
        {[
          {
            img: "https://picsum.photos/200",
            heading: "Mesopotamian cuisine",
            address:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply ",
            status: "Under review",
          },

          {
            img: "https://picsum.photos/200",
            heading: "Mesopotamian cuisine",
            address:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply ",
            status: "Need to Submit",
          },
          {
            img: "https://picsum.photos/200",
            heading: "Mesopotamian cuisine",
            address:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply ",
            status: "Rejected",
          },
          {
            img: "https://picsum.photos/200",
            heading: "Mesopotamian cuisine",
            address:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply ",
            status: "Need to Submit",
          },
        ].map((item) => (
          <Grid item xs={12} md={6}>
            <SmallInfoCard data={item} hasEditButton />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Draft;

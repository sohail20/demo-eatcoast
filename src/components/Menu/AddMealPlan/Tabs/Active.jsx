import { Grid } from "@mui/material";
import SmallInfoCard from "../../../Cards/SmallInfoCard";

const Active = ({ cuisineData }) => {
  return (
    <>
      <Grid container spacing={2}>
        {[
          {
            img: "https://picsum.photos/200",
            heading: cuisineData.name,
            address: cuisineData.description,
            status: cuisineData.forReview ? "Under review" : "Need to Submit",
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

export default Active;

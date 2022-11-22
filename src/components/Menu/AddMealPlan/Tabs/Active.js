import { Grid } from "@mui/material";
import SmallInfoCard from "../../../Cards/SmallInfoCard";

const Active = () => {
  return (
    <>
      <Grid container spacing={2}>
        {[...Array(6)].map(() => (
          <Grid item xs={6} md={6}>
            <SmallInfoCard
              data={{
                img: "https://picsum.photos/200",
                heading: "Main Course",
                address: "30 Dishes selected",
              }}
              hasEditButton
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Active;

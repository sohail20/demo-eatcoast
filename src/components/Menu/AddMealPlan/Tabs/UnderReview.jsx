import { Grid } from "@mui/material";
import SmallInfoCard from "../../../Cards/SmallInfoCard";
const UnderReview = () => {
  return (
    <Grid container spacing={2}>
      {[
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
          status: "Under review",
        },
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
          status: "Under review",
        },
        {
          img: "https://picsum.photos/200",
          heading: "Mesopotamian cuisine",
          address:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply ",
          status: "Under review",
        },
      ].map((item) => (
        <Grid item xs={6} md={6}>
          <SmallInfoCard
            borderLess
            status={item.status}
            statusColor={item.status === "Rejected" ? "#E75C62" : "#FAA641"}
            data={item}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default UnderReview;

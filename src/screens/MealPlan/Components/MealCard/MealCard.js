import * as React from "react";

import { Typography, Paper, styled, Button, Link } from "@mui/material";

import Grid from "@mui/material/Grid";
import SmallInfoCard from "../../../../components/Cards/SmallInfoCard";

const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "24px",
}));

const Para = styled(Typography)(({ theme }) => ({
  fontfamily: "Outfit",
  fonFStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#545359,",
  display:'inline-block'
}));

const CardLink = styled(Link)(({ theme }) => ({
  fontfamily: "Outfit",
  fonFStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#2B817B",
}));

function MealCard() {
  return (
    <>
      <Grid container spacing={2}>
        {[
          {
            img: "https://picsum.photos/200",
            heading: "Mesopotamian cuisine",
            address:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply ",
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
}

export default MealCard;

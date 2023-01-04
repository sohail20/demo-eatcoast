import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Typography, Paper, styled, Button, Link } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import cardImage from "../Images/card_img.png";
import Grid from "@mui/material/Grid";

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
 
      <Box component="div">
        <Grid container spacing={2}>
          {[1,2,3,4,5,6].map(() => (
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height:"120px",
                  border: '1px solid #E1E1E6',
                  borderRadius: '4px',
                  width:'100%',
                  jutifyContent:'center',
                  px:'10px'
                  
                }}
              >
                <Box sx={{width:"72px",height:"72px",borderRadius:"4px"}}>
                  <CardMedia component="img" sx={{width:"100%",height:"100%"}} image={cardImage}   />
                </Box>
                <Box>
                  <CardContent>
                    <CardTitle>Falafel Platter</CardTitle>
                    <Para>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum is simply.
                    </Para>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default MealCard;

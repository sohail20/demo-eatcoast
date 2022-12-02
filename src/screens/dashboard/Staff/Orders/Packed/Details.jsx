import { Grid, Checkbox, Box, Stack } from "@mui/material";
import SimpleChips from "components/Chips/SimpleChips";
import {
  BorderContainer,
  CenteredBoxContainer,
  FlexBoxContainer,
} from "components/Containers";
import CloseHeader from "components/Header/CloseHeader";
import { H3Typo, LightTitle } from "components/Typography";

const Details = ({ handleClose }) => {
  return (
    <>
      <CloseHeader
        title="Detail Order"
        label="Back"
        variant="back"
        handleClose={handleClose}
      />
      <Grid container spacing={2} mb={"86px"}>
        {[...Array(12)].map(() => (
          <Grid item xs={12} sm={6} md={4}>
            <BorderContainer>
              <Box width={"100%"}>
                <FlexBoxContainer>
                  <CenteredBoxContainer display="flex">
                    <Checkbox />
                    <H3Typo>ECS - 12345</H3Typo>
                  </CenteredBoxContainer>
                  <SimpleChips label="Fitness subscription" />
                </FlexBoxContainer>

                <BorderContainer>
                  <Stack width={"100%"} spacing={2}>
                    {[...Array(2)].map(() => (
                      <FlexBoxContainer>
                        <Box>
                          <LightTitle>Main course</LightTitle>
                          <H3Typo>Kabasa</H3Typo>
                        </Box>
                        <H3Typo>1</H3Typo>
                      </FlexBoxContainer>
                    ))}
                  </Stack>
                </BorderContainer>
              </Box>
            </BorderContainer>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Details;

import { Box, Stack, Grid } from "@mui/material";
import CashCard from "../../../../components/Cards/CashCard";
import { FlexBoxContainer } from "../../../../components/Containers";
import { H1Typo } from "../../../../components/Typography";
import DateCard from "../../../../components/Cards/DateCard";
const WithdrawHistory = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}></Grid>

        <Grid item xs={12} md={6}>
          <FlexBoxContainer>
            <Box width="100%">
              <CashCard />
              <Stack spacing={2} mt={2}>
                {[
                  {
                    monthName: "August",
                    data: [
                      {
                        status: "waiting",
                        date: "18",
                        month: "Aug",
                        dataId: "#123123123",
                        value: "-$120",
                      },
                      {
                        status: "waiting",
                        date: "18",
                        month: "Aug",
                        dataId: "#123123123",
                        value: "-$120",
                      },
                      {
                        status: "complete",
                        date: "18",
                        month: "Aug",
                        dataId: "#123123123",
                        value: "-$120",
                      },
                    ],
                  },

                  {
                    monthName: "July",
                    data: [
                      {
                        status: "complete",
                        date: "18",
                        month: "Aug",
                        dataId: "#123123123",
                        value: "-$120",
                      },
                    ],
                  },
                ].map((item) => (
                  <>
                    <H1Typo>{item.monthName}</H1Typo>
                    <Stack spacing={2}>
                      {item.data.map((item) => (
                        <DateCard data={item} />
                      ))}
                    </Stack>
                  </>
                ))}
              </Stack>
            </Box>
          </FlexBoxContainer>
        </Grid>

        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </>
  );
};

export default WithdrawHistory;

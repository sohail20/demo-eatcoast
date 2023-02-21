import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useGetAllCuisineQuery } from "api/cuisine";
import { Data2 } from "./config";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "120px",
});

const Typo1 = styled(Typography)(({ theme }) => ({
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "26px",
  color: "#1A1824",
  [theme.breakpoints.up("xl")]: {
    fontSize: "26px",
  },
}));

const Typo2 = styled(Typography)(({ theme }) => ({
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "26px",
  color: "#9EA3AE",
  [theme.breakpoints.up("xl")]: {
    fontSize: "26px",
  },
}));

const Typo3 = styled(Typography)(({ theme }) => ({
  fontFamily: "outfit",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "28px",
  [theme.breakpoints.up("xl")]: {
    fontSize: "26px",
  },
}));

const Typo4 = styled(Typography)(({ theme }) => ({
  fontFamily: "outfit",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  [theme.breakpoints.up("xl")]: {
    fontSize: "20px",
  },

  color: "#9EA3AE",
  paddingRight: "32px"
}));

export default function CuisineCategoryCard({ handleOnClick }) {
  const { data: allCuisine, isLoading } = useGetAllCuisineQuery()

  return isLoading ? <p>Loading...</p> : (
    <>
      <Box sx={{}}>
        {allCuisine && allCuisine.data && allCuisine.data.map((item, index) => {
          return (
            <>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typo3 sx={{ pb: "16px" }}>{item.Cuisine}</Typo3>
                </Box>
                <Box>
                  <Typo4 sx={{ marginRight: { xl: "0px", lg: "0px", md: "0px", sm: "0px", xs: "0px" } }}>{`${item.subCuisine.length} Sub-cuisine`}</Typo4>
                </Box>
              </Box>
              <Grid container>
                {
                  item.subCuisine.map((subCuisine) => {
                    return (
                      <>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                          <Box
                            sx={{
                              maxWidth: {
                                xl: "600px",
                                lg: "350px",
                                md: "350px",
                                sm: "350px",
                                xs: "350px",
                              },
                              flexGrow: 1,
                              backgroundColor: (theme) =>
                                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                              border: "1px solid #E1E1E6",
                              mb: "32px",
                              borderRadius: "8px",
                              height: {
                                xl: "200px",
                                lg: "120px",
                                md: "120px",
                                sm: "120px",
                                xs: "120px",
                              },
                              display: "flex",
                              cursor: "pointer"
                            }}
                            onClick={() => { handleOnClick(subCuisine) }}
                          >
                            <Box
                              sx={{
                                width: {
                                  xl: "200px",
                                  lg: "139px",
                                  md: "139px",
                                  sm: "139px",
                                  xs: "139px",
                                },
                                backgroundColor: "#F0FAF9",
                                backgroundImage: "url(./images/thread.svg)",
                                backgroundPosition: "Bottom Right",
                                backgroundRepeat: "no-repeat",
                                height: {
                                  xl: "200px",
                                  lg: "120px",
                                  md: "120px",
                                  sm: "120px",
                                  xs: "120px",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  height: {
                                    xl: "170px",
                                    lg: "100px",
                                    md: "100px",
                                    sm: "100px",
                                    xs: "100px",
                                  },
                                  width: {
                                    xl: "170px",
                                    lg: "100px",
                                    md: "100px",
                                    sm: "100px",
                                    xs: "100px",
                                  },
                                }}
                              >
                                <img
                                  src={"./images/meal1.svg"}
                                  alt=""
                                  width="100%"
                                  height="auto"
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "space-between",
                                pl: { xl: "26px", lg: "12px", md: "12px", sm: "12px", xs: "12px" },
                                pt: "8px",
                                pb: "8px",
                              }}
                            >
                              <Box>
                                <Typo1>{subCuisine.subCuisine}</Typo1>
                              </Box>
                              <Box>
                                <Typo2>you have {subCuisine.totalMenu} menu</Typo2>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      </>
                    )
                  })
                }
              </Grid>
            </>
          )
        }

        )}
      </Box>
    </>
  );
}

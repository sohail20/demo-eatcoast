import styled from '@emotion/styled';
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";

export default function DishesStepper1({ setStepper }) {
    const Typo1 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
        color: "#9EA3AE",
    }));
    const Typo2 = styled(Typography)(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "20px",
    }));

    const Button1 = {
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "20px",
        textTransform: "capitalize",
        color: "#2B817B",
        marginTop: '10px'
    }
    const [word, setWord]= React.useState(0)
    const handleCount = (value) => {
        console.log(value)
        if (value.length <= 80) {
            setWord(value);
        }
    }

    return (
    <> 
          <Container maxWidth="xs" >
              <Box width="100%" sx={{ display: "flex", mt: 6 }}>
                  <Box>
                      <img src="./images/image profile.svg" alt="" />
                  </Box>
                  <Box sx={{ ml: "32px" }}>
                      <Box>
                          <Typo1 sx={{ maxWidth: "230px", pb: "18px" }}>
                              *uploaded photos are 1 : 1 in size and a maximum of 2 mb
                          </Typo1>
                      </Box>
                      <Box>
                          
                          <Button sx={Button1}  variant="text" component="label" startIcon={<AddIcon />}>
                              Add photo
                              <input hidden accept="image/*" multiple type="file" />
                          </Button>
                      </Box>
                  </Box>
              </Box>

              <Box>
                  <Box sx={{ pt: "9px", pb: "8px" }}>
                      <Typo2>Dish name</Typo2>
                  </Box>
                  <Box>
                      <TextField
                          fullWidth
                          id="filled-textarea"
                          placeholder="Dish name"
                          variant="outlined"
                          InputProps={{
                              style: {
                                  height: "48px",
                              },
                          }}
                          sx={{
                              fontSize: "14px",
                              fontWeight: "400",
                              lineHeight: "20px",
                              borderRadius: "6px",
                              border: "1px solid #E1E1E6",
                              backgroundColor: "#F6F6F6",
                              color: "#9EA3AE",
                          }}
                      />
                  </Box>
              </Box>

              <Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Box sx={{ pt: "9px", pb: "8px" }}>
                          <Typo2>Description</Typo2>
                      </Box>
                      <Box sx={{ pt: "9px", pb: "8px" }}>
                          <Typo2 color="#9EA3AE">{word.length || 0}/80</Typo2>
                      </Box>
                  </Box>
                  <Box>
                      <TextField
                            onChange={(e) => handleCount(e.target.value)}
                            id="outlined-multiline-static"
                            fullWidth
                            placeholder='Type your reason'
                            multiline
                            rows={4}
                            inputProps={{ maxLength: 80 }}                                        // value={value}
                            sx={{
                                color: '#1A1B24',
                                borderRadius: '6px', border: '1px solid  #E1E1E6',
                                background: '#F6F6F6',
                                '&:hover': {
                                    color: '#E1E1E6'
                                }
                            }}
                      />
                  </Box>
              </Box>
             
          </Container>


            </>

    )
}
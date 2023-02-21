import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  styled,
  PaperProps
} from '@mui/material';
import logo from 'Assets/logo.png';

const Container = styled(Paper)(({ isMobile }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: !isMobile ? 'auto' : 0
}));
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: theme.palette.common.lightBlue
}));

const InternalError = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <StyledBox>
      <Container isMobile={isMobile}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={isMobile ? 3 : 10}
          height={isMobile ? '100vh' : 'auto'}
        >
          <Box textAlign="center">
            <img src={logo}/>

            <Typography variant={isMobile ? 'h2' : 'h1'}>Internal Service Error</Typography>
            <Typography variant={isMobile ? 'h6' : 'h5'}>
              Opps! Look like something went wrong.
            </Typography>
            <Box m={2}>
              <Button
                disableElevation
                color="primary"
                variant="contained"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Go Back
              </Button>
            </Box>
            
          </Box>
        </Box>
      </Container>
    </StyledBox>
  );
};
export default InternalError;

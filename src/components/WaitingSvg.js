import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

export const WaitingSvg = ({ handleStepperPrev }) => {
  return (
     <Container maxWidth='xs' sx={{ backgroundColor: '', height: '50vh' }}>
          <Box textAlign={'center'}>
        <img src='../../images/waiting.png' alt="" />
          </Box>

      <Typography sx={{marginTop: '20px', color: '#1A1824', fontFamily: 'Outfit', fontSize: '16px', fontWeight: '400' }}
         >
        Your account is being verified For more information will be notified in your email
           </Typography> 
      <Button disableRipple={true} onClick={handleStepperPrev}
        style={{ marginTop: '20px', border: '1px solid #D5E6E5', textTransform: 'none', background: '#FFFFFF', width: '100%', color: 'white' }}
        >
        <span style={{ color: '#2B817B', fontFamily: 'Outfit', fontSize: '16px' }}>Back</span>
      </Button>

</Container>

  )
}

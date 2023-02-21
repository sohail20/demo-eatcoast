import { Button, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useGetVerifiedMutation } from 'api/signup'
import React, { useState } from 'react'
import FullPageLoader from './Loader/FullPageLoader'

export const WaitingSvg = ({ email, handleStepperPrev }) => {
  const [verificationCode, setVerificationCode] = useState("")
  const [verification, { isLoading }] = useGetVerifiedMutation();
  const [isVerified, setIsVerified] = useState(false)
  const handleVerification = () => {
    if (email !== "" && verificationCode !== "")
      verification({ email, otp: verificationCode }).then((res) => {
        if (res.data) setIsVerified(true)
      })
  }
  return isLoading ? <FullPageLoader /> : (
    <Container maxWidth='xs' sx={{ backgroundColor: '', height: '50vh' }} >
      <Box textAlign={'center'} mt={4}>
        <img src='../../images/waiting.png' alt="" />
      </Box>

      {!isVerified ?
        <>
          <label style={{
            fontSize: '14px', fontFamily: 'Outfit',
            fontWeight: '600', color: '#1A1824', '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6', background: 'red' }
          }}> Email Verification </label>

          <TextField sx={{
            mt: 1, mb: 2,
            background: '#F6F6F6', height: '40px',
            border: '1px solid #E1E1E6', borderRadius: '6px'
          }}
            fullWidth size='small'
            id="otp"
            name="otp"
            type="text"
            placeholder='OTP'
            value={verificationCode}
            onChange={(e) => {
              setVerificationCode(e.target.value)
            }}
          />
          <Button
            disableRipple={true}
            sx={{
              textTransform: "none",
              width: "100%",
              background: "#2B817B",
              border: " 1px solid #80B3B0",
              fontWeight: "600",
              borderRadius: "4px",
              color: "#fff",
              fontFamily: "Outfit",
              fontSize: "14px",
              "&:hover": { color: "#fff", background: "#2B817B" },
            }}
            onClick={handleVerification}
          >
            Submit
          </Button>
        </>
        : <>
          <Typography sx={{ marginTop: '20px', color: '#1A1824', fontFamily: 'Outfit', fontSize: '16px', fontWeight: '400' }}
          >
            Your account is being verified For more information will be notified in your email
          </Typography>
          <Button disableRipple={true} onClick={handleStepperPrev}
            style={{ marginTop: '20px', border: '1px solid #D5E6E5', textTransform: 'none', background: '#FFFFFF', width: '100%', color: 'white' }}
          >
            <span style={{ color: '#2B817B', fontFamily: 'Outfit', fontSize: '16px' }}>Back</span>
          </Button>
        </>
      }

    </Container>

  )
}

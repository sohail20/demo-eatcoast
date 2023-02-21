import React, { useState } from 'react'
import { Box, Button, Container, FormControl, IconButton, TextField, Typography } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from 'react-router-dom';

export const MerchantRegis = ({ formik, handleStepper }) => {
  const [imgData, setImgData] = useState({ licence: "", certificate: "" })
  return (
    <Container maxWidth='xs' sx={{ backgroundColor: '', height: '50vh' }} >
      <br />
      <Box mt={4}>
        <label style={{
          fontSize: '14px',
          fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
        }}>Merchant Name</label>
        <TextField sx={{
          mt: 1, mb: 2,
          background: '#F6F6F6', height: '40px',
          '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6' },
          border: '1px solid #E1E1E6', borderRadius: '6px'
        }}
          fullWidth size='small'
          placeholder="Merchant Name"
          id="MerchantName"
          name="merchantName"
          value={formik.values.merchantName}
          onChange={formik.handleChange}
        />

        <label style={{
          fontSize: '14px', fontFamily: 'Outfit',
          fontWeight: '600', color: '#1A1824', '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6', background: 'red' }
        }}> Address </label>

        <TextField sx={{
          mt: 1, mb: 2,
          background: '#F6F6F6', height: '40px',
          border: '1px solid #E1E1E6', borderRadius: '6px'
        }}
          fullWidth size='small'
          id="address"
          name="address"
          type="text"
          placeholder='Address'
          value={formik.values.address}
          onChange={formik.handleChange}
        />

        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          // justifyContent:'space-between',
          alignItems: 'center'
        }}>
          <Box sx={{ width: '50%' }}>
            <label style={{
              fontSize: '14px',
              fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
            }}>Certification</label>
          </Box>
          <Box sx={{ width: '50%' }}>
            <label style={{
              fontSize: '14px',
              fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
            }}>Bussiness Licence</label>
          </Box>
        </Box>


        {/* </Root> */}
        <Box sx={{
          mt: 1,
          display: 'flex',
        }}>
          <IconButton disableRipple={true} sx={{
            marginRight: 1, width: '47%', background: '#F6F6F6', height: '40px',
            border: '1px solid #E1E1E6', borderRadius: '6px'
          }}
            aria-label="upload picture" component="label"
          >
            <input
              hidden accept="image/*"
              id="certificate"
              name="certificate"
              label="certificate"
              type="file"
              value={imgData.certificate}
              //onChange={formik.handleChange}
              onChange={(event) => {
                setImgData({ ...imgData, certificate: event.target.value })
                formik.setFieldValue(
                  "certificate",
                  event.currentTarget.files[0]
                );
              }}
            />
            <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }} >
              <Box>
                <Typography sx={{ fontSize: '12px', paddingTop: '4.5px' }}>
                  {imgData.certificate}
                </Typography>
              </Box>
              <Box>
                <FolderIcon sx={{ fontSize: '20px', marginTop: '4.5px' }} />
              </Box>
            </Box>
          </IconButton>

          <IconButton disableRipple={true} sx={{
            width: '50%', background: '#F6F6F6', height: '40px',
            border: '1px solid #E1E1E6', borderRadius: '6px'
          }}
            aria-label="upload picture" component="label"
          >

            <input
              hidden accept="image/*"
              id="licence"
              name="licence"
              label="licence"
              type="file"
              value={imgData.licence}
              onChange={(event) => {
                console.log("currentTarget.files[0]",event.currentTarget.files[0].name)
                setImgData({ ...imgData, licence: event.target.value })
                formik.setFieldValue(
                  "licence",
                  event.currentTarget.files[0]
                );
              }}
            />
            <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }} >
              <Box>
                <Typography sx={{ fontSize: '12px', paddingTop: '4.5px' }}>
                  {imgData.licence}
                </Typography>
              </Box>
              <Box>
                <FolderIcon sx={{ fontSize: '20px', marginTop: '4.5px' }} />
              </Box>
            </Box>

          </IconButton>
        </Box>
        <Typography sx={{ marginBottom: 2, marginTop: 3, paddingLeft: 1, fontWeight: '700' }}>
          <Link to={'/forgotpass'} ><span style={{
            color: '#2B817B', fontFamily: 'Outfit', textDecorationLine: 'underline',
            textDecorationColor: '#2B817B'
          }}>
            Forgot Password ? </span></Link>
        </Typography>

        <Button disableRipple={true} onClick={handleStepper}
          style={{ border: 2, textTransform: 'none', background: '#2B817B', width: '100%', color: 'white' }}
        >
          <span style={{ color: '#FFFFFF', fontFamily: 'Outfit', fontSize: '16px' }}>Next</span>
        </Button>
        <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >
          <span style={{ color: '#1A1824', fontFamily: 'Outfit', fontSize: '14px' }}>Already have an account ?{" "}  </span>{' '}
          <Link to={'/'} >
            <span style={{ color: '#2B817B', fontFamily: 'Outfit', fontSize: '14px', fontWeight: '700', textDecorationLine: 'underline' }}>
              {' '}  login </span></Link>
        </Typography>

      </Box>


    </Container>
  )
}

import { Box, Button, Container, IconButton,  TextField, Typography } from '@mui/material'
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from 'react-router-dom';

export const MerchantRegis = ({ formik, handleStepper }) => {
  console.log(formik.values)
  return (
    <Container maxWidth='xs' sx={{ backgroundColor: '', height: '50vh' }} >

      <br />
      <Box mt={4}>
        <label style={{ fontSize: '14px',
          fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'}}>Merchant Name</label>
        <TextField sx={{ mt: 1, mb: 2,
          background: '#F6F6F6', height: '40px', 
          '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6' },
           border: '1px solid #E1E1E6', borderRadius: '6px'
         }}
          fullWidth size='small'
          id="MerchantName"
          name="merchantName"
          placeholder="Merchant Name"
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

        <label style={{
          fontSize: '14px',
          fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
        }}>Certification</label>
        <label style={{
          fontSize: '14px', marginLeft: '130px' ,
          fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
        }}>Bussiness Licence</label>

        <Box sx={{ mt: 1,
          display: 'flex',
        }}>
          <IconButton disableRipple={true} sx={{
          marginRight: 1, width: '47%', background: '#F6F6F6', height: '40px',
            border: '1px solid #E1E1E6', borderRadius: '6px'}}
            aria-label="upload picture" component="label"
          >
            <input
              hidden accept="image/*"
              id="certification"
              name="certification"
              label="certification"
              type="file"
              value={formik.values.certification}
              onChange={formik.handleChange}
            />
        <Box sx={{display: 'flex'}}>
              <Typography sx={{ marginRight: '80px', fontSize: '12px', paddingTop: '4.5px'}}> 
                    Add File
                        </Typography>  
                    <FolderIcon sx={{fontSize: '20px', marginTop: '4.5px'}} />
        </Box>
          </IconButton>
         
          <IconButton  disableRipple={true} sx={{
            width: '50%', background: '#F6F6F6', height: '40px',
            border: '1px solid #E1E1E6', borderRadius: '6px'
          }}
            aria-label="upload picture" component="label"
          >

            <input
              hidden accept="image/*"
              id="Business Lisence"
              name="BusinessLisence"
              label="Business Lisence"
              type="file"
              value={formik.values.BusinessLisence}
              onChange={formik.handleChange}
            />
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ marginRight: '80px', fontSize: '12px', paddingTop: '4.5px' }}>
                Add File
              </Typography>
              <FolderIcon sx={{fontSize: '20px', marginTop: '4.5px'}}/>
            </Box>
          </IconButton>
        </Box>
        <Typography sx={{ marginBottom: 2, marginTop: 3, paddingLeft: 1 , fontWeight: '700' }}>
          <Link  to={'#'} ><span style={{ color: '#2B817B', fontFamily: 'Outfit' }}>
            Forgot Password ? </span></Link>
        </Typography>

        <Button disableRipple={true} onClick={handleStepper}
          style={{ border: 2, textTransform: 'none', background: '#2B817B', width: '100%', color: 'white' }}
          >
            <span style={{ color: '#FFFFFF', fontFamily: 'Outfit', fontSize: '16px' }}>Next</span>
        </Button>
        <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >
          <Link to={'/'} >
            <span style={{ color: '#1A1824', fontFamily: 'Outfit', fontSize: '14px' }}>Already have an account ?</span>{' '}
            <span style={{ color: '#2B817B', fontFamily: 'Outfit',fontSize: '14px', fontWeight:'700', textDecorationLine: 'underline' }}>
              login </span></Link>
        </Typography>
     
      </Box>


    </Container>
  )
}

import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import BackBtnAndPageTitle from '../../../components/BackBtnAndPageTitle'
import Grid from '@mui/material/Grid'
import CustomizedDropdown from "../../../components/CustomizedDropdown" 

const ScheduleMenuListItemDetail = ({setShowDishDetailFunc,backBtnFunc}) => {


  return (
    <>
      <Box width="100%">
        <Box sx={{display:"flex",justifyContent:"space-around",flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"}}}>
          <Box sx={{flexGrow:{sm:1}}} my="3px">
            <BackBtnAndPageTitle title="All dishes" btnTitle="Back" mb={2} labelSx={{mx:"0px",ml:"auto",pr:"10px",fontWeight:"600",fontSize:{xs:"13px",md:"16px"}}} 
            btnOnClickHandler={backBtnFunc && backBtnFunc} /> 
          </Box>
          <Box sx={{my:"3px",mb:"16px",width:{xs:"auto",sm:"200px"}}}>
            <CustomizedDropdown />
          </Box>
        </Box>
        <Box>
          <Grid container gap={1}>
          {
            [1,2,3,4,5,6].map((item,index) => (
            <Grid item xs={5.8}>
              <Box sx={{width:{xs:"140px", sm:"200px"},p:"10px"}}>
                <Box sx={{width:"100%"}}>
                  <Box sx={{width:"100%",borderRadius:"4px"}}>
                    <img src="images/scheduleMenuItemDishPic.png" style={{borderRadius:"4px",maxWidth:"100%",height:"auto"}} alt="scheduleMenuItemDishPic" />
                  </Box>
                  <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{my:"3px",fontWeight:"600",fontSize:{xs:"13px",md:"16px"}}}>Kabasa</Typography>
                    <Typography color="#2B817B" sx={{my:"3px",textDecoration:"underline",fontWeight:"400",fontSize:{xs:"13px",md:"16px"}}} onClick={()=> setShowDishDetailFunc(true)}>See Details</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            ))
          } 
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default ScheduleMenuListItemDetail
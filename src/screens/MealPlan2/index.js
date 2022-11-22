import React from 'react'
import Box from '@mui/material/Box'
import BackBtnAndPageTitle from '../../components/BackBtnAndPageTitle'
import Typography from '@mui/material/Typography'
import CustomMediaCard from '../../components/CustomMediaCard'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid'
import DashboardLayout from '../DashboardLayout/DashboardLayout'

const MealPlan2 = () => {
  return (
    <DashboardLayout>
      <Box>
        <BackBtnAndPageTitle title="Meal Plan" btnTitle="Back" linkPath={-1}/>
        <Box p="10px 20px" mt={3} border="1px solid #e1e1e6" minHeight="400px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Grid container border="1px solid #e1e1e6" gap={0.5} justifyContent="space-between">
              <Grid item xs={12} md={7.5} my="5px">
                <CustomMediaCard 
                  title="Mesopotamian cuisine"
                  subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  imgUrl="images/mealplanDishpic1.svg"
                  imgWidth="88px"
                  imgHeight="88px"
                  subTitleSx={{color:"#545359"}}
                  sx={{alignItems:{xs:"flex-start",md:"unset"}}}
                  />
              </Grid>
              <Grid my="5px" xs={12} md={3.5} sx={{display:"flex",justifyContent:{xs:"flex-start",md:"flex-end"}}} display="flex" justifyContent="flex-end">
                <Box sx={{minWidth:"127px"}}>
                <Button variant="contained" startIcon={<AddIcon />} sx={{mb:"10px",bgcolor:"#2B817B",minWidth:"127px",textTransform:"capitalize",'&:hover':{bgcolor:"#2B817B"}}}>Add Meal Plan</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
        </Box>
      </Box>
    </DashboardLayout>
  )
}

export default MealPlan2
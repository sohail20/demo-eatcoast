import { Box, Drawer, Typography } from '@mui/material';
import React from 'react'

export const Dash_staff_SideSilder = ({ isDrawerOpenStaff, setIsDrawerOpenStaff, setIsDrawerOpenStaff1, isDrawerOpenStaff1, handleSideSliderStaff,
    setIsDrawerOpenStaff2, isDrawerOpenStaff2, handleSideSliderStaff1
 }) => {
    //const [isDrawerOpenStaff, setIsDrawerOpenStaff] = React.useState(true);
    // const [isDrawerOpenStaff1, setIsDrawerOpenStaff1] = React.useState(false);
    // const [isDrawerOpenStaff2, setIsDrawerOpenStaff2] = React.useState(false);
    // const handleSideSliderStaff=()=>{
    //     setIsDrawerOpenStaff1(true);
    //     setIsDrawerOpenStaff(false);
    // }
    // const handleSideSliderStaff1=()=>{
    //     setIsDrawerOpenStaff1(false);
    //     setIsDrawerOpenStaff(false);
    //     setIsDrawerOpenStaff2(true);
    // }
    return (
      <>    
      {/* ------------Drawer 1 */}
            <Drawer anchor='right' open={isDrawerOpenStaff} 
                onClose={() => setIsDrawerOpenStaff(false)}>
              <Box p={2} width="250px" textAlign={'center'}
                  role='presentation'>
                    <Typography variant='h6' component='div' onClick={() => setIsDrawerOpenStaff(false)}>
                      side panel
                  </Typography>
                     <Box component={'div'}>
                        <Box onClick={handleSideSliderStaff}> Link 1</Box> 
                           <Box> Link 2</Box> 
                           <Box> Link 3</Box> 
                           <Box> Link 4</Box> 
                         </Box>   
              </Box>
          </Drawer>
            {/* ------------Drawer 2 */}

            <Drawer anchor='right' open={isDrawerOpenStaff1}
                onClose={() => setIsDrawerOpenStaff1(false)}>
                <Box p={2} width="250px" textAlign={'center'}
                    role='presentation'>
                    <Typography variant='h6' component='div' onClick={() => setIsDrawerOpenStaff1(false)}>
                        side panel 1
                    </Typography>
                    <Box component={'div'}>
                        <Box onClick={handleSideSliderStaff1}> Link 2</Box>
                        <Box> Link 2</Box>
                        <Box> Link 3</Box>
                        <Box> Link 4</Box>
                    </Box>
                </Box>
            </Drawer>
            {/* ------------Drawer 3 */}

            <Drawer anchor='right' open={isDrawerOpenStaff2}
                onClose={() => setIsDrawerOpenStaff2(false)}>
                <Box p={2} width="250px" textAlign={'center'}
                    role='presentation'>
                    <Typography variant='h6' component='div' onClick={() => setIsDrawerOpenStaff2(false)}>
                        side panel 2
                    </Typography>
                    <Box component={'div'}>
                        <Box> Link 1</Box>
                        <Box> Link 2</Box>
                        <Box> Link 3</Box>
                        <Box> Link 4</Box>
                    </Box>
                </Box>
            </Drawer>
      </>
  )
}

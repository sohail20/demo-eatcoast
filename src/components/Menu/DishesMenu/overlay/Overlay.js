import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import {Box,Button, Typography}from '@mui/material';
function Overlay({ isDialogOpen, setIsDialogOpen, setActiveStep, ActiveStep }) {
    
    return ( 
        <>
       
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isDialogOpen}
                // onClose={() => setIsDialogOpen(false) }
        
          >
            <Box
            sx={{
                width:{lg:'509px',md:'509px',sm:'250px',xs:'250px'},
                height:'205px',
                backgroundColor:"#FFFFFF",
                borderRadius:'8px',
                display:'flex',
                padding:3,
                flexDirection:'column',
                alignItems:'center'
            }}
            >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='h6' component='div' sx={{  color: '#E75C62', cursor: 'pointer' }}
                            onClick={() => {setIsDialogOpen(false);
                            setActiveStep(ActiveStep +1);}}>
                            X
                        </Typography>
                <Typography
                sx={{
                    fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'16px'},
                    fontWeight:'600',
                    color:'black'
                }}
                >Delete Item</Typography>
                </Box>
                <Typography
                sx={{
                    color:'#545359',
                    fontSize:"14px",
                    width:'350px',
                    textAlign:'center'
    
                }}
                >
                        something you delete can not be returned again, save this as a draft ?</Typography>
                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                <Button
                            // onClick={setIsDialogOpen(false)}
                sx={{
                    padding:'8px 24px',
                    color:'#DD7474',
                    border:'1px solid #DD7474',
                    borderRadius:'4px',
                    width:'147px',
                    height:'40px',
                    margin:2
    
                }}
                >Delete</Button>
                <Button
                            onClick={() => setIsDialogOpen(false)}
                sx={{
                    borderRadius:'4px',
                    width:'160px',
                    height:'40px',
                    padding:'8px 24px',
                    backgroundColor:"#2B817B",
                    color:"white",
                    margin:2,
                    '&:hover':{backgroundColor:'#2B817B'}
    
    
                }}
                >Save as Draft</Button>
                </Box>
            </Box>
            </Backdrop>
    
            
       
        </>
     );
}

export default Overlay;
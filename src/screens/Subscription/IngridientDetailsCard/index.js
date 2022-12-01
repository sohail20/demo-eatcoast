import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const IngridientDetailsCard = ({IngridientListItemDataArr}) => {
  return (
    <>
    {
        IngridientListItemDataArr && IngridientListItemDataArr.map((item,index) => (
                <Box sx={{width:"100%"}}>
                    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",my:"5px"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <Box sx={{borderRadius:"5px",p:"8px",backgroundColor:"#F7F7F8"}}>
                                <Box sx={{width:"24px",height:"auto"}}> 
                                    <img src={item?.imgSrc && item?.imgSrc} alt="ingridientpic" style={{width:"24px",height:"auto"}} /> 
                                </Box>
                            </Box>
                            <Box sx={{ml:{xs:"20px",sm:"50px"}}}>
                                <Typography sx={{py:"10px",fontWeight:"500",color:"#1A1824",fontSize:{xs:"13px",md:"16px"}}}>{item?.name && item?.name}</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{py:"10px",fontWeight:"600",color:"#9EA3AE",fontSize:{xs:"13px",md:"14px"}}}>{item?.qty && item?.qty}</Typography>
                        </Box>
                    </Box>
                </Box>
            )
        )
    }
        
    </>
  )
}

export default IngridientDetailsCard
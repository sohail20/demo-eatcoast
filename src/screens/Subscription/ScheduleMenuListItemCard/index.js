import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const ScheduleMenuListItemCard = ({scheduleMenuListItemArr,setShowScheduleMenuListItemDetailFunc}) => {

  return (
    <>
    {
        scheduleMenuListItemArr && scheduleMenuListItemArr.map((item,index)=>(
            <Box sx={{my:"10px"}}>
                <Typography sx={{color:"#9EA3AE",fontWeight:"600",fontSize:{xs:"13px",md:"16px"}}}>
                    {item?.date && item?.date}
                </Typography>
                <Box sx={{border:"1px solid #E1E1E6",borderRadius:"6px",p:"10px",my:"5px"}}>
                {
                    item?.scheduleMenuDetailArr && item?.scheduleMenuDetailArr.map((item,index)=> (
                        <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                            <Box sx={{my:"5px",mr:"40px"}}>
                                <Typography sx={{color:"#1A1824",fontWeight:"500",fontSize:{xs:"13px",md:"18px"}}}>{item?.title && item?.title}
                                </Typography>
                                <Typography sx={{color:"#9EA3AE",fontWeight:"400",fontSize:{xs:"13px",md:"16px"}}}>{item?.description && item?.description}
                                </Typography>
                            </Box>
                            <Box sx={{my:"5px",display:"flex",justifyContent:"space-between"}}>
                                <Typography sx={{color:"#1A1824",fontWeight:"500",mr:"40px",fontSize:{xs:"13px",md:"18px"}}}>
                                    {item?.qty && item?.qty}
                                </Typography>
                                <Typography color="#2B817B" sx={{textDecoration:"underline",fontSize:{xs:"13px",md:"16px",cursor:"pointer"}}} fontWeight="400" onClick={()=> setShowScheduleMenuListItemDetailFunc(true)}>
                                    {item?.btnText && item?.btnText}
                                </Typography>
                            </Box>
                        </Box>
                    ))
                }
                </Box>
            </Box>
        ))
    }
    </>
  )
}

export default ScheduleMenuListItemCard
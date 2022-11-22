import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const CustomMediaCard = ({imgUrl, title, iconUrl, subTitle, imgHeight, imgWidth,subTitleSx,titleSx,...other}) => {
  return (
    <>
        <Box display="flex" {...other}>
            {
                imgUrl && 
                <Box mb="10px" mr="15px" sx={{marginTop:{xs:"10px",md:"unset"}}} minWidth={imgWidth} minHeight={imgHeight}>
                    <img src={imgUrl && imgUrl} alt="mediaCardIcon" width="100%" height="100%"/>
                </Box>
            }
            <Box my="10px">
            <Typography fontSize="20px" fontWeight="600" sx={titleSx}>{title && title}</Typography>
            {
                subTitle && iconUrl ?  
                <Typography fontSize="14px" fontWeight="400" my="10px" color="#9EA3AE" sx={subTitleSx}>
                    {iconUrl && <span><img src={iconUrl} alt="Icon" style={{marginRight:"5px",verticalAlign:"text-top"}} /></span>}
                {subTitle && subTitle}</Typography>
                :  
                <Typography fontSize="14px" fontWeight="400" my="5px" color="#9EA3AE" sx={subTitleSx}>
                    {subTitle && subTitle}
                </Typography>
            }
            </Box>
        </Box>
    </>
  )
}

export default CustomMediaCard







// import React from 'react'
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import styles from './CustomMediaCard.module.sass'
// import cn from "classnames";

// const CustomMediaCard = ({imgUrl, title, iconUrl, subTitle }) => {
//   return (
//     <>
//         <Box className={cn(styles.customMediaCard)} display="flex" flexWrap="wrap" my="10px" >
//             {
//                 imgUrl && 
//                 <Box className={cn(styles.imgWrapper)} my="10px" mr="15px" width="48px" height="48px">
//                     <img src={imgUrl && imgUrl} alt="mediaCardIcon" width="100%" height="100%"/>
//                 </Box>
//             }
//             <Box className={cn(styles.detailWrapper)} my="10px">
//             <Typography className={cn(styles.title)} fontSize="18px" fontWeight="500" >{title && title}</Typography>
//             {
//                 subTitle && iconUrl ?  
//                 <Typography className={cn(styleImg)} fontSize="14px" fontWeight="400" my="10px" color="#9EA3AE" >
//                     {iconUrl && <span><img src={iconUrl} alt="Icon" /></span>}
//                 {subTitle && subTitle}</Typography>
//                 :  
//                 <Typography className={cn(styles.subTitle)} fontSize="14px" fontWeight="400" my="5px" color="#9EA3AE" >{subTitle && subTitle}</Typography>
//             }
//             </Box>
//         </Box>
//     </>
//   )
// }

// export default CustomMediaCard
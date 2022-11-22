import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useNavigate } from 'react-router-dom';

const BackBtnAndPageTitle = ({title,btnTitle,linkPath}) => {
    const navigate = useNavigate()

  return (
    <Box display="flex" alignItems="center" py="10px" border="1px solid #e1e1e6">
        <Box py="3px">
            <Button color="customclr" variant="text" startIcon={<ChevronLeftIcon />} onClick={() => navigate(linkPath)}>
              {btnTitle}
            </Button> 
        </Box>
    {
        title && <Typography color="customclr.darkblacks" fontSize="20px" fontWeight="600" mx="auto" py="3px">{title}</Typography>
    }
    </Box>
  )
}

export default BackBtnAndPageTitle
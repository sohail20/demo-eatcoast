import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const CustomPasswordField = styled(TextField)({
    width: "100%",
    border: "1px solid #9EA3AE",
    borderRadius: "4px",
    paddingRight: "14px",
    backgroundColor: "#E1E1E6",
    '& label.MuiInputLabel-root': {
        display: "none"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'unset',
    },
    '& .MuiOutlinedInput-root': {
        width: "100%",
        '& input': {
        width: "100%",
        color: "#545359",
        backgroundColor: "#E1E1E6",
        fontSize: "14px",
        fontWeight:"400",
        padding: "10px 24px 10px 24px",
      },
    '& input::placeholder': {
        color: "#9EA3AE",
        fontSize: "14px",
        fontWeight:"400",
        opacity: 1
    },
    '& fieldset': {
        borderColor: 'unset',
        display: "none"
      },
    '&': {
        padding: 0,
        margin: "5px 0",
        position: "static"
    },
    '& textarea#mui-3': {
        width: "100%",
        height: "auto",
        overflow: "auto",
        padding: "12px 24px 12px 24px",
        border: "1px solid #00A2FD",
        borderRadius: "18px",
        overflowWrap: "break-word",
        backgroundColor: "transparent",
        fontSize: "14px",
        fontWeight:"400",
        color: "#545359",
      },
    '& textarea#mui-3::placeholder': {
        color: "#9EA3AE",
        opacity: "1"
      },
    },
  });


  const CustomInputField = styled(TextField)({
    width: "100%",
    border: "1px solid #9EA3AE",
    borderRadius: "4px",
    paddingRight: "14px",
    backgroundColor: "#F6F6F6",
    '& label.MuiInputLabel-root': {
        display: "none"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'unset',
    },
    '& .MuiOutlinedInput-root': {
        width: "100%",
        '& input': {
        width: "100%",
        color: "#545359",
        backgroundColor: "#F6F6F6",
        fontSize: "16px",
        fontWeight:"400",
        padding: "11px 5px 11px 5px",
      },
    '& input::placeholder': {
        color: "#9EA3AE",
        fontSize: "14px",
        fontWeight:"400",
        opacity: 1
    },
    '& fieldset': {
        borderColor: 'unset',
        display: "none"
      },
    '&': {
        padding: 0,
        margin: "5px 0",
        position: "static"
    },
    '& textarea#mui-3': {
        width: "100%",
        height: "auto",
        overflow: "auto",
        padding: "11px 5px 11px 5px",
        border: "1px solid #00A2FD",
        borderRadius: "18px",
        overflowWrap: "break-word",
        backgroundColor: "transparent",
        fontSize: "14px",
        fontWeight:"400",
        color: "#545359",
      },
    '& textarea#mui-3::placeholder': {
        color: "#9EA3AE",
        opacity: "1"
      },
    },
  });

const CustomTextInputField = ({label, name, value, onChangeHandler, onBlurHandler, placeholder, errors, touched, multiline,
   rows, required=false, isPasswordField=false, lableFontSize, lableFontWeight, labelSx,...other}) => {

  const [showPassword, setShowPassword] = useState(false);
    
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <>
    {
      isPasswordField? (
        <>
          <Box mt="5px" mb="10px">
            {
              label && 
              <label htmlFor={label}>
                <Typography fontSize={lableFontSize && lableFontSize} fontWeight={lableFontWeight && lableFontWeight} sx={labelSx && labelSx}>{label}{required && "*"}</Typography>
              </label>
            } 
            <CustomPasswordField
              placeholder={placeholder}
              name={name && name}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              value={value && value}
              onChange={onChangeHandler && onChangeHandler}
              onBlur={onBlurHandler && onBlurHandler}
              {...other}
            />
            {errors && touched ? (
              <Typography
                sx={{ color: "#9c3c3c", mt: "5px", ml: "10px" }}
                variant="caption"
              >
                {errors}
              </Typography>
            ) : null}
          </Box>
        </>
      )
      :
      (
        <>
          <Box mt="5px" mb="10px">
            {
              label && 
              <label htmlFor={label}>
                <Typography fontSize={lableFontSize && lableFontSize} fontWeight={lableFontWeight && lableFontWeight} sx={labelSx && labelSx}>{label}{required && "*"}</Typography>
              </label>
            } 
            <CustomInputField
              placeholder={placeholder}
              name={name && name}
              value={value && value}
              onChange={onChangeHandler && onChangeHandler}
              onBlur={onBlurHandler && onBlurHandler}
              multiline={multiline && multiline}
              rows={rows && rows}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      p="11px 0px 11px 15px"
                    >
                    {/* <Box width="24px" height="24px">
                      <img src="images/attachFilesIcon.svg" alt="attachFilesIcon" width="100%" height="100%"/>
                    </Box> */}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              {...other}
            />
            {errors && touched ? (
              <Typography
                sx={{ color: "#9c3c3c", mt: "5px", ml: "10px" }}
                variant="caption"
              >
                {errors}
              </Typography>
            ) : null}
          </Box>
        </>
      )
    }
      
    </>
  );
};

export default CustomTextInputField;


 





 
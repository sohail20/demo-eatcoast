import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CustomSearchBar from "./CustomSearchBar";
import Box from '@mui/material/Box';
export default function OtherButton() {
  const [isShown, setIsShown] = React.useState(false);

  const onHandleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <Box>
      {isShown ? (
        <CustomSearchBar
          icon={"./images/search-normal.svg"}
          placeholder={"Search your Ingridient"}
          bgColor={"#F6F6F6"}
          color={"#9EA3AE"}
          border={"2px solid #80B3B0"}
          height={"48px"}
        />
      ) : (
        <Box  sx={{display: "flex", justifyContent: "center", width:"100%", }}>
            <Button variant="text" endIcon={<AddIcon />} sx={{textTransform: "capitalize"}} onClick={onHandleClick}>
          Other
        </Button>
        </Box>
      )}
      </Box>
    </>
  );
}

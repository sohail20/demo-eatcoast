import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NoResultMsg from '../NoResultMsg/NoResultMsg'


const SearchInputField = styled(TextField)({
    background: "#F6F6F6",
    "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#e1e1e6",
        borderRadius: "6px",
      },
  });

const paginationSx={
    "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root":
      {
        border: "1px solid #E1E1E6",
        borderRadius: "8px",
        color: "#9EA3AE",
        background: "none",
      },
    "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
      {
        backgroundColor: "#2b817b",
        color: "white",
        borderRadius: "8px",
      },
  }


  const subscriptionTableColumns = [
  { field: "id", headerName: "#", width: 100 },
  {
    field: "idSubs",
    headerName: "Id subs",
    width: 160,
  },
  {
    field: "menu",
    headerName: "Menu",
    width: 230,
  },
  {
    field: "subscriptionType",
    headerName: "Subscription type",
    width: 230,
    renderCell: (params) => {
      const {value} = params
      let chipBgColor = ''
      if(value==="Personal subscription"){
        chipBgColor ='#7B49E5'
      }else if(value==="Multiple subscription"){
        chipBgColor ='#158FAD'
      }else if(value==="Bussines subscription"){
        chipBgColor ='#FF9933'
      }else if(value==="Single order"){
        chipBgColor ='#7ECC49'
      }else if(value==="Fitness subscription"){
        chipBgColor ='#FF8D85'
      }
      return (
        <>
          <Box>
            <Chip label={params.value} variant="contained" sx={{background: chipBgColor,
             borderRadius: '6px', color: '#fff',p:"2px 8px",textAlign:"center"}} />
          </Box>
        </>
      );
    },
  },
  {
    field: "period",
    headerName: "Period",
    width: 230,
    renderCell: (params) => {
      const {value} = params
      let chipBgColor = ''
      if(value==="Monthly"){
        chipBgColor ='#F89082'
      }else if(value==="Weekly"){
        chipBgColor ='#F8C982'
      }

      return (
        <>
          <Box>
            <Chip label={params.value} variant="contained" sx={{background: chipBgColor,
             borderRadius: '6px', color: '#fff',p:"0px 20px",textAlign:"center"}} />
          </Box>
        </>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (params) => {
      return (
        <>
          <Box>
            <Button sx={{color:"#42C677",textTransform:"none"}} variant="text">Detail</Button>
          </Box>
        </>
      );
    },
  },
];


const subscriptionTableRow = [
    {
      id: 1,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Personal subscription",
      period: "Monthly",
    },
    {
      id: 2,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Fitness subscription",
      period: "Monthly",
    },
    {
      id: 3,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Bussines subscription",
      period: "Weekly",
    },
    {
      id: 4,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Multiple subscription",
      period: "Monthly",
    },
    {
      id: 5,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Fitness subscription",
      period: "Weekly",
    },
    {
      id: 6,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Single order",
      period: "Monthly",
    },
    {
      id: 7,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Personal subscription",
      period: "Weekly",
    },
    {
      id: 8,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Fitness subscription",
      period: "Weekly",
    },
    {
      id: 9,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Single order",
      period: "Monthly",
    },
    {
      id: 10,
      idSubs: "ECS - 12345",
      menu: "Mesopotamian cuisine",
      subscriptionType: "Personal subscription",
      period: "Monthly",
    },
  ];

  
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    "& .css-17jjc08-MuiDataGrid-footerContainer": {
      display: "none",
    },
    boxShadow: "none",
    border: "none",
    borderColor: "green",
    color: "#545359",
    "& .MuiDataGrid-cell:focus": {
      outline: "none",
      color: "#1A1824",
      border: "1px solid transparent !important",
    },
    "& .MuiDataGrid-iconButtonContainer": {
      marginLeft: "2px",
      visibility: "visible !important",
      width: "auto !important",
    },
    "& .css-gl260s-MuiDataGrid-columnHeadersInner": {
      color: "#9EA3AE",
    },
  }));


const SubscriptionHistory = () => {

    const [searchVal, setSearchVal] = useState("");

  return (
    <>
        <Box width="100%">
            <Typography
                sx={{
                fontFamily: "Outfit",
                fontSize: { md: "20px", xs: "14px" },
                mb: "30px",
                color: "#1A1824",
                lineHeight: "20px",
                fontWeight: "600",
                mt: "10px",
                }}
            >
                History Subscription
            </Typography>
            <Box
                width="100%"
                border="1px solid #e1e1e6"
                p="10px 20px"
                borderRadius="8px"
                minHeight="60vh"
            >
                <Box width="100%">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Box sx={{my:{xs:"10px",md:"0px"}}}>
                    <SearchInputField
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "32ch",margin:{xs:"8px 0px",md:"8px"} }}
                        size="small"
                        placeholder="Search your dishes"
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility">
                                <SearchIcon sx={{ color: "#9EA3AE" }} />
                            </IconButton>
                            </InputAdornment>
                        ),
                        }}
                    />
                    </Box>
                </Box>
                </Box>
                {!searchVal ? (
                <>
                    <Box sx={{ width: "100%" }}>
                    <StyledDataGrid
                        rows={subscriptionTableRow}
                        columns={subscriptionTableColumns}
                        disableSelectionOnClick
                        autoHeight
                        hideFooterPagination={true}
                    />
                    </Box>
                    <Pagination
                    sx={paginationSx}
                    style={{
                        margin: "20px 0",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                    count={10}
                    />
                </>
                ) : (
                <NoResultMsg searchValueText={`“${searchVal}”`} />
                )}
            </Box>
            </Box>
    </>
  )
}

export default SubscriptionHistory
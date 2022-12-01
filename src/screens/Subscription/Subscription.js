import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { GoSettings } from "react-icons/go";
import NoResultMsg from "./NoResultMsg/NoResultMsg";
import DetailSubscription from "./DetailSubscription/DetailSubscription";
import SubscriptionHistory from "./SubscriptionHistory";

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

// const subscriptionTableColumns = [
//   { field: "id", headerName: "#", width: 100 },
//   {
//     field: "idSubs",
//     headerName: "Id subs",
//     width: 160,
//   },
//   {
//     field: "menu",
//     headerName: "Menu",
//     width: 230,
//   },
//   {
//     field: "date",
//     headerName: "Date",
//     width: 160,
//     renderCell: (params) => {
//       return (
//         <>
//           <Box border="1px solid #D5E6E5" borderRadius="4px" p="5px 10px">
//             {params.value}
//           </Box>
//         </>
//       );
//     },
//   },
//   {
//     field: "subscriptionType",
//     headerName: "Subscription type",
//     width: 230,
//     renderCell: (params) => {
//       const {value} = params
//       let chipBgColor = ''
//       if(value==="Personal subscription"){
//         chipBgColor ='#7B49E5'
//       }else if(value==="Multiple subscription"){
//         chipBgColor ='#158FAD'
//       }else if(value==="Bussines subscription"){
//         chipBgColor ='#FF9933'
//       }else if(value==="Single order"){
//         chipBgColor ='#7ECC49'
//       }else if(value==="Fitness subscription"){
//         chipBgColor ='#FF8D85'
//       }
//       return (
//         <>
//           <Box>
//             <Chip label={params.value} variant="contained" sx={{background: chipBgColor,
//              borderRadius: '6px', color: '#fff'}} />
//           </Box>
//         </>
//       );
//     },
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 160,
//     renderCell: (params) => {
//       const {value} = params
//       let statusBtnBgColor='',statusBtnBorderColor='',statusBtncolor=''
//       if(value==="Paused"){
//         statusBtnBgColor ='#FFF1F1'
//         statusBtnBorderColor='#DD7474'
//         statusBtncolor='#9F2D2D'
//       }else{
//         statusBtnBgColor='#F1FFF7'
//         statusBtnBorderColor='#81D9A5'
//         statusBtncolor='#30A15F'
//       }
//       return (
//         <>
//            <Box  sx={{border: `1px solid ${statusBtnBorderColor}`,bgcolor:statusBtnBgColor ,borderRadius: '4px', color:statusBtncolor,p:"2px 9px"}}>
//              {params.value}
//            </Box>
//         </>
//       );
//     },
//   },
//   {
//     field: "dayLeft",
//     headerName: "Day left",
//     width: 160,
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 130,
//     renderCell: (params) => {
//       return (
//         <>
//           <Box>
//             <Button sx={{color:"#42C677",textTransform:"none"}} onClick={()=> setShowDetailSubscription(true)} variant="text">Detail</Button>
//           </Box>
//         </>
//       );
//     },
//   },
// ];

const subscriptionTableRow = [
  {
    id: 1,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Personal subscription",
    status: "Active",
    dayLeft: "7 days left",
  },
  {
    id: 2,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Multiple subscription",
    status: "Active",
    dayLeft: "7 days left",
  },
  {
    id: 3,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Single order",
    status: "Paused",
    dayLeft: "7 days left",
  },
  {
    id: 4,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Personal subscription",
    status: "Active",
    dayLeft: "7 days left",
  },
  {
    id: 5,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Single order",
    status: "Active",
    dayLeft: "7 days left",
  },
  {
    id: 6,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Bussines subscription",
    status: "Active",
    dayLeft: "7 days left",
  },
  {
    id: 7,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Personal subscription",
    status: "Active",
    dayLeft: "7 days left",
  },
  {
    id: 8,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Fitness subscription",
    status: "Active",
    dayLeft: "7 days left",
  },
  {
    id: 9,
    idSubs: "ECS - 12345",
    menu: "Mesopotamian cuisine",
    date: "09/11 - 09/18",
    subscriptionType: "Single order",
    status: "Active",
    dayLeft: "7 days left",
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Subscription = () => {
  
  const [value, setValue] = React.useState(0);
  const [showDetailSubscription, setShowDetailSubscription] = useState(false);
  const [searchVal, setSearchVal] = React.useState("");
  const [btnActive, setBtnActive] = React.useState(false);
  const [btnPaused, setBtnPaused] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
      field: "date",
      headerName: "Date",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Box border="1px solid #D5E6E5" borderRadius="4px" p="5px 10px">
              {params.value}
            </Box>
          </>
        );
      },
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
               borderRadius: '6px', color: '#fff'}} />
            </Box>
          </>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        const {value} = params
        let statusBtnBgColor='',statusBtnBorderColor='',statusBtncolor=''
        if(value==="Paused"){
          statusBtnBgColor ='#FFF1F1'
          statusBtnBorderColor='#DD7474'
          statusBtncolor='#9F2D2D'
        }else{
          statusBtnBgColor='#F1FFF7'
          statusBtnBorderColor='#81D9A5'
          statusBtncolor='#30A15F'
        }
        return (
          <>
             <Box  sx={{border: `1px solid ${statusBtnBorderColor}`,bgcolor:statusBtnBgColor ,borderRadius: '4px', color:statusBtncolor,p:"2px 9px"}}>
               {params.value}
             </Box>
          </>
        );
      },
    },
    {
      field: "dayLeft",
      headerName: "Day left",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Box>
              <Button sx={{color:"#42C677",textTransform:"none"}} onClick={()=> setShowDetailSubscription(true)} variant="text">Detail</Button>
            </Box>
          </>
        );
      },
    },
  ];


  return (
    <>
      <DashboardLayout>
        <Box width="100%">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                sx: { backgroundColor: "#2B817B" },
              }}
              sx={{ "& button.Mui-selected": { color: "#1A1b24" } }}
            >
              <Tab
                disableRipple={true}
                label="Current"
                {...a11yProps(0)}
                sx={{
                  marginBottom: "-20px",
                  fontFamily: "Outfit",
                  fontSize: "18px",
                  color: "#9EA3AE",
                  lineHeight: "30px",
                  fontWeight: "600",
                  textTransform: "none"
                }}
              />
              <Tab
                disableRipple={true}
                label="History"
                {...a11yProps(1)}
                sx={{
                  marginBottom: "-20px",
                  fontFamily: "Outfit",
                  fontSize: "18px",
                  color: "#9EA3AE",
                  lineHeight: "30px",
                  fontWeight: "600",
                  textTransform: "none"
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
          {
              showDetailSubscription? 
                <DetailSubscription setShowDetailSubscriptionFunc={setShowDetailSubscription}/>
                :
                (
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
                      Current Subscription
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
                          {!searchVal ? (
                            <>
                              <Box sx={{ml:{md:"20px"},my:{xs:"10px",md:"0px"}}}>
                                <Button
                                  variant="outlined"
                                  startIcon={<GoSettings />}
                                  sx={{
                                    color: "#9EA3AE",
                                    mr: "10px",
                                    p:{xs:"5px 12px",md:"5px 15px"},
                                    borderColor: "#E1E1E6",
                                    "&:hover": { borderColor: "#E1E1E6" },
                                  }}
                                >
                                  Filter :
                                </Button>
                                <Button
                                  variant="outlined"
                                  startIcon={<CiPlay1 />}
                                  sx={{
                                    color: btnActive ? "white" : "#559A95",
                                    mr: "10px",
                                    p:{xs:"5px 12px",md:"5px 15px"},
                                    bgcolor: btnActive ? "#2B817B" : "none",
                                    borderColor: "#80B3B0",
                                    "&:hover": {
                                      borderColor: "#80B3B0",
                                      bgcolor: btnActive ? "#2B817B" : "none",
                                    },
                                  }}
                                  onClick={() => setBtnActive(!btnActive)}
                                >
                                  Active
                                </Button>
                                <Button
                                  variant="outlined"
                                  startIcon={<CiPause1 />}
                                  sx={{
                                    color: btnPaused ? "white" : "#559A95",
                                    mr: "10px",
                                    p:{xs:"5px 12px",md:"5px 15px"},
                                    bgcolor: btnPaused ? "#2B817B" : "none",
                                    borderColor: "#80B3B0",
                                    "&:hover": {
                                      borderColor: "#80B3B0",
                                      bgcolor: btnPaused ? "#2B817B" : "none",
                                    },
                                  }}
                                  onClick={() => setBtnPaused(!btnPaused)}
                                >
                                  Paused
                                </Button>
                              </Box>
                            </>
                          ) : (
                            ""
                          )}
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
                )
            }
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SubscriptionHistory />
          </TabPanel>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Subscription;

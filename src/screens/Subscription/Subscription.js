import React, { useEffect, useState, useCallback } from "react";
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
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { GoSettings } from "react-icons/go";
import debounce from "lodash.debounce";

import DashboardLayout from "../DashboardLayout/DashboardLayout";
import NoResultMsg from "./NoResultMsg/NoResultMsg";
import DetailSubscription from "./DetailSubscription/DetailSubscription";
import SubscriptionHistory from "./SubscriptionHistory";
import { useGetAllSubscriptionsQuery } from "api/subscription";
import FullPageLoader from "components/Loader/FullPageLoader";

const SearchInputField = styled(TextField)({
  background: "#F6F6F6",
  "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
  {
    borderColor: "#e1e1e6",
    borderRadius: "6px",
  },
});

const paginationSx = {
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

const Subscription = ({ caterer }) => {

  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [showDetailSubscription, setShowDetailSubscription] = useState(false);
  const [selectedSubs, setSelectedSubs] = useState("")
  const [searchVal, setSearchVal] = useState("");
  const [tableViewLoading, setTableViewLoading] = useState(false)
  const [btnActive, setBtnActive] = useState(false);
  const [btnPaused, setBtnPaused] = useState(false);
  const [AllSubsData, setAllSubsData] = useState([])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data: AllSubs, isLoading } = useGetAllSubscriptionsQuery({
    "catererId": caterer._id,
    "page": page,
    "size": pageSize
  })

  const subscriptionTableColumns = [
    { field: "#", hide: true },
    { field: "_id", headerName: "#", width: 100 },
    {
      field: "subId",
      headerName: "Id subs",
      width: 160,
    },
    {
      field: "menu",
      headerName: "Menu",
      width: 160,
    },
    {
      field: "type",
      headerName: "Subscription type",
      width: 230,
      renderCell: (params) => {
        const { value } = params
        let label = ""
        let chipBgColor = ''
        if (value === "personal") {
          chipBgColor = '#7B49E5'
          label = "Personal subscription"
        } else if (value === "multiple") {
          chipBgColor = '#158FAD'
          label = "Multiple subscription"
        } else if (value === "Bussines subscription") {
          chipBgColor = '#FF9933'
        } else if (value === "Single order") {
          chipBgColor = '#7ECC49'
        } else if (value === "Fitness subscription") {
          chipBgColor = '#FF8D85'
        }
        return (
          <>
            <Box>
              <Chip label={label} variant="contained" sx={{
                background: chipBgColor,
                borderRadius: '6px', color: '#fff'
              }} />
            </Box>
          </>
        );
      },
    },
    {
      field: "period",
      headerName: "Period",
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
              <Button sx={{ color: "#42C677", textTransform: "none" }} onClick={() => {
                setShowDetailSubscription(true)
                setSelectedSubs(params.row._id)
              }} variant="text">Detail</Button>
            </Box>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const tmpData = []
    if (AllSubs && AllSubs.Details && AllSubs.Details.data)
      AllSubs.Details.data.map((item, index) => {
        tmpData.push({ ...item, id: index })
      })
    setAllSubsData(tmpData)
  }, [AllSubs])

  const handleUpdateSearch = useCallback(
    debounce((value) => {
      setTableViewLoading(true)
      const tmpData = []
      if (AllSubs && AllSubs.Details && AllSubs.Details.data) {
        AllSubs.Details.data.filter(item => {
          if (item.subId.includes(value) || value == "") return item
        }).map((item, index) => {
          tmpData.push({ ...item, id: index })
        })
      }
      console.log("tmpData", tmpData)
      setAllSubsData(tmpData);
      setTableViewLoading(false)
    }, 1500),
    []
  );

  const handleChangePage = (event, value) => {
    setPage(value);
  };

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
              showDetailSubscription ?
                <DetailSubscription setShowDetailSubscriptionFunc={setShowDetailSubscription} id={selectedSubs} />
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
                    {isLoading ? <FullPageLoader /> :
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
                            <Box sx={{ my: { xs: "10px", md: "0px" } }}>
                              <SearchInputField
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: "32ch", margin: { xs: "8px 0px", md: "8px" } }}
                                size="small"
                                placeholder="Search your dishes"
                                value={searchVal}
                                onChange={(e) => {
                                  setSearchVal(e.target.value)
                                  handleUpdateSearch(e.target.value)
                                }}
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
                            <>
                              <Box sx={{ ml: { md: "20px" }, my: { xs: "10px", md: "0px" } }}>
                                <Button
                                  variant="outlined"
                                  startIcon={<GoSettings />}
                                  sx={{
                                    color: "#9EA3AE",
                                    mr: "10px",
                                    p: { xs: "5px 12px", md: "5px 15px" },
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
                                    p: { xs: "5px 12px", md: "5px 15px" },
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
                                    p: { xs: "5px 12px", md: "5px 15px" },
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
                          </Box>
                        </Box>
                        {AllSubsData.length === 0 ?
                          <NoResultMsg searchValueText={`“${searchVal}”`} /> :
                          <>
                            <Box sx={{ width: "100%" }}>
                              {tableViewLoading ? <FullPageLoader /> : <StyledDataGrid
                                rows={AllSubsData}
                                columns={subscriptionTableColumns}
                                disableSelectionOnClick
                                autoHeight
                                hideFooterPagination={true}
                              />}
                            </Box>
                          </>}
                        <Pagination
                          sx={paginationSx}
                          style={{
                            margin: "20px 0",
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                          onChange={handleChangePage}
                          count={10}
                        />
                      </Box>}
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

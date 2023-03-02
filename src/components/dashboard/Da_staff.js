import React, { useState, useEffect } from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { DonutChart } from "./DonutChart";
import { SalesChart } from "./SalesChart";
import { CiLocationOn } from "react-icons/ci";
import { Dash_staff_SideSilder } from "./Dash_staff_SideSilder";
import SimpleDataTable from "../DataTable/SimpleDataTable";
import { useGetStaffDashQuery } from "api/dashboard";
import FullPageLoader from "components/Loader/FullPageLoader";
import DataGridTableView from "./Components/DataGridTableView";
import { getDays } from "helper";

function createData(meal, plan, qty) {
  return { meal, plan, qty };
}

function createDataOrder(idOrder, menu, time, qty, subs_type) {
  return { idOrder, menu, time, qty, subs_type };
}

export const Da_staff = ({ info }) => {
  const [allOrders, setAllOrders] = React.useState(false);
  const [mealcourse, setmealCourse] = React.useState(false);
  const [dishes, setDishes] = React.useState(false);
  const [addson, setAddson] = React.useState(false);
  const { data: staffDash, isLoading } = useGetStaffDashQuery({ catererId: info._id })
  const [salesChartData, setSalesChartData] = useState([])

  const handleOrders = () => {
    setAllOrders(true);
    setmealCourse(false);
    setDishes(false);
    setAddson(false);
  };
  const handleMeal = () => {
    setAllOrders(false);
    setmealCourse(true);
    setDishes(false);
    setAddson(false);
  };

  const handleDishes = () => {
    setAllOrders(false);
    setmealCourse(false);
    setDishes(true);
    setAddson(false);
  };

  const handleAddson = () => {
    setAllOrders(false);
    setmealCourse(false);
    setDishes(false);
    setAddson(true);
  };
  const [clicked, setClicked] = React.useState(false);
  const [clicked1, setClicked1] = React.useState(false);
  const [clicked2, setClicked2] = React.useState(false);
  const [clicked3, setClicked3] = React.useState(false);
  const toggleClicked = () => {
    setClicked(true);
    setClicked1(false);
    setClicked2(false);
    setClicked3(false);
  };
  const toggleClicked1 = () => {
    setClicked(false);
    setClicked1(true);
    setClicked2(false);
    setClicked3(false);
  };
  const toggleClicked2 = () => {
    setClicked(false);
    setClicked1(false);
    setClicked2(true);
    setClicked3(false);
  };
  const toggleClicked3 = () => {
    setClicked(false);
    setClicked1(false);
    setClicked2(false);
    setClicked3(true);
  };

  // --------------------------------- start right drawer
  const [isDrawerOpenStaff, setIsDrawerOpenStaff] = React.useState(false);
  const handleDrawer = () => {
    setIsDrawerOpenStaff(true);
  };
  const [isDrawerOpenStaff1, setIsDrawerOpenStaff1] = React.useState(false);
  const [isDrawerOpenStaff2, setIsDrawerOpenStaff2] = React.useState(false);
  const handleSideSliderStaff = () => {
    setIsDrawerOpenStaff1(true);
    setIsDrawerOpenStaff(false);
  };
  const handleSideSliderStaff1 = () => {
    setIsDrawerOpenStaff1(false);
    setIsDrawerOpenStaff(false);
    setIsDrawerOpenStaff2(true);
  };

  //-=-==-=---=======================================
  useEffect(() => {
    if (staffDash && staffDash.data) {
      getSalesData(staffDash.data.salesChart)
    }
  }, [staffDash])

  const getSalesData = (chartData) => {
    const tmpData = []
    const dayInCurrentMonth = getDays(new Date().getFullYear(), new Date().getMonth() + 1)
    for (let i = 0; i < dayInCurrentMonth; i++) {
      if (chartData[i]) {
        tmpData.push(chartData[i].count)
      } else tmpData.push(0)
    }
    
    setSalesChartData(tmpData)
  }


  return isLoading ? <FullPageLoader /> : (
    staffDash && <>
      <Box component={"div"}>
        <Grid
          container
          alignItems={"center"}
          sx={{
            padding: "20px",
            background: "#F0FAF9",
            border: "4px dashed #D5E6E5",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
        >
          <Grid item xs={12} sm={6} justifyContent={{ xs: "center" }}>
            <Box display={"flex"} alignItems={"center"}>
              <Box sx={{ padding: { lg: "20px", md: "18px", sm: "16px" } }}>
                <CiLocationOn
                  size={"13px"}
                  sx={{ border: "1.5px solid #2B817B" }}
                />
              </Box>
              <Typography>
                <span
                  style={{
                    fontFamily: "Outfit",
                    fontSize: { lg: "20px", md: "20px", sm: "18px" },
                    color: "#1A1B24",
                    lineHeight: "26px",
                    fontWeight: "600",
                  }}
                >
                  You have 3 order !!
                </span>{" "}
                <br />
                <span
                  style={{
                    fontFamily: "Outfit",
                    fontSize: { lg: "12px", md: "12px", sm: "10px" },
                    color: "#80B3B0",
                    lineHeight: "20px",
                    fontWeight: "400",
                  }}
                >
                  Touch to see more deatils
                </span>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box sx={{ display: "flex", marginTop: { xs: "10px", sm: "0px" } }}>
              <Button
                size="small"
                onClick={handleDrawer}
                sx={{
                  width: { xs: "150px", md: "160px" },
                  border: "1px solid #80B3B0",
                  background: "#fff",
                  textTransform: "none",
                  color: "#80B3B0",
                  marginRight: "20px",
                  "&:hover": {
                    border: "1px solid #80B3B0",
                    background: "#fff",
                  },
                }}
                variant="outlined"
                disableElevation
              >
                See all detail
              </Button>
              <Button
                sx={{
                  width: { xs: "150px", md: "160px" },
                  border: "1px solid #80B3B0",
                  background: "#2B817B",
                  textTransform: "none",
                  color: "#fff",
                  "&:hover": {
                    border: "1px solid #80B3B0",
                    background: "#2B817B",
                  },
                }}
                size="small"
                variant="contained"
                disableElevation
              >
                Accept all request
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            onClick={() => {
              handleOrders();
              toggleClicked();
            }}
          >
            <DashInfoCard icon={"../../images/allOrder.svg"} title="All Orders" clicked={clicked} count={staffDash.data.allOrder} />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            onClick={() => {
              handleMeal();
              toggleClicked1();
            }}
          >
            <DashInfoCard icon={"../../images/Book.svg"} title="All Meal Courses" clicked={clicked1} count={staffDash.data.countMealCourse} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            onClick={() => {
              handleDishes();
              toggleClicked2();
            }}
          >
            <DashInfoCard icon={"../../images/Bell.svg"} title="All Dishes" clicked={clicked2} count={staffDash.data.dish} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            onClick={() => {
              handleAddson();
              toggleClicked3();
            }}
          >
            <DashInfoCard icon={"../../images/milk.svg"} title="All Add-Ons" clicked={clicked3} count={staffDash.data.countAddOnes} />

          </Grid>
        </Grid>
      </Box>

      <Box>
        {allOrders ? (
          <>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { lg: "18px", xs: "14px" },
                mb: "10px",
                color: "#1A1824",
                lineHeight: "20px",
                fontWeight: "600",
                marginTop: "15px",
              }}
            >
              Subscription list
            </Typography>
            <SimpleDataTable />
          </>
        ) : mealcourse ? (
          <>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { lg: "18px", xs: "14px" },
                mb: "10px",
                color: "#1A1824",
                lineHeight: "20px",
                fontWeight: "600",
                marginTop: "15px",
              }}
            >
              All Meal Courses
            </Typography>
            <div style={{ height: 400, width: "100%" }}>
              <DataGridTableView info={info} type={"mealCourses"} />
            </div>

          </>
        ) : dishes ? (
          <>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { lg: "18px", xs: "14px" },
                mb: "10px",
                color: "#1A1824",
                lineHeight: "20px",
                fontWeight: "600",
                marginTop: "15px",
              }}
            >
              All Dishes
            </Typography>

            <div style={{ height: 400, width: "100%" }}>
              <DataGridTableView info={info} type={"allDishes"} />
              {/* <DataGrid
                sx={{
                  boxShadow: "none",
                  border: "none",
                  borderColor: "green",
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
                }}
                rows={rowsDishes}
                columns={columnsDishes}
                type="allDishes"
                disableColumnMenu
              /> */}
            </div>
          </>
        ) : addson ? (
          <>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: { lg: "18px", xs: "14px" },
                mb: "10px",
                color: "#1A1824",
                lineHeight: "20px",
                fontWeight: "600",
                marginTop: "15px",
              }}
            >
              All Add-Ons
            </Typography>

            <div style={{ height: 400, width: "100%" }}>
              <DataGridTableView info={info} type={"addOnes"} />
            </div>
          </>
        ) : (
          ""
        )}

        <Grid container spacing={1} mt={1}>
          <Grid item xs={12} md={8} lg={8}>
            <Box
              sx={{
                borderRadius: "6px",
                border: "1px solid #E1E1E6",
                height: "100%",
              }}
            >
              <SalesChart salesChartData={salesChartData} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Grid
              item
              xs={12}
              sx={{ borderRadius: "6px", marginBottom: "15px" }}
            >
              <Box sx={{ padding: "5px 20px", borderRadius: "6px" }}>
                <Typography
                  component={"div"}
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: "18px",
                    width: "100%",
                    height: "26px",
                    color: "#1A1B24",
                    lineHeight: "26px",
                    fontWeight: "600",
                  }}
                >
                  Top selling Meal Plan
                </Typography>
                <Box component={"div"}>
                  {staffDash && staffDash.data && staffDash.data.TopSellingMP.length > 0 ? staffDash.data.TopSellingMP.map((item, i) => {
                    return (
                      <Box component={"div"} key={item}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "Outfit",
                              fontSize: "16px",
                              width: "100%",
                              height: "24px",
                              color: "#545359",
                              lineHeight: "24px",
                              fontWeight: "400",
                            }}
                          >
                            {1 + i}.{" "}
                            <span style={{ paddingLeft: "15px" }}>
                              Salmon with chili
                            </span>
                          </Typography>

                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "Outfit",
                              fontSize: "16px",
                              height: "24px",
                              color: "#545359",
                              lineHeight: "24x",
                              fontWeight: "600",
                            }}
                          >
                            00
                          </Typography>
                        </Box>
                      </Box>
                    );
                  }) : <Typography
                    sx={{
                      marginTop: "20px",
                      fontFamily: "Outfit",
                      fontSize: "16px",
                      textAlign: "center",
                      height: "24px",
                      color: "#545359",
                      lineHeight: "24x",
                      fontWeight: "600",
                    }}
                  >
                    Empty Record
                  </Typography>}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ borderRadius: "6px" }}>
              <Box
                component={"div"}
                sx={{
                  marginTop: "10px",
                  width: "100%",
                  height: "202px",
                  border: "1px solid #E1E1E6",
                  height: "100%",
                  borderRadius: "4px",
                  padding: "20px",
                }}
              >
                <Typography
                  component={"div"}
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: "18px",
                    width: "100%",
                    height: "26px",
                    color: "#1A1B24",
                    lineHeight: "26px",
                    fontWeight: "600",
                  }}
                >
                  All Subscription
                </Typography>
                <Box component={"div"}>
                  <DonutChart figure={Object.values(staffDash.data.allSubscriptions)} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Dash_staff_SideSilder
            isDrawerOpenStaff={isDrawerOpenStaff}
            setIsDrawerOpenStaff={setIsDrawerOpenStaff}
            isDrawerOpenStaff1={isDrawerOpenStaff1}
            setIsDrawerOpenStaff1={setIsDrawerOpenStaff1}
            handleSideSliderStaff={handleSideSliderStaff}
            isDrawerOpenStaff2={isDrawerOpenStaff2}
            setIsDrawerOpenStaff2={setIsDrawerOpenStaff2}
            handleSideSliderStaff1={handleSideSliderStaff1}
          />
        </Grid>
      </Box>
    </>
  );
};

const DashInfoCard = ({ title, icon, count, clicked }) => (
  <Box
    component={"div"}
    sx={{
      padding: "15px",
      height: "128px",
      width: "100%",
      background: "#fff",
      border: "1px solid #E1E1E6",
      borderRadius: "6px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: clicked ? "#F0FAF9" : "white",
    }}
  >
    <Box
      component={"div"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"start"}
    >
      <img src={icon} alt="" />
    </Box>
    <Box
      componet={"div"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography
        variant="p"
        sx={{
          fontFamily: "Outfit",
          fontSize: { lg: "18px", md: "17px", sm: "15px" },
          color: "#1A1B24",
          lineHeight: "26px",
          fontWeight: "500",
        }}
      >
        {title}
      </Typography>
      <Box componet={"div"}>
        <Typography
          variant={"p"}
          sx={{
            marginLeft: "10px",
            marginTop: "10px",
            fontFamily: "Outfit",
            fontSize: "14px",
            color: "#E75C62",
            lineHeight: "20px",
            fontWeight: "500",
            backgroundColor: clicked ? "#D5E6E5" : "white",
            borderRadius: clicked ? "2px" : "white",
            height: clicked ? "32px" : "0px",
            width: clicked ? "32px" : "0px",
          }}
        >
          {count}
        </Typography>
      </Box>
    </Box>
  </Box>
)

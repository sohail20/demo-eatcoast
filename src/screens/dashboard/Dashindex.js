import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "./Menu";
import Order from "./Order";
import Subscription from "./Subscription";
import Financials from "./Financials";
import Employee from "./Employee";
import Settings from "./Settings";
import Topperdashboard from "./Topperdashboard";
import { TbLayoutDashboard } from "react-icons/tb";
import DashHome from "./DashHome";
import { IoCubeOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountTree } from "react-icons/md";

const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Dashindex = () => {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isTrue, setIsTrue] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
    setIsTrue(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setIsTrue(true);
  };
  // state of dashboard pages---------
  const [dashboardPage, setdashboardPage] = React.useState(true);
  const [ordPage, setordPage] = React.useState(false);
  const [subsPage, setsubsPage] = React.useState(false);
  const [menuPage, setmenuPage] = React.useState(false);
  const [finanPage, setfinanPage] = React.useState(false);
  const [empPage, setempPage] = React.useState(false);
  const [settPage, setsettPage] = React.useState(false);

  const handleFirstPage = () => {
    setordPage(false);
    setdashboardPage(true);
    setsubsPage(false);
    setmenuPage(false);
    setfinanPage(false);
    setsettPage(false);
    setempPage(false);
  };

  const handleEmpPaage = () => {
    setordPage(true);
    setdashboardPage(false);
    setsubsPage(false);
    setmenuPage(false);
    setfinanPage(false);
    setsettPage(false);
    setempPage(false);
  };
  const handleSubs = () => {
    setordPage(false);
    setdashboardPage(false);
    setsubsPage(true);
    setmenuPage(false);
    setfinanPage(false);
    setsettPage(false);
    setempPage(false);
  };
  const handleMenu = () => {
    setordPage(false);
    setdashboardPage(false);
    setsubsPage(false);
    setmenuPage(true);
    setfinanPage(false);
    setsettPage(false);
    setempPage(false);
  };
  const handleFinan = () => {
    setfinanPage(true);
    setordPage(false);
    setdashboardPage(false);
    setsubsPage(false);
    setmenuPage(false);
    setsettPage(false);
    setempPage(false);
  };
  const handlEmpl = () => {
    setfinanPage(false);
    setordPage(false);
    setdashboardPage(false);
    setsubsPage(false);
    setmenuPage(false);
    setsettPage(false);
    setempPage(true);
  };
  const handleSett = () => {
    setfinanPage(false);
    setordPage(false);
    setdashboardPage(false);
    setsubsPage(false);
    setmenuPage(false);
    setsettPage(true);
    setempPage(false);
  };
  // =----=-=-=-=-=Backdrop state

  const [drop, setDrop] = React.useState(false);
  const handlecloseDrop = () => {
    setDrop(false);
  };
  const handledroptoggle = () => {
    setDrop(!drop);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {(dashboardPage || finanPage || empPage) && (
        <Topperdashboard handleDrawerOpen={handleDrawerOpen} open={open} />
      )}

      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: "flex", justifyContent: "center" }}>
          <img src="../../images/12.png" alt="" />
        </DrawerHeader>
        {isTrue ? (
          <Box sx={{}}>
            <IconButton
              disableRipple={true}
              onClick={handleDrawerOpen}
              sx={{ width: "100%", margin: "0px auto" }}
            >
              <span
                style={{
                  border: "1px  solid #E1E1E6",
                  borderRadius: 5,
                  width: "40px",
                  padding: "5px",
                }}
              >
                {" "}
                <ChevronRightIcon
                  sx={{ color: "#2B817B", marginTop: "4px" }}
                />{" "}
              </span>
            </IconButton>
          </Box>
        ) : (
          <IconButton onClick={handleDrawerClose} disableRipple={true}>
            <span
              style={{
                border: "1px  solid #E1E1E6",
                borderRadius: 5,
                width: "40px",
                padding: "5px",
              }}
            >
              {" "}
              <ChevronLeftIcon sx={{ color: "#2B817B", marginTop: "4px" }} />
            </span>
          </IconButton>
        )}

        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple={true}
              onClick={handleFirstPage}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:focus": {
                  color: "#fff",
                  background: "#2B817B",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <TbLayoutDashboard
                  size={"20px"}
                  sx={{
                    color: "#FFF",
                    "&:focus": {
                      color: "#fff",
                    },
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Dashboard"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple={true}
              onClick={handleEmpPaage}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:focus": {
                  color: "#fff",
                  background: "#2B817B",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <IoCubeOutline size={"20px"} />
              </ListItemIcon>
              <ListItemText primary={"Order"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple={true}
              onClick={handleSubs}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:focus": {
                  color: "#fff",
                  background: "#2B817B",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HiOutlineDocumentText size={"20px"} />
              </ListItemIcon>
              <ListItemText
                primary={"Subscription"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple={true}
              onClick={handleMenu}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:focus": {
                  color: "#fff",
                  background: "#2B817B",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <BsBook size={"20px"} />
              </ListItemIcon>
              <ListItemText primary={"Menu"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple={true}
              onClick={handleFinan}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:focus": {
                  color: "#fff",
                  background: "#2B817B",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MdOutlineAccountTree size={"20px"} />
              </ListItemIcon>
              <ListItemText
                primary={"Financials"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple={true}
              onClick={handlEmpl}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:focus": {
                  color: "#fff",
                  background: "#2B817B",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MdPeople size={"20px"} />
              </ListItemIcon>
              <ListItemText
                primary={"Employee"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple={true}
              onClick={handleSett}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:focus": {
                  color: "#fff",
                  background: "#2B817B",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <IoSettingsOutline size={"20px"} />
              </ListItemIcon>
              <ListItemText
                primary={"Settings"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          {/* ))} */}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {dashboardPage ? (
          <DashHome />
        ) : ordPage ? (
          <Order />
        ) : subsPage ? (
          <Subscription />
        ) : menuPage ? (
          <Menu />
        ) : finanPage ? (
          <Financials />
        ) : empPage ? (
          <Employee />
        ) : settPage ? (
          <Settings />
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

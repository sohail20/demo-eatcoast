import React, { useState } from "react";
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
import Topperdashboard from "../dashboard/Topperdashboard";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountTree } from "react-icons/md";
import { Link } from "react-router-dom";

const TbLayoutDashboardIconStyle = {
  color: "#FFF",
  "&:focus": {
    color: "#fff",
  },
};

const navList = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <TbLayoutDashboard size={"20px"} sx={TbLayoutDashboardIconStyle} />,
  },
  {
    title: "Order",
    link: "/order",
    icon: <IoCubeOutline size={"20px"} />,
  },
  {
    title: "Subscription",
    link: "/subscription",
    icon: <HiOutlineDocumentText size={"20px"} />,
  },
  {
    title: "Menu",
    link: "/menu",
    icon: <BsBook size={"20px"} />,
  },
  {
    title: "Financials",
    link: "/financials",
    icon: <MdOutlineAccountTree size={"20px"} />,
  },
  {
    title: "Employee",
    link: "/employee",
    icon: <MdPeople size={"20px"} />,
  },
  {
    title: "Settings",
    link: "/setting",
    icon: <IoSettingsOutline size={"20px"} />,
  },
];

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
  ...theme.mixins.toolbar,
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

export default function DashboardLayout({
  padding = 1,
  showTopNav = true,
  children,
}) {
  const [open, setOpen] = useState(false);
  const [isTrue, setIsTrue] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
    setIsTrue(false);
  };  

  const handleDrawerClose = () => {
    setOpen(false);
    setIsTrue(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {showTopNav && (
        <Topperdashboard handleDrawerOpen={handleDrawerOpen} open={open} />
      )}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: "flex", justifyContent: "center" }}>
          <img src="../../images/12.png" alt="" />
        </DrawerHeader>

        {isTrue ? (
          <Box>
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
                <ChevronRightIcon sx={{ color: "#2B817B", marginTop: "4px" }} />
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
              <ChevronLeftIcon sx={{ color: "#2B817B", marginTop: "4px" }} />
            </span>
          </IconButton>
        )}

        <List>
          {navList &&
            navList.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <Link
                  to={item?.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item?.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item?.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, mt: showTopNav?"70px":undefined }}>
        <Box p={padding}>{children}</Box>
      </Box>
    </Box>
  );
}

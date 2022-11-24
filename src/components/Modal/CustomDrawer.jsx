import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { FlexBoxContainer } from "../Containers";
import CustomIconButton from "../Button/CustomIconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { H1Typo } from "../Typography";
export default function CustomDrawer({
  topTitle,
  width = "400px",
  handleOnBack,
  handleOnSave,
  children,
}) {
  const [state, setState] = React.useState({ right: true });
  const [anchor, setAnchor] = React.useState("right");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div style={{ width:"400px" }}>
      <React.Fragment>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
          
        >
          <FlexBoxContainer>
            <CustomIconButton
              onClick={handleOnBack}
              icon={<ChevronLeftIcon style={{ color: "#2B817B" }} />}
              label=""
            />
            <H1Typo>{topTitle}</H1Typo>
            <CustomIconButton variant={"contained"} onClick={handleOnSave}>Save</CustomIconButton>
          </FlexBoxContainer>
          {children}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

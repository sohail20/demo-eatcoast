import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { FlexBoxContainer } from "../Containers";
import CustomIconButton from "../Button/CustomIconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          <FlexBoxContainer p={2}>
            <CustomIconButton
              onClick={handleOnBack}
              icon={<ArrowBackIosNewIcon style={{ color: "#2B817B" }} />}
              label=""
            />
            <H1Typo>{topTitle}</H1Typo>
            <CustomIconButton
              variant={"contained"}
              onClick={handleOnSave}
              label="Save"
            />
          </FlexBoxContainer>
          {children}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

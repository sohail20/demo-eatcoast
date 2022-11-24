import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Paper, styled, Button } from "@mui/material";
import CustomizedDrop from "../Inputs/DropDown";

const MyComponent = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  gap: "10px",
  width: "148px",
  height: "24px",
  background: "#7B49E5",
  borderRadius: "6px",
  boxShadow: "none",
  flex: "none",
  order: 0,
  flexGrow: 0,
});

const LabelTypography = styled(Typography)({
  height: "20px",
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#FFFFFF",
});

const HeadingTypo = styled(Typography)({
  textAlign: "start",
  height: "36px",
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: " 0.01em",
  color: "#000000",
});

const SubTitle = styled(Typography)({
  height: "20px",
  textAlign: "start",
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#9EA3AE",
});

const DateTypo = styled(Typography)({
  height: "26px",
  fontFamily: "Outfit",
  textAlign: "start",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "160%",
  letterSpacing: "0.015em",
  color: "#9EA3AE",
  marginTop: "20px",
});

const CustomCard = ({
  data,
  simpleCard,
  hasEditButton = false,
  hasActionButton = true,
  handleChange,
  onEditClick,
}) => {
  return (
    <React.Fragment>
      <CardContent style={{ border: "0px", paddingLeft: "0px" }}>
        <Box style={{ display: "flex" }}>
          <Box>
            <img
              src={data.img}
              alt={"some title"}
              loading="lazy"
              height="100%"
              style={{
                height: "141.4px",
                borderRadius: "4px",
              }}
            />
          </Box>
          <Box style={{ marginLeft: 30, width: "100%" }}>
            <Box
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              {!simpleCard && (
                <>
                  <MyComponent style={{ backgroundColor: data.chipColor }}>
                    <LabelTypography>{data.label}</LabelTypography>
                  </MyComponent>
                  {hasActionButton && (
                    <CustomizedDrop
                      items={[
                        {
                          label: "View Details",
                          icon: "fa fa-eye",
                          id: "view-details",
                        },
                        {
                          label: "Pause Subscription",
                          icon: "fa fa-eye",
                          color: "#6A82CF",
                          id: "pause-subscription",
                        },
                        {
                          label: "Change Address",
                          icon: "fa fa-eye",
                          id: "change-address",
                        },
                        {
                          label: "View Receipt",
                          icon: "fa fa-eye",
                          id: "view-receipt",
                        },
                        {
                          label: "Cancel Subscription",
                          icon: "fa fa-eye",
                          color: "#E75C62",
                          id: "cancel-subscription",
                        },
                        { label: "Help", icon: "fa fa-eye", id: "help" },
                      ]}
                      onClick={(e) => {
                        handleChange(e);
                      }}
                    />
                  )}
                </>
              )}
            </Box>
            <Box
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <HeadingTypo>{data.heading}</HeadingTypo>

              {hasEditButton && (
                <Button
                  variant="outlined"
                  style={{
                    border: "1px solid #2B817B",
                    color: "#2B817B",
                    width: "120px",
                  }}
                  onClick={onEditClick}
                >
                  Edit
                </Button>
              )}
            </Box>
            <SubTitle>
              {!simpleCard && (
                <i class="fa fa-user" style={{ marginRight: "10px" }}></i>
              )}
              {data.address}
            </SubTitle>
            {!simpleCard && (
              <DateTypo>
                <i class="fa fa-calendar" style={{ marginRight: "10px" }}></i>
                {data.date}
              </DateTypo>
            )}
          </Box>
        </Box>
      </CardContent>
    </React.Fragment>
  );
};

export default function OutlinedCard({
  data,
  simpleCard,
  hasEditButton,
  hasActionButton,
  onEditClick,
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ border: "0" }}>
        <CustomCard
          data={data}
          simpleCard={simpleCard}
          hasEditButton={hasEditButton}
          onEditClick={onEditClick}
          hasActionButton={hasActionButton}
        />
      </Card>
    </Box>
  );
}

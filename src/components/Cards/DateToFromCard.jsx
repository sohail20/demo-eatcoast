import { Box } from "@mui/material";
import { BorderContainer, FlexBoxContainer } from "components/Containers";
import { LightTitle } from "components/Typography";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const DateToFromCard = ({ dateFrom, dateTo, time, endTitle }) => {
  return (
    <Box>
      <FlexBoxContainer>
        <LightTitle style={{ display: "flex", alignItems: "center" }}>
          {time ? (
            <>
              <TimerOutlinedIcon
                style={{ fontSize: "15px", marginRight: "10px" }}
              />
              Time :
            </>
          ) : (
            <>
              <CalendarMonthOutlinedIcon
                style={{ fontSize: "15px", marginRight: "10px" }}
              />
              Weekly subscription :
            </>
          )}
        </LightTitle>

        {endTitle && <LightTitle>{endTitle}</LightTitle>}
      </FlexBoxContainer>

      <BorderContainer style={{ height: "32px" }}>
        <FlexBoxContainer>
          <LightTitle>{dateFrom}</LightTitle>
          <LightTitle>-</LightTitle>
          <LightTitle>{dateTo}</LightTitle>
        </FlexBoxContainer>
      </BorderContainer>
    </Box>
  );
};
export default DateToFromCard;

import React from "react";
import {
  Box,
  IconButton,
  styled,
  Typography,
  Stack,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DocumentCard } from "./DocumentCard";
import { Data } from "./Config";
import { CustomLargeBtn } from "./CustomLargeBtn";


export const DocumentEmployeeHeader = ({handleBack}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const Title = styled(Typography)(({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "20px",
      letterSpacing: "0.015em",
      color: "#1A1824",
    }));
  
    const Typo1 = styled(Typography)(({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      color: "#9EA3AE",
      textAlign: "justify",
      lineHeight: "16px",
      width: "596px",
    }));

    const Heading1 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "24px",
        color: "#2B817B",
        textTransform: "capitalize",
      }));

      
  return (
    <div>
        <Box display={"flex"} alignItems="center">
        <Box width="10%">          
            <Box >
            <Button width="20%" onClick={handleBack}>
              <Box sx={{ display: "flex",
              //  alignItems: "center" 
               }}>
                <img
                  src="./images/leftArrow.svg"
                  alt=""
                  width="16px"
                  height="16px"
                />
              </Box>
              <Box pl="14px">
                <Heading1 >Back</Heading1>
              </Box>
            </Button>
            </Box>
        </Box>

          <Box style={{ width: "80%", textAlign: "center",}}>
            <Title
              sx={{
                fontSize: {
                  xl: "36px",
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "16px",
                },
              }}
            >
              Document
            </Title>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection="column" alignItems="center" justifyContent={"center"} mt="40px">
          <Typo1>
          This staff member will handle daily subscriptions and will have access to orders section only. This staff member will handle daily subscriptions and will have access to orders section only
          </Typo1>
          </Box>
    </div>
  )
}

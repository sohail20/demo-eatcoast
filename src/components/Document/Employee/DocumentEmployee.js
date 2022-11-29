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
import { DocumentEmployeeHeader } from "./DocumentEmployeeHeader";

export const DocumentEmployee = () => {


  return (
    <div>
      <Box sx={{ mt: { lg: "0px", md: "0px", sm: "100px", xs: "100px" } }}>
        <Box>
          <DocumentEmployeeHeader />
        </Box>

        <Box
          display={"flex"}
          flexDirection="column"
          alignItems="center"
          justifyContent={"center"}
          mt="40px"
        >
          <Box pt="24px">
            {Data.map((item) => {
              return (
                <>
                  <Box pb="16px">
                    <DocumentCard Data={item} />
                  </Box>
                </>
              );
            })}
          </Box>

          <Box mt="8px">
            <CustomLargeBtn label={"Save Changes"} variantType={"contained"} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { GoSettings } from "react-icons/go";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import NoResult from "./NoResult";
import { FlexBoxContainer } from "components/Containers";
import CustomIconButton from "components/Button/CustomIconButton";
import MenuButton from "components/Inputs/MenuButton";

const SearchInputField = styled(TextField)({
  background: "#F6F6F6",
  "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
    {
      borderColor: "#e1e1e6",
      borderRadius: "6px",
    },
});

const paginationSx = {
  "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root": {
    border: "1px solid #E1E1E6",
    borderRadius: "8px",
    color: "#9EA3AE",
    background: "none",
  },
  "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#2b817b",
    color: "white",
    borderRadius: "8px",
  },
};

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

const CustomDataGrid = ({
  tableRow,
  heading,
  handleOnAddClick,
  handleAction,
  handleMenuAction,
  tableColumns,
}) => {
  const [value, setValue] = React.useState(0);
  const [searchVal, setSearchVal] = React.useState("");

  return (
    <>
      <Box width="100%">
        <FlexBoxContainer style={{ marginBottom: "10px" }}>
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
            {heading}
          </Typography>
          <CustomIconButton
            label="Add Employees"
            variant={"contained"}
            onClick={handleOnAddClick}
          />
        </FlexBoxContainer>

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
                  sx={{
                    m: 1,
                    width: "32ch",
                    margin: { xs: "8px 0px", md: "8px" },
                  }}
                  size="small"
                  placeholder="Search Employees"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
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
            </Box>
          </Box>
          {!searchVal ? (
            <>
              <Box sx={{ width: "100%" }}>
                <StyledDataGrid
                  rows={tableRow}
                  columns={[
                    ...tableColumns,
                    {
                      field: "action",
                      headerName: "Action",
                      width: 230,
                      renderCell: (params) => {
                        return (
                          <>
                            <MenuButton
                              items={[
                                { label: "Edit Account", id: "edit" },
                                { label: "Delete Account", id: "delete" },
                              ]}
                              onClick={(type) =>
                                handleMenuAction(type, params.row.id)
                              }
                            />
                          </>
                        );
                      },
                    },
                  ]}
                  disableSelectionOnClick
                  autoHeight
                  hideFooterPagination={true}
                />
              </Box>
              <Pagination
                sx={paginationSx}
                style={{
                  margin: "20px 0",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                count={10}
              />
            </>
          ) : (
            <NoResult searchValueText={`“${searchVal}”`} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default CustomDataGrid;

import { Chip, Box, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomIconButton from "../Button/CustomIconButton";
import CustomCalendar from "../Calendar/Calendar";
import { BorderContainer, FlexBoxContainer } from "../Containers";
import CustomInput from "../Inputs/CustomInput";
import CustomizedDrop from "components/Inputs/DropDown";
import MenuButton from "components/Inputs/MenuButton";
import CustomDrawer from "../Modal/CustomDrawer";
import CustomizedModal from "../Modal/CustomModal";
import { H1Typo } from "../Typography";
import LightTitle from "../Typography/LightTitle";

const SimpleDataTable = ({ rowsOrder, headerCells, topBar }) => {
  return (
    <>
      {topBar && (
        <Box
          display={"flex"}
          alignItems="center"
          style={{ marginBottom: "20px" }}
        >
          <H1Typo>{topBar.title}</H1Typo>
          <Box style={{ width: "100%", textAlign: "end" }}>
            <CustomIconButton
              variant="contained"
              onClick={topBar.handleOnClick}
              label={topBar.buttonTitle}
            />
          </Box>
        </Box>
      )}
      {
        <FlexBoxContainer>
          <CustomInput placeholder="Search your employee" />
          <CustomizedDrop
            title="sort by"
            label="Name"
            items={[]}
            onClick={(e) => {
              console.log(e);
            }}
            height={24}
          />
        </FlexBoxContainer>
      }
      <TableContainer component="div">
        <Table
          sx={{ minWidth: 650, height: "400px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {headerCells.map((item) => (
                <TableCell>{item.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsOrder.map((row, i) => (
              <TableRow
                key={row.i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell>{row.idOrder}</TableCell>
                <TableCell>{row.menu}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.qty}</TableCell>
                {row.action && (
                  <TableCell>
                    <MenuButton
                      label="action"
                      items={[
                        { label: "Edit Account", id: "edit", icon:"fas fa-heart" },
                        { label: "Delete Account", id: "delete" },
                      ]}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {false && (
        <CustomDrawer topTitle={"Select Date"}>
          <Box p={2} width={"400px"}>
            <LightTitle>Show report for :</LightTitle>
            <Stack spacing={2}>
              <FlexBoxContainer gap={2}>
                <BorderContainer style={{ height: "40px", marginRight: 10 }}>
                  <LightTitle>This week</LightTitle>
                </BorderContainer>
                <BorderContainer style={{ height: "40px", marginRight: 10 }}>
                  <LightTitle>Last 7 days</LightTitle>
                </BorderContainer>
                <BorderContainer style={{ height: "40px", marginRight: 10 }}>
                  <LightTitle>This month</LightTitle>
                </BorderContainer>
              </FlexBoxContainer>

              <CustomCalendar />
            </Stack>
          </Box>
        </CustomDrawer>
      )}

      <CustomizedModal
        isOpened={false}
        handleOnClose={() => {
          console.log("I am clicked");
        }}
        hasTopHeader
        title="Delete Account"
      >
        <Stack spacing={4}>
          <Box textAlign="center">
            <LightTitle>
              Something you delete can not be returned again, are you sure ?
            </LightTitle>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-evenly">
            <CustomIconButton
              label="Delete"
              color={"#E75C62"}
              variant="outlined"
            />
            <CustomIconButton label="Cancel" variant="contained" />
          </Box>
        </Stack>
      </CustomizedModal>
    </>
  );
};

export default SimpleDataTable;

import { Chip, Box, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomCalendar from "../Calendar/Calendar";
import { BorderContainer, FlexBoxContainer } from "../Containers";
import CustomizedDrop from "../Inputs/DropDown";
import CustomDrawer from "../Modal/CustomDrawer";
import LightTitle from "../Typography/LightTitle";

const rowsDishes = [
  {
    id: 1,
    col1: "1",
    col2: "Kabasa",
    col3: "Main Course",
    col4: "Salmon with chilli sauce",
    col5: "1",
  },
  {
    id: 2,
    col1: "2",
    col2: "Bella",
    col3: "Main Course",
    col4: "Salmon with chilli sauce",
    col5: "4",
  },
  {
    id: 3,
    col1: "3",
    col2: "Kabasa",
    col3: "Main Course",
    col4: "Salmon with chilli sauce",
    col5: "7",
  },
  {
    id: 4,
    col1: "4",
    col2: "Kabasa Rice",
    col3: "Main Course",
    col4: "Salmon with chilli sauce",
    col5: "8",
  },
];
const rowsAddson = [
  {
    id: 1,
    col1: "1",
    col2: "Kabasa",
    col3: "Main Course",
    col4: "Salmon with chilli sauce",
    col5: "1",
  },
  {
    id: 2,
    col1: "2",
    col2: "Bella",
    col3: "Main Course",
    col4: "Salmon with chilli sauce",
    col5: "4",
  },
  {
    id: 3,
    col1: "3",
    col2: "Kabasa",
    col3: "Main Course",
    col4: "Salmon with chilli sauce",
    col5: "7",
  },
  {
    id: 4,
    col1: "4",
    col2: "Kabasa Rice",
    col3: "Main Course",
    col4: "Salmon with chilli sauce",
    col5: "8",
  },
];

const columnsAddson = [
  { field: "#", hide: true },
  { field: "col1", headerName: "#", flex: 1 },
  { field: "col2", headerName: "Dishes Name", flex: 1 },
  { field: "col3", headerName: "Meal Courses", flex: 1 },
  { field: "col4", headerName: "Meal Plan", flex: 1 },
  { field: "col5", headerName: "Qty", flex: 1 },
];
const columnsDishes = [
  { field: "#", hide: true },
  { field: "col1", headerName: "#", flex: 1 },
  { field: "col2", headerName: "Dishes Name", flex: 1 },
  { field: "col3", headerName: "Meal Courses", flex: 1 },
  { field: "col4", headerName: "Meal Plan", flex: 1 },
  { field: "col5", headerName: "Qty", flex: 1 },
];

function createData(meal, plan, qty) {
  return { meal, plan, qty };
}

const rows = [
  createData("Main Courses", "Salmon with chilli sauce", "1"),
  createData("Main Courses", "Salmon with chilli sauce", "2"),
  createData("Salad Courses", "Salmon with chilli sauce", "22"),
  createData("Pinkatola Courses", "Salmon with chilli sauce", "99"),
  createData("Main Courses", "Salmon with chilli sauce", "0"),
];
function createDataOrder(idOrder, menu, time, qty, subs_type) {
  return { idOrder, menu, time, qty, subs_type };
}

const rowsOrder = [
  createDataOrder(
    "EC-123",
    "Salmon with chilli sauce",
    "04:00-06:00pm",
    "1",
    "Ps"
  ),
  createDataOrder(
    "EC-193",
    "Salmon with chilli sauce",
    "04:00-06:00pm",
    "1",
    `So`
  ),
  createDataOrder(
    "EC-125",
    "Salmon with chilli sauce",
    "04:00-06:00pm",
    "1",
    `Fs`
  ),
  createDataOrder(
    "EC-122",
    "Salmon with chilli sauce",
    "04:00-06:00pm",
    "1",
    `Bs`
  ),
  createDataOrder(
    "EC-128",
    "Salmon with chilli sauce",
    "04:00-06:00pm",
    "1",
    `So`
  ),
  createDataOrder(
    "EC-122",
    "Salmon with chilli sauce",
    "04:00-06:00pm",
    "1",
    `Ms`
  ),
];

const SimpleDataTable = () => {
  return (
    <>
      <CustomizedDrop
        title="Select date"
        label="17 August 2022"
        items={[
          {
            label: "View Details",
            id: "view-details",
          },
          {
            label: "Pause Subscription",
            color: "#6A82CF",
            id: "pause-subscription",
          },
          {
            label: "Change Address",
            id: "change-address",
          },
          {
            label: "View Receipt",
            id: "view-receipt",
          },
          {
            label: "Cancel Subscription",
            color: "#E75C62",
            id: "cancel-subscription",
          },
          { label: "Help", id: "help" },
        ]}
        onClick={(e) => {
          console.log(e);
        }}
      />
      <TableContainer component="div">
        <Table
          sx={{ minWidth: 650, height: "400px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Id order</TableCell>
              <TableCell>Menu name</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Subscription Type</TableCell>
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
                <TableCell>
                  {row.subs_type === "Ps" ? (
                    <Chip
                      label="Personal Subscription"
                      variant="contained"
                      sx={{
                        background: "#7B49E5",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    />
                  ) : row.subs_type === "Fs" ? (
                    <Chip
                      label="Fitness Subscription"
                      variant="outlined"
                      sx={{
                        background: "#FF8D85",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    />
                  ) : row.subs_type === "Bs" ? (
                    <Chip
                      label="Business Subscription"
                      variant="outlined"
                      sx={{
                        background: "#FF9933",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    />
                  ) : row.subs_type === "Ms" ? (
                    <Chip
                      label="Multiple Subscription"
                      variant="outlined"
                      sx={{
                        background: "#158FAD",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    />
                  ) : row.subs_type === "So" ? (
                    <Chip
                      label="Single order"
                      variant="outlined"
                      sx={{
                        background: "#7ECC49",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </>
  );
};

export default SimpleDataTable;

import { useState } from "react";
import { Grid, Box, Stack } from "@mui/material";
import RequestCard from "components/Cards/RequestCard";
import CustomizedDrop from "components/Inputs/DropDown";
import CloseHeader from "components/Header/CloseHeader";

const requestData = [
  {
    id: "#UEC - 12345",
    name: "Salmon with chili sauce",
    numberOfOrder: "1",
    dateFrom: "Thursday, Sept 02, 2021",
    dateTo: "Monday, Sept 09, 2021",
    timeFrom: "10.00 am",
    timeTo: "01.00 pm",
    price: "200.00",
    subscriptiontype: "Personal Subscription",
  },
  {
    id: "#UEC - 12345",
    name: "Salmon with chili sauce",
    numberOfOrder: "1",
    dateFrom: "Thursday, Sept 02, 2021",
    dateTo: "Monday, Sept 09, 2021",
    timeFrom: "10.00 am",
    timeTo: "01.00 pm",
    price: "200.00",
    subscriptiontype: "Single order",
  },
  {
    id: "#UEC - 12345",
    name: "Salmon with chili sauce",
    numberOfOrder: "1",
    dateFrom: "Thursday, Sept 02, 2021",
    dateTo: "Monday, Sept 09, 2021",
    timeFrom: "10.00 am",
    timeTo: "01.00 pm",
    price: "200.00",
    subscriptiontype: "Single order",
  },
  {
    id: "#UEC - 12345",
    name: "Salmon with chili sauce",
    numberOfOrder: "1",
    dateFrom: "Thursday, Sept 02, 2021",
    dateTo: "Monday, Sept 09, 2021",
    timeFrom: "10.00 am",
    timeTo: "01.00 pm",
    price: "200.00",
    subscriptiontype: "Personal Subscription",
  },
];

const Request = () => {
  const [showDetails, setShowDetail] = useState(0);
  return (
    <>
      <CustomizedDrop
        title="Sort by"
        label="All Request"
        hasCheckbox
        height="24"
        items={{
          "Subscription type": [
            {
              label: "All subscription",
              id: "view-details",
            },
            {
              label: "Personal subscription",
              id: "pause-subscription",
            },
            {
              label: "Multiple subscription",
              id: "change-address",
            },
            {
              label: "Single order",
              id: "view-receipt",
            },
            {
              label: "Event catering",
              id: "cancel-subscription",
            },
            { label: "Fitness subscription", id: "help" },
          ],

          Time: [
            { label: "All Time", id: "help" },
            { label: "10.00 am - 01.00 pm", id: "help" },
            { label: "10.00 am - 01.00 pm", id: "help" },
          ],
        }}
        onClick={(e) => {
          console.log(e);
        }}
      />
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Stack spacing={2}>
            {requestData.map((item, index) => (
              <Grid item xs={12} sm={12} md={12}>
                <RequestCard
                  item={item}
                  handleOnClickDetail={(id) => setShowDetail(index)}
                  handleOnClickAccept={(id) =>
                    console.log("handleOnClickAccept", id)
                  }
                />
              </Grid>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={{ display: showDetails === null ? "none" : undefined }}
        >
          {showDetails !== null && (
            <RequestDetail
              request={requestData[showDetails]}
              handleCloseDetail={() => setShowDetail(null)}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

const RequestDetail = ({ request, handleCloseDetail }) => {
  return (
    <>
      <CloseHeader handleClose={handleCloseDetail} title={"Detail Request"} />
      <RequestCard
        borderLess
        item={request}
        variant="modal"
        handleOnClickDetail={(id) => console.log("handleOnClickDetail", id)}
        handleOnClickAccept={(id) => console.log("handleOnClickAccept", id)}
      />
    </>
  );
};
export default Request;

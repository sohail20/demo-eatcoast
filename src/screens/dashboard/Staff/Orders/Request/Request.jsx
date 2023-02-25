import { useEffect, useState } from "react";
import { Grid, Box, Stack } from "@mui/material";
import RequestCard from "components/Cards/RequestCard";
import CustomizedDrop from "components/Inputs/DropDown";
import CloseHeader from "components/Header/CloseHeader";
import { useGetAllOrderQuery, useGetSingleOrderDetailQuery, useUpdateOrderStatusMutation } from "api/order";
import FullPageLoader from "components/Loader/FullPageLoader";

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
  const { data: RequestedOrder, isLoading } = useGetAllOrderQuery(
    `page=1&size=10&sortBy=asc&status=request`
  );

  const [updateOrderStauts,{isLoading:isUpdating}] = useUpdateOrderStatusMutation()
  const [showDetails, setShowDetail] = useState(null);

  const handleUpdateStatus = (id)=>{
    updateOrderStauts({id,status:"approved"})
  }

  return isLoading || isUpdating ? (
    <FullPageLoader />
  ) : (
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
            {RequestedOrder.data.map((item, index) => (
              <Grid item xs={12} sm={12} md={12}>
                <RequestCard
                  item={item}
                  handleOnClickDetail={(id) => setShowDetail(id)}
                  handleOnClickAccept={(id) =>
                    handleUpdateStatus(id)
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
              request={showDetails}
              handleCloseDetail={() => setShowDetail(null)}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

const RequestDetail = ({ request, handleCloseDetail }) => {
  const { data: singleOrderDetail, isLoading } =
    useGetSingleOrderDetailQuery(request);
  const [subscription, setSubscription] = useState([]);
  const [deliveryData, setDeliveryData] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});

  useEffect(() => {
    if (
      singleOrderDetail &&
      singleOrderDetail.deliveryDetails &&
      singleOrderDetail.deliveryDetails[0]
    ) {
      setSubscription(singleOrderDetail.deliveryDetails[0].subscriptionId);
      setDeliveryData({
        from: singleOrderDetail.deliveryDetails[0].deliveryTime,
        to: singleOrderDetail.deliveryDetails[0].deliveryTime,
      });
      setPaymentDetails(singleOrderDetail.paymentDetails[0]);
    }
  }, []);

  console.log("singleOrderDetail",singleOrderDetail)

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <>
      <CloseHeader handleClose={handleCloseDetail} title={"Detail Request"} />
      {singleOrderDetail && singleOrderDetail.data && (
        <RequestCard
          borderLess
          item={singleOrderDetail.data}
          variant="modal"
          handleOnClickDetail={(id) => console.log("handleOnClickDetail", id)}
          handleOnClickAccept={(id) => console.log("handleOnClickAccept", id)}
        />
      )}
    </>
  );
};
export default Request;

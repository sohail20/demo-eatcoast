import { Box } from "@mui/material";
import SimpleDataTable from "../../../../components/DataTable/SimpleDataTable";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomIconButton from "../../../../components/Button/CustomIconButton";
import { H1Typo } from "../../../../components/Typography";
import WithdrawHistory from "./WithdrawHistory";

const TransactionDetails = ({handleBack}) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        style={{ marginBottom: "20px" }}
      >
        <CustomIconButton
          label="Back"
          onClick={handleBack}
          icon={<ArrowBackIosIcon style={{ color: "#2B817B" }} />}
        />
        <Box style={{ width: "100%", textAlign: "center" }}>
          <H1Typo>Transactions Detail</H1Typo>
        </Box>
      </Box>
      {false ? <SimpleDataTable /> : <WithdrawHistory />}
    </>
  );
};

export default TransactionDetails;

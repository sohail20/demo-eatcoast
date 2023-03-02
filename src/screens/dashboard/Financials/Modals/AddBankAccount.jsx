import { useState } from "react";
import { Stack,Box } from "@mui/material";
import CustomInput from "components/Inputs/CustomInput";
import CustomSelectInput from "components/Inputs/CustomSelectInput";
import CustomizedModal from "components/Modal/CustomModal";
import { useFormik } from "formik";
import CustomIconButton from "components/Button/CustomIconButton";

const AddBankAccount = ({ isOpened, handleOnClose }) => {
  const [bank, setBank] = useState({
    label: "Scotiabank",
    img: "https://1000logos.net/wp-content/uploads/2021/05/Scotiabank-Logo-1974.png",
    id: "scotiabank",
  });

  const formik = useFormik({
    initialValues: {
      accountHolder: "",
      bankName: "",
      accountNumber: "",
      reaccountNumber: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <CustomizedModal
      isOpened={isOpened}
      handleOnClose={handleOnClose}
      hasTopHeader
      title="Add Bank Account"
    >
      <Stack spacing={2}>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            label={"Name of account holder"}
            placeholder="Your name of account holder"
            id="accountHolder"
            name="accountHolder"
            value={formik.values.accountHolder}
            onChange={formik.handleChange}
          />

          <CustomSelectInput
            label={"Bank account"}
            selectedValue={bank}
            items={[
              {
                label: "Scotiabank",
                img: "https://1000logos.net/wp-content/uploads/2021/05/Scotiabank-Logo-1974.png",
                id: "scotiabank",
              },
              {
                label: "CBIC",
                img: "https://logos-download.com/wp-content/uploads/2022/08/CIBC_Bank_USA_Logo.png",
                id: "cbic",
              },
            ]}
            handleSelectMenu={(e) => {
              setBank(e);
            }}
          />

          <CustomInput
            label={"Account number"}
            placeholder="XXXX - XXXX - XXXX"
            id="accountNumber"
            name="accountNumber"
            value={formik.values.accountNumber}
            onChange={formik.handleChange}
          />

          <CustomInput
            label={"Re - enter account number"}
            placeholder="XXXX - XXXX - XXXX"
            id="reaccountNumber"
            name="reaccountNumber"
            value={formik.values.reaccountNumber}
            onChange={formik.handleChange}
          />

          <Box style={{ marginTop: 10 }}>
            <CustomIconButton label="Submit" variant={"contained"} type="submit"/>
          </Box>
        </form>
      </Stack>
    </CustomizedModal>
  );
};

export default AddBankAccount;

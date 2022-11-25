import {useState} from "react"
import { Stack } from "@mui/material";
import CustomInput from "../../../../components/Inputs/CustomInput";
import CustomSelectInput from "../../../../components/Inputs/CustomSelectInput";
import MenuButton1 from "../../../../components/Menu/AddCuisineMenuButtons/MenuButton1";
import CustomizedModal from "../../../../components/Modal/CustomModal";

const AddBankAccount = ({isOpened, handleOnClose}) => {
  const [bank,setBank] = useState({
    label: "Scotiabank",
    img: "https://1000logos.net/wp-content/uploads/2021/05/Scotiabank-Logo-1974.png",
    id: "scotiabank",
  })
  return (
    <CustomizedModal isOpened={isOpened}handleOnClose={handleOnClose} hasTopHeader title="Add Bank Account">
      <Stack spacing={2}>
        <CustomInput
          label={"Name of account holder"}
          placeholder="Your name of account holder"
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
          handleSelectMenu={(e)=>{
            setBank(e)
          }}
        />

        <CustomInput
          label={"Account number"}
          placeholder="XXXX - XXXX - XXXX"
        />

        <CustomInput
          label={"Re - enter account number"}
          placeholder="XXXX - XXXX - XXXX"
        />
      </Stack>
    </CustomizedModal>
  );
};

export default AddBankAccount;

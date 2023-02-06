import {useEffect, useState} from "react"
import { DataGrid } from "@mui/x-data-grid";
import { useGetAddOnesQuery } from "api/dashboard";
import FullPageLoader from "components/Loader/FullPageLoader";

const columnsDishes = [
  { field: "addOnes", headerName: "Add Ones", flex: 1 },
  { field: "MealPlane", headerName: "Meal Plane", flex: 1 },
  { field: "quatity", headerName: "Quatity", flex: 1 }
];
const DataGridTableView = ({info}) => {
    const [addOnesData,setAddOnesData] = useState([])
   const {data:addones,isLoading} = useGetAddOnesQuery({catererId:info.owner})

  useEffect(()=>{
    const tmpData = []
    if(addones && addones.data){
        addones.data.map((item,index)=>{
            tmpData.push({...item,id:index})
        })
    setAddOnesData(tmpData)
    }
  },[addones])

  return isLoading ? <FullPageLoader/> : (
    addones && addones.data && <DataGrid
      sx={{
        boxShadow: "none",
        border: "none",
        borderColor: "green",
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
      }}
      rows={addOnesData}
      columns={columnsDishes}
      disableColumnMenu
    />
  );
};

export default DataGridTableView;

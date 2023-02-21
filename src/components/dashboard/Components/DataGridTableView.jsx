import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetAddOnesQuery } from "api/dashboard";
import FullPageLoader from "components/Loader/FullPageLoader";
import { useGetAllDishesQuery, useGetAllMealCoursesQuery } from "api/dishes";

const columnsAddones = [
  { field: "#", hide: true },
  { field: "addOnes", headerName: "Add Ones", flex: 1 },
  { field: "MealPlane", headerName: "Meal Plane", flex: 1 },
  { field: "quatity", headerName: "Quatity", flex: 1 },
];

const columnsMealCourses = [
  { field: "#", hide: true },
  { field: "mealCourse", headerName: "Meal Course", flex: 1 },
  { field: "MealPlane", headerName: "Meal Plane", flex: 1 },
  { field: "quatity", headerName: "Quatity", flex: 1 },
];

const columnsDishes = [
  { field: "#", hide: true },
  { field: "_id", headerName: "ID", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "mealCourse", headerName: "Meal Course", flex: 1 },
  { field: "image", headerName: "Image", flex: 1 },
  { field: "addOnes", headerName: "Add Ones", flex: 1 },
];

const DataGridTableView = ({ info, type }) => {
  const [addOnesData, setAddOnesData] = useState([]);
  const [allDishesData, setAllDishesData] = useState([]);
  const [mealCoursesData, setMealCoursesData] = useState([]);

  const { data: addones, isLoading } = useGetAddOnesQuery(
    { catererId: info._id },
    { skip: type !== "addOnes" }
  );

  const { data: mealCourses, isLoading: loadingMealCourses} = useGetAllMealCoursesQuery(
    {
      catererId: info._id,
    },
    { skip: type !== "mealCourses" }
  )

  const { data: allDishes, isLoading: loadingDishes } = useGetAllDishesQuery(
    {
      catererId: info._id,
    },
    { skip: type !== "allDishes" }
  );

  useEffect(() => {
    const tmpData = [];
    setAllDishesData([])
    setAddOnesData([])
    console.log(type,addones)
    if (type === "addOnes" && addones && addones.data) {
      addones.data.map((item, index) => {
        tmpData.push({ ...item, id: index });
      });
      console.log("tmpData", tmpData);
      setAddOnesData(tmpData);
    } else if (type === "allDishes" && allDishes && allDishes.data) {
      allDishes.data.map((item, index) => {
        tmpData.push({ ...item, id: index });
      });
      console.log("tmpData", tmpData);
      setAllDishesData(tmpData);
    }else if(type === "mealCourses" && mealCourses && mealCourses.data){
      mealCourses.data.map((item, index) => {
        tmpData.push({ ...item, id: index });
      });
      setMealCoursesData(tmpData)
    }
  }, [addones, allDishes,mealCourses, type]);

  return isLoading || loadingDishes ? (
    <FullPageLoader />
  ) : (
      <DataGrid
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
        rows={
          type === "addOnes"
            ? addOnesData
            : type === "allDishes"
            ? allDishesData
            : type=== "mealCourses"
            ? mealCoursesData
            :[]
        }
        columns={
          type === "addOnes"
            ? columnsAddones
            : type === "allDishes"
            ? columnsDishes
            : type ==="mealCourses"
            ? columnsMealCourses
            : []
        }
        disableColumnMenu
      />
  );
};

export default DataGridTableView;

import { Box } from '@mui/material'
import React from 'react'
import DishesDataGrid from './DishesDataGrid'
import DishesSearchFilter from './DishesSearchFilter'
import { dishesTabsStatus } from './configdishes'



function DishesUnderReview() {
    const subscriptionTableColumns = [
        { field: "id", headerName: "#", width: 100 },
        {
            field: "photo",
            headerName: "Photo",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        {console.log(params)}
                        <Box>
                            <img src={params.row.image} width='50px' alt="" />
                        </Box>
                    </>
                )
            }
        },
        {
            field: "dishesName",
            headerName: "Dish Name",
            width: 230,
        },
        {
            field: "subCuisine",
            headerName: "Sub Cuisine",
            width: 160,
           
        },
        {
            field: "mealPlan",
            headerName: "Meal Plan",
            width: 230,
           
        },
        {
            field: "mealCourse",
            headerName: "Meal Course",
            width: 160,
           
        },
        {
            field: "status",
            headerName: "Status",
            width: 200,
             renderCell: (params) => {
              const { value } = params
              let statusBtnBgColor = '', statusBtnBorderColor = '', statusBtncolor = ''
              if (value === 'Rejected') {
                  statusBtnBgColor = '#E75C62'
                  statusBtnBorderColor = '#E75C62'
                statusBtncolor = '#fff'
              } else {
                  statusBtnBgColor = '#FAA641'
                  statusBtnBorderColor = '#FAA641'
                statusBtncolor = '#fff'
              }
              return (
                <>
                  <Box sx={{ border: `1px solid ${statusBtnBorderColor}`, bgcolor: statusBtnBgColor, borderRadius: '4px', color: statusBtncolor, p: "2px 9px" }}>
                    {params.value}
                  </Box>
                </>
              );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
        },

    ];
    const [pageSize, setPageSize] = React.useState(5);
    return (
        <Box >

            <DishesDataGrid subscriptionTableColumns={subscriptionTableColumns}
                dishesTabs={dishesTabsStatus} pageSize={pageSize} />
 
        </Box>
    )
}
export default DishesUnderReview
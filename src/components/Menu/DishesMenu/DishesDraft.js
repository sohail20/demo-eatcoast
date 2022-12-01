import {Box} from '@mui/material'
import React from 'react'
import DishesDataGrid from './DishesDataGrid'
import DishesSearchFilter from './DishesSearchFilter'
import {dishesTabs} from './configdishes'



export default function DishesDraft() {
    
    const subscriptionTableColumns = [
        { field: "id", headerName: "#", width: 100 },
        {
            field: "photo",
            headerName: "Photo",
            width: 200,
            renderCell: (params) => {
                return (
                    <>

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
            width: 250,
        },
        {
            field: "subCuisine",
            headerName: "Sub Cuisine",
            width: 200,
           
        },
        {
            field: "mealPlan",
            headerName: "Meal Plan",
            width: 250,
           
        },
        {
            field: "mealCourse",
            headerName: "Meal Course",
            width: 200,
            
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
                  dishesTabs={dishesTabs} pageSize={pageSize} />

          </Box>
          )

        }


 

import styled from '@emotion/styled';
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import Subscription from 'screens/dashboard/Subscription'
import { Button, Chip, Pagination } from '@mui/material';
import DishesSearchFilter from './DishesSearchFilter';
import NoResultMsg from '../../../screens/Subscription/NoResultMsg/NoResultMsg'

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    "& .css-17jjc08-MuiDataGrid-footerContainer": {
        display: "none",
    },
    boxShadow: "none",
    border: "none",
    borderColor: "green",
    color: "#545359",
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
    "& .css-gl260s-MuiDataGrid-columnHeadersInner": {
        color: "#9EA3AE",
    },
}));
const paginationSx = {
    marginTop: {xs: '40px'},
    "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root":
    {
        border: "1px solid #E1E1E6",
        borderRadius: "8px",
        color: "#9EA3AE",
        background: "none",
    },
    "& .css-1awya33-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
    {
        backgroundColor: "#2b817b",
        color: "white",
        borderRadius: "8px",
    },
}
export default function DishesDataGrid({
    subscriptionTableColumns, pageSize, dishesTabs}) {
    const [searchVal, setSearchVal] = React.useState('')
    console.log(searchVal)
    return (
        <>

            <Box sx={{ marginLeft: '-30px', marginRight: '-30px' }}>
                <DishesSearchFilter setSearchVal={setSearchVal}  />
                {!searchVal ? (

                    <Box sx={{ padding: '15px', marginTop: '10px', borderRadius: '5px', border: '1px solid #9EA3AE' }}>
                        <Box sx={{ width: '100%', height: '400px' }}>
                            <StyledDataGrid
                                rows={dishesTabs}
                                columns={subscriptionTableColumns}
                                disableSelectionOnClick
                                autoHeight
                                pageSize={pageSize}
                                rowHeight={70}
                                rowsPerPageOptions={[5, 10, 15]}
                                hideFooterPagination={true}
                            />
                        </Box>
                        <Pagination
                            sx={paginationSx}
                            style={{
                                margin: { xs: "30px 0", sm: "30px 0", md: '20px 0px' },
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                            count={10}
                        />
                    </Box>

): (<NoResultMsg searchValueText = {`“${searchVal}”`} />)}

</Box>
        </>
    )
}

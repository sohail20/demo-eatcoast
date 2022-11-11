import React from 'react'
import { Box, Button, Chip, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Revenue } from '../../assets/Svg/Revenue';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DonutChart } from './DonutChart';
import { SalesChart } from './SalesChart';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { CiLocationOn } from 'react-icons/ci'

const rowsDishes = [
    { id: 1, col1: "1", col2: "Kabasa", col3: "Main Course", col4: "Salmon with chilli sauce", col5: '1' },
    { id: 2, col1: "2", col2: "Bella", col3: "Main Course", col4: "Salmon with chilli sauce", col5: '4' },
    { id: 3, col1: "3", col2: "Kabasa", col3: "Main Course", col4: "Salmon with chilli sauce", col5: '7' },
    { id: 4, col1: "4", col2: "Kabasa Rice", col3: "Main Course", col4: "Salmon with chilli sauce", col5: '8' },
   
];
const rowsAddson = [
    { id: 1, col1: "1", col2: "Kabasa", col3: "Main Course", col4: "Salmon with chilli sauce", col5: '1' },
    { id: 2, col1: "2", col2: "Bella", col3: "Main Course", col4: "Salmon with chilli sauce", col5: '4' },
    { id: 3, col1: "3", col2: "Kabasa", col3: "Main Course", col4: "Salmon with chilli sauce", col5: '7' },
    { id: 4, col1: "4", col2: "Kabasa Rice", col3: "Main Course", col4: "Salmon with chilli sauce", col5: '8' },
   
];

const columnsAddson = [
    { field: "#", hide: true },
    { field: "col1", headerName: "#", width: 194 },
    { field: "col2", headerName: "Dishes Name", width: 194 },
    { field: "col3", headerName: "Meal Courses", width: 194 },
    { field: "col4", headerName: "Meal Plan", width: 194 },
    { field: "col5", headerName: "Qty", width: 194 },
];
const columnsDishes = [
    { field: "#", hide: true },
    { field: "col1", headerName: "#", width: 194 },
    { field: "col2", headerName: "Dishes Name", width: 194 },
    { field: "col3", headerName: "Meal Courses", width: 194 },
    { field: "col4", headerName: "Meal Plan", width: 194 },
    { field: "col5", headerName: "Qty", width: 194 },
];

function createData(meal, plan, qty) {
    return { meal, plan, qty };
}

const rows = [
    createData('Main Courses', 'Salmon with chilli sauce', "1"),
    createData('Main Courses', 'Salmon with chilli sauce', "2"),
    createData('Salad Courses', 'Salmon with chilli sauce', "22"),
    createData('Pinkatola Courses', 'Salmon with chilli sauce', "99"),
    createData('Main Courses', 'Salmon with chilli sauce', "0"),

];
function createDataOrder(idOrder, menu, time, qty, subs_type) {
    return { idOrder, menu, time, qty, subs_type };
}

const rowsOrder = [
    createDataOrder('EC-123', 'Salmon with chilli sauce', "04:00-06:00pm", "1", 'Ps'),
    createDataOrder('EC-123', 'Salmon with chilli sauce', "04:00-06:00pm", "1", `So`),
    createDataOrder('EC-123', 'Salmon with chilli sauce', "04:00-06:00pm", "1", `Fs`),
    createDataOrder('EC-123', 'Salmon with chilli sauce', "04:00-06:00pm", "1", `Bs`),
    createDataOrder('EC-123', 'Salmon with chilli sauce', "04:00-06:00pm", "1", `So`),
    createDataOrder('EC-123', 'Salmon with chilli sauce', "04:00-06:00pm", "1", `Ms`),

];

export const Da_staff = () => {
    const [allOrders, setAllOrders] = React.useState(false);
    const [mealcourse, setmealCourse] = React.useState(false);
    const [dishes, setDishes] = React.useState(false);
    const [addson, setAddson] = React.useState(false);
    const handleOrders = () => {
        setAllOrders(true);
        setmealCourse(false);
        setDishes(false);
        setAddson(false);
    }
    const handleMeal = () => {
        setAllOrders(false);
        setmealCourse(true);
        setDishes(false);
        setAddson(false);
    }

    const handleDishes = () => {
        setAllOrders(false);
        setmealCourse(false);
        setDishes(true);
        setAddson(false);
    }

    const handleAddson = () => {
        setAllOrders(false);
        setmealCourse(false);
        setDishes(false);
        setAddson(true);
    }
    const  [clicked, setClicked]=React.useState(false);
    const  [clicked1, setClicked1]=React.useState(false);
    const  [clicked2, setClicked2]=React.useState(false);
    const  [clicked3, setClicked3]=React.useState(false);
    const toggleClicked = () =>{
        setClicked(true);
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);

    } 
    const toggleClicked1 = () =>{
        setClicked(false);
        setClicked1(true);
        setClicked2(false);
        setClicked3(false);

    } 
    const toggleClicked2 = () =>{
        setClicked(false);
        setClicked1(false);
        setClicked2(true);
        setClicked3(false);

    } 
    const toggleClicked3 = () =>{
        setClicked(false);
        setClicked1(false);
        setClicked2(false);
        setClicked3(true);
    } 

    return (
        <>
            <Box component={'div'} >
                <Grid contaainer>
                    <Grid item  height={"116px"} >
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{
                            padding: '20px', background: '#F0FAF9', border: '2px dashed #D5E6E5',
                            borderRadius: '6px'
                        }}>
                            <Box display={'flex'}>
                                <Box sx={{ padding: { lg: '20px', md: '18px', sm: '16px' } }}>
                                    <CiLocationOn size={'10px'} sx={{ border: '1.5px solid #2B817B' }} />
                                </Box>
                                <Typography>
                                    <span style={{
                                        fontFamily: 'Outfit', fontSize: { lg: '20px', md: '20px', sm: '18px' },
                                        color: '#1A1B24', lineHeight: '26px', fontWeight: '600',
                                    }}>You have 3 order !!</span>  <br />
                                    <span style={{
                                        fontFamily: 'Outfit', fontSize: { lg: '12px', md: '12px', sm: '10px' },
                                        color: '#80B3B0', lineHeight: '20px', fontWeight: '400',

                                    }}>Touch to see more deatils</span>
                                </Typography>    

                            </Box>
                            <Box display={'flex'}>
                               <Box >
                                    <Button size='small'
                                    sx={{width: '100px',
                                border: '1px solid #80B3B0' , background: '#fff',textTransform: 'none',
                                        color: '#80B3B0', marginRight: '20px',
                                        '&:hover': { border: '1px solid #80B3B0', background: '#fff'
}
                                    }}
                                    variant="outlined" disableElevation>See all detail</Button>
                               </Box>
                               <Box >
                                    <Button sx={{
                                        width: '140px',
                                        border: '1px solid #80B3B0', background: '#2B817B', textTransform: 'none',
                                        color: '#fff', 
                                        '&:hover': { border: '1px solid #80B3B0', background: '#2B817B' }
                                    }}  size='small'
                                     variant="contained" disableElevation>Accept all request</Button>
                               </Box>

                            </Box>
                            
                            
                            </Box>    
                        
                    </Grid>
                </Grid>
                
                <Grid container spacing={1}>

                    <Grid item xs={12} sm={6} md={4} lg={3} onClick={()=>{handleOrders(); toggleClicked();}} >
                        <Box component={'div'} sx={{
                            padding: '15px', height: '128px', width: '100%', background: '#fff',
                            border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                            flexDirection: 'column', justifyContent: 'space-between', 
                            backgroundColor: clicked ? '#F0FAF9' : 'white' 
                        
                        }} >
                            <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >
                                <Revenue />
                            </Box>
                            <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant='p' sx={{
                                    fontFamily: 'Outfit', fontSize: { lg: '18px', md: '17px', sm: '15px' },
                                    color: '#1A1B24', lineHeight: '26px', fontWeight: '500',
                                
                                }}>
                                    All Orders
                                </Typography>
                                <Box componet={'div'}>
                                    <Typography variant={'p'} sx={{
                                        marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', 
                                        fontSize: '14px',
                                        color: '#E75C62', lineHeight: '20px', fontWeight: '500',
                                        backgroundColor: clicked ? '#D5E6E5' : 'white',
                                        borderRadius: clicked ? '2px' : 'white',
                                        height: clicked ? '32px' : '0px',
                                        width: clicked ? '32px' : '0px',
                                    }}>
                                        25
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3} onClick={()=>{handleMeal(); toggleClicked1();}} >
                        <Box component={'div'} sx={{
                            padding: '15px', height: '128px', width: '100%', background: '#fff',
                            border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                            flexDirection: 'column', justifyContent: 'space-between',
                            backgroundColor: clicked1 ? '#F0FAF9' : 'white' 
                            
                        }} >
                            <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >
                                <Revenue />
                            </Box>
                            <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant='p' sx={{
                                    fontFamily: 'Outfit', fontSize: { lg: '18px', md: '17px', sm: '15px' },
                                    color: '#1A1B24', lineHeight: '26px', fontWeight: '500', 
                                     
                                }}>
                                    All Meal Courses
                                </Typography>
                                <Box componet={'div'}>
                                    <Typography variant={'p'} sx={{
                                        marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                        color: '#E75C62', lineHeight: '20px', fontWeight: '500',
                                        backgroundColor: clicked1 ? '#D5E6E5' : 'white',
                                        borderRadius: clicked1 ? '2px' : 'white',
                                        height: clicked1 ? '32px' : '0px',
                                        width: clicked1 ? '32px' : '0px',
                                    }}>
                                        25
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} onClick={()=>{handleDishes(); toggleClicked2();}} >
                        <Box component={'div'} sx={{
                            padding: '15px', height: '128px', width: '100%', background: '#fff',
                            border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                            flexDirection: 'column', justifyContent: 'space-between',
                            backgroundColor: clicked2 ? '#F0FAF9' : 'white' 
                        }} >
                            <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >
                                <Revenue />
                            </Box>
                            <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant='p' sx={{
                                    fontFamily: 'Outfit', fontSize: { lg: '18px', md: '17px', sm: '15px' },
                                    color: '#1A1B24', lineHeight: '26px', fontWeight: '500'
                                }}>
                                    All Dishes
                                </Typography>
                                <Box componet={'div'}>
                                    <Typography variant={'p'} sx={{
                                        marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                        color: '#E75C62', lineHeight: '20px', fontWeight: '500',
                                        backgroundColor: clicked2 ? '#D5E6E5' : 'white',
                                        borderRadius: clicked2 ? '2px' : 'white',
                                        height: clicked2 ? '32px' : '0px',
                                        width: clicked2 ? '32px' : '0px',
                                    }}>
                                        25
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} onClick={()=>{handleAddson(); toggleClicked3();}} >
                        <Box component={'div'} sx={{
                            padding: '15px', height: '128px', width: '100%', background: '#fff',
                            border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                            flexDirection: 'column', justifyContent: 'space-between',
                            backgroundColor: clicked3 ? '#F0FAF9' : 'white' 
                            
                        }} >
                            <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >
                                <Revenue />
                            </Box>
                            <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant='p' sx={{
                                    fontFamily: 'Outfit', fontSize: { lg: '18px', md: '17px', sm: '15px' },
                                    color: '#1A1B24', lineHeight: '26px', fontWeight: '500'
                                }}>
                                    All Add-Ons
                                </Typography>
                                <Box componet={'div'}>
                                    <Typography variant={'p'} sx={{
                                        marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                        color: '#E75C62', lineHeight: '20px', fontWeight: '500',
                                        backgroundColor: clicked3 ? '#D5E6E5' : 'white',
                                        borderRadius: clicked3 ? '2px' : 'white',
                                        height: clicked3 ? '32px' : '0px',
                                        width: clicked3 ? '32px' : '0px',
                                    }}>
                                        25
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>


                </Grid>
            </Box>

            <Box >
               

                {allOrders ? (
                  <>
                        <Typography sx={{
                            fontFamily: 'Outfit', fontSize: { lg: '18px', xs: '14px' }, mb: '10px',
                            color: '#1A1824', lineHeight: '20px', fontWeight: '600', marginTop: '15px'
                        }}>
                           Subscription list
                        </Typography>
                  <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, height: '400px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >Id order</TableCell>
                                    <TableCell >Menu name</TableCell>
                                    <TableCell >Time</TableCell>
                                    <TableCell >Qty</TableCell>
                                    <TableCell >Subscription Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsOrder.map((row, i) => (
                                    <TableRow
                                        key={row.i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell >{row.idOrder}</TableCell>
                                        <TableCell >{row.menu}</TableCell>
                                        <TableCell >{row.time}</TableCell>
                                        <TableCell >{row.qty}</TableCell>
                                        <TableCell >
                                            {row.subs_type === 'Ps' ? (<Chip label="Personal Subscription" variant="contained" sx={{
                                                background: '#7B49E5',
                                                borderRadius: '6px', color: '#fff'
                                            }} />) : row.subs_type === 'Fs' ? (<Chip label="Fitness Subscription" variant="outlined" sx={{
                                                background: '#FF8D85',
                                                borderRadius: '6px', color: '#fff'
                                            }} />) : row.subs_type === 'Bs' ? (<Chip label="Business Subscription" variant="outlined" sx={{
                                                background: '#FF9933',
                                                borderRadius: '6px', color: '#fff'
                                            }} />) : row.subs_type === 'Ms' ? (<Chip label="Business Subscription" variant="outlined" sx={{
                                                background: '#158FAD',
                                                borderRadius: '6px', color: '#fff'
                                            }} />) : row.subs_type === 'So' ? (<Chip label="Business Subscription" variant="outlined" sx={{
                                                background: '#7ECC49',
                                                borderRadius: '6px', color: '#fff'
                                            }} />) : ''}

                                        </TableCell>
                                    </TableRow>
                              ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </>) : mealcourse ? (
                        <>
                            <Typography sx={{
                                fontFamily: 'Outfit', fontSize: { lg: '18px', xs: '14px' }, mb: '10px',
                                color: '#1A1824', lineHeight: '20px', fontWeight: '600', marginTop: '15px'
                            }}>
                                All Meal Courses
                            </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >Meal Courses</TableCell>
                                    <TableCell >Meal Plans</TableCell>
                                    <TableCell >Qty</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, i) => (
                                    <TableRow
                                        key={row.i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell >{row.meal}</TableCell>
                                        <TableCell >{row.plan}</TableCell>
                                        <TableCell >{row.qty}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>) : dishes ? (
                    <>
                                    <Typography sx={{
                                        fontFamily: 'Outfit', fontSize: { lg: '18px', xs: '14px' }, mb: '10px',
                                        color: '#1A1824', lineHeight: '20px', fontWeight: '600', marginTop: '15px'
                                    }}>
                                        All Dishes
                                    </Typography>

                    <div style={{ height: 300, width: '100%' }}>
                        <DataGrid sx={{
                            boxShadow: 'none',
                            border: 'none',
                            borderColor: '#fff',
                            '& .MuiDataGrid-cell:focus': {
                                color: '#9EA3AE',
                            },
                            '& .MuiDataGrid-iconButtonContainer': {
                                marginLeft: '2px',
                                visibility: 'visible !important',
                                width: 'auto !important',
                            },
                        }} rows={rowsDishes} columns={columnsDishes}
                            disableColumnMenu
                        />
                    </div>
              </>  ) : addson ? (
                  <>
                                    <Typography sx={{
                                        fontFamily: 'Outfit', fontSize: { lg: '18px', xs: '14px' }, mb: '10px',
                                        color: '#1A1824', lineHeight: '20px', fontWeight: '600', marginTop: '15px'
                                    }}>
                                        All Add-Ons
                                    </Typography>


                                <div style={{ height: 300, width: '100%' }}>
                                    <DataGrid sx={{
                                        boxShadow: 'none',
                                        border: 'none',
                                        borderColor: '#fff',
                                        '& .MuiDataGrid-cell:focus': {
                                            color: '#9EA3AE',
                                        },
                                        '& .MuiDataGrid-iconButtonContainer': {
                                            marginLeft: '2px',
                                            visibility: 'visible !important',
                                            width: 'auto !important',
                                        },
                                    }} rows={rowsAddson} columns={columnsAddson}
                                        disableColumnMenu
                                    />
                                </div>

               </> ) : ""}






                <Grid container spacing={1} mt={1}>
                    <Grid item xs={12} sm={8}  >
                        <Box sx={{ borderRadius: '6px', border: '1px solid #E1E1E6', height: '100%' }}>
                            <SalesChart />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>

                        <Grid item xs={12} sx={{ borderRadius: '6px', marginBottom: '15px' }}>
                            <Box sx={{ padding: '5px 20px', borderRadius: '6px', }}>
                                <Typography component={'div'}
                                    sx={{
                                        fontFamily: 'Outfit', fontSize: '18px', width: '100%', height: '26px'
                                        , color: '#1A1B24', lineHeight: '26px', fontWeight: '600'

                                    }}>
                                    Top selling Meal Plan</Typography>
                                <Box component={'div'}  >
                                    {[1, 2, 3, 4].map((item, i) => {
                                        return (
                                            <Box component={'div'}
                                                key={item}>
                                                <Box component={'div'} display={'flex'} justifyContent={'space-between'}
                                                >
                                                    <Typography sx={{
                                                        marginTop: '10px',
                                                        fontFamily: 'Outfit', fontSize: '16px', width: '100%', height: '24px'
                                                        , color: '#545359', lineHeight: '24px', fontWeight: '400'
                                                    }}>
                                                        {1 + i}. <span style={{ paddingLeft: '15px', }}>Salmon with chili</span>
                                                    </Typography>

                                                    <Typography sx={{
                                                        marginTop: '10px',
                                                        fontFamily: 'Outfit', fontSize: '16px', height: '24px'
                                                        , color: '#545359', lineHeight: '24x', fontWeight: '600'
                                                    }}>
                                                        00
                                                    </Typography>
                                                </Box>
                                            </Box>)
                                    })}

                                </Box>


                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{ borderRadius: '6px' }}>
                            <Box component={'div'} sx={{
                                marginTop: "10px",
                                width: '100%', height: '202px', border: '1px solid #E1E1E6', height: '100%',
                                borderRadius: '4px', padding: '20px'
                            }}>
                                <Typography component={'div'}
                                    sx={{
                                        fontFamily: 'Outfit', fontSize: '18px', width: '100%', height: '26px'
                                        , color: '#1A1B24', lineHeight: '26px', fontWeight: '600'
                                    }}>
                                    All Subscription
                                </Typography>
                                <Box component={'div'} >
                                    <DonutChart />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </>


    )
}

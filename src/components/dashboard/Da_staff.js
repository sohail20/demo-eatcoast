import React from 'react'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Revenue } from '../../assets/Svg/Revenue';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData( meal, plan, qty ) {
    return {  meal, plan, qty};
}

const rows = [
    createData('Main Courses', 'Salmon with chilli sauce', "1"),
    createData('Main Courses', 'Salmon with chilli sauce', "2"),
    createData('Salad Courses', 'Salmon with chilli sauce', "22"),
    createData('Pinkatola Courses', 'Salmon with chilli sauce', "99"),
    createData('Main Courses', 'Salmon with chilli sauce', "0"),
 
];

export const Da_staff = () => {
  return (
<>
          <Box component={'div'} >
              <Grid container spacing={1}>
                  {[1,2,3,4].map(item=>{
                      return(
                          <Grid item xs={12} sm={6} md={4} lg={3}  >
                              <Box component={'div'} sx={{
                                  padding: '15px', height: '128px', width: '100%', background: '#fff',
                                  border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                                  flexDirection: 'column', justifyContent: 'space-between'
                              }} >
                                  <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >
                                      <Revenue />
                                  </Box>
                                  <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                      <Typography variant='p' sx={{
                                          fontFamily: 'Outfit', fontSize:{lg: '18px', md: '17px', sm:'15px'},
                                          color: '#1A1B24', lineHeight: '26px', fontWeight: '500'
                                      }}>
                                         All Orders
                                      </Typography>
                                      <Box componet={'div'}>
                                          <Typography variant={'p'} sx={{
                                              marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                              color: '#E75C62', lineHeight: '20px', fontWeight: '500'
                                          }}>
                                              25
                                          </Typography>
                                      </Box>
                                  </Box>
                              </Box>
                          </Grid>        
                      )
                  })}
                
              </Grid>
          </Box>
            <Box >
              <Typography sx={{
                  fontFamily: 'Outfit', fontSize:{ lg: '18px', xs:'14px'},
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
                                      {i+1}
                                  </TableCell>
                                  <TableCell >{row.meal}</TableCell>
                                  <TableCell >{row.plan}</TableCell>
                                  <TableCell >{row.qty}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>


                
                
                </Box>      

</>


    )
}

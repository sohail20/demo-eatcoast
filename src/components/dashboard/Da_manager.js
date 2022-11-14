import React from 'react'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { BiCheckCircle } from 'react-icons/bi'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { Revenue } from '../../assets/Svg/Revenue';
import { ActiveSubsc } from '../../assets/Svg/ActiveSubsc';
import { PaidSubs } from '../../assets/Svg/PaidSubs';
import { SingleOrder } from '../../assets/Svg/SingleOrder';
import { DonutChart } from './DonutChart';
import { SalesChart } from './SalesChart';

export const Da_manager = ({ todayDate }) => {
        const dashRev =[
            {
            name: 'Revenue',
            price: 2000,
            value: 41,
            indi: 'Revenue',
        },
            {
            name: 'Revenue',
            price: 2000,
            value: -41,
                indi: 'BsArrowDown',

        },
            {
            name: 'Revenue',
            price: 2000,
            value: -41,
                indi: 'BsArrowDown',

        },
            {
            name: 'Revenue',
            price: 2000,
            value: 1,
                indi: 'BsArrowDown',

        }
    ]
    const [dmonthly, setDmonthly] = React.useState('');

    const handleChange = (event) => {
        setDmonthly(event.target.value);
    };

    // const handleColor=(color)=>{
        
    // }

    return (
        <Box component={'div'} >
            <Box component={'div'} >
                <Box component={'div'} display={'flex'} justifyContent={'space-between'} 
                >
                    <Box component={'div'}></Box>
                    <Typography variant='div'>
                        {todayDate()}
                    </Typography>
                </Box>
                <Box component={'div'}>
                    <Box component={'div'} display={'flex'} justifyContent={'space-between'}
                    // sx={{ flexDirection: {xs: 'column', }}}
                    >
                        <Box component={'div'} >
                            <span style={{
                                fontFamily: 'Outfit', fontSize: '14px',
                                color: '#9EA3AE', lineHeight: '30px', fontWeight: '400'
                            }}>Showing: </span>
                            <FormControl sx={{ width: '160px', marginTop: '-16px' }}>
                                <InputLabel id="demo-simple-select-label"
                                ></InputLabel>
                                <Select sx={{ boxShadow: 'none', margin: '10px', lineHeight: '35px', height: '40px', padding: '0px' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={dmonthly}
                                    label="Monthly"
                                    onChange={handleChange}
                                >
                                    <MenuItem sx={{ marginRight: '0px', background: '#fff' }} disableRiple={true} value={'monthly'}>Monthly
                                        <BiCheckCircle sx={{ marginTop: '8px', marginLeft: '8px' }} color='#42C677' /> </MenuItem>
                                    <MenuItem disableRiple={true} value={'daily'}>Daily</MenuItem>
                                </Select>
                            </FormControl>


                        </Box>
                        <Box component={'div'}>
                            <Typography sx={{
                                fontFamily: 'Outfit', fontSize: '14px',
                                color: '#42C677', lineHeight: '30px', fontWeight: '400'
                            }}>
                                ( 30 % compared to last month )
                            </Typography>
                        </Box>
                    </Box>

                    {/* section 3 */}
                    <Box component={'div'} >
                        <Grid container spacing={1}>
                            {dashRev.map((item, i) =>{
                                return(
                                    <Grid key={i} item xs={12} sm={6} md={4} lg={3}  >
                                        <Box component={'div'} sx={{
                                            padding: '15px', height: '128px', width: '100%', background: '#fff',
                                            border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                                            flexDirection: 'column', justifyContent: 'space-between'
                                        }} >
                                            <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >
                                                <Revenue />
                                                <Typography sx={{ paddingLeft: '15px' }}>
                                                    Revenue
                                                </Typography>
                                            </Box>
                                            <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography variant='p' sx={{
                                                    fontFamily: 'Outfit', fontSize: '20px',
                                                    color: '#1A1B24', lineHeight: '32px', fontWeight: '600'
                                                }}>
                                                   {item.price}
                                                </Typography>
                                                <Box componet={'div'}>
                                                    {item.value > 0 ? <BsArrowUp color={'#42C677'} /> :
                                                        <BsArrowDown color={'#E75C62'} />}
                                                    { item.value > 0 ? 
                                                    <Typography variant={'p'} sx={{
                                                        marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                                            color: '#42C677', lineHeight: '20px', fontWeight: '500'
                                                    }}>
                                                        {item.value}%
                                                    </Typography>
                                                        : <Typography variant={'p'} sx={{
                                                            marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                                            color: '#E75C62', lineHeight: '20px', fontWeight: '500'
                                                        }}>
                                                            {item.value}%
                                                        </Typography> }
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>    
                                )
                            })}
                           
                            {/* <Grid item xs={12} sm={6} md={4} lg={3}  >
                                <Box component={'div'} sx={{
                                    padding: '15px', height: '128px', width: '100%', background: '#fff',
                                    border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                                    flexDirection: 'column', justifyContent: 'space-between'
                                }} >
                                    <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >

                                        <ActiveSubsc />
                                        <Typography sx={{ paddingLeft: '15px' }}>
                                            Active Subscriptions
                                        </Typography>
                                    </Box>
                                    <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='p' sx={{
                                            fontFamily: 'Outfit', fontSize: '20px',
                                            color: '#1A1B24', lineHeight: '32px', fontWeight: '600'
                                        }}>
                                            137 <span style={{ fontSize: '12px' }}>Subscribers</span>
                                        </Typography>
                                        <Box componet={'div'}>
                                            <BsArrowDown color={'#E75C62'} />
                                            <Typography variant={'p'} sx={{
                                                marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                                color: 'red', lineHeight: '20px', fontWeight: '500'
                                            }}>
                                                41%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}  >
                                <Box component={'div'} sx={{
                                    padding: '15px', height: '128px', width: '100%', background: '#fff',
                                    border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                                    flexDirection: 'column', justifyContent: 'space-between'
                                }} >
                                    <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >
                                        <PaidSubs />
                                        <Typography sx={{ paddingLeft: '15px' }}>
                                            Paused Subscriptions
                                        </Typography>
                                    </Box>
                                    <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='p' sx={{
                                            fontFamily: 'Outfit', fontSize: '20px',
                                            color: '#1A1B24', lineHeight: '32px', fontWeight: '600'
                                        }}>
                                            12<span style={{ fontSize: '12px' }}>Subscribers</span>
                                        </Typography>
                                        <Box componet={'div'}>
                                            <BsArrowDown color={'#E75C62'} />
                                            <Typography variant={'p'} sx={{
                                                marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                                color: '#E75C62', lineHeight: '20px', fontWeight: '500'
                                            }}>
                                                41%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}  >
                                <Box component={'div'} sx={{
                                    padding: '15px', height: '128px', width: '100%', background: '#fff',
                                    border: '1px solid #E1E1E6', borderRadius: '6px', display: 'flex',
                                    flexDirection: 'column', justifyContent: 'space-between'
                                }} >
                                    <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'start'} >
                                        <SingleOrder />
                                        <Typography sx={{ paddingLeft: '15px' }}>
                                            Single Order
                                        </Typography>
                                    </Box>
                                    <Box componet={"div"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant='p' sx={{
                                            fontFamily: 'Outfit', fontSize: '20px',
                                            color: '#1A1B24', lineHeight: '32px', fontWeight: '600'
                                        }}>
                                            $ 2000.00
                                        </Typography>
                                        <Box componet={'div'}>
                                            <BsArrowDown color={'#E75C62'} />
                                            <Typography variant={'p'} sx={{
                                                marginLeft: '10px', marginTop: '10px', fontFamily: 'Outfit', fontSize: '14px',
                                                color: '#E75C62', lineHeight: '20px', fontWeight: '500'
                                            }}>
                                                41%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid> */}

                        </Grid>
                    </Box>

                    {/* section 4 */}
                    <Box>
                        <Grid container spacing={1} mt={1}>
                            <Grid item xs={12} md={8} lg={8} >
                                <Box sx={{ borderRadius: '6px', 
                                border: '1px solid #E1E1E6',
                                height: '100%' }} 
                                >
                                    <SalesChart />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                
                                <Grid item xs={12} sx={{ borderRadius: '6px', marginBottom: '15px'}}>
                            <Box sx={{padding: '5px 20px',borderRadius: '6px',}}>
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
                                <Grid item xs={12} md={12} sx={{ borderRadius: '6px'}}>
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

                    {/* section 4 end*/}
                </Box>
            </Box>
        </Box>
    )
}



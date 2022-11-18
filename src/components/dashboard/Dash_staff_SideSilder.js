import { Box, Button, Chip, Divider, Drawer, Radio, TextareaAutosize, TextField, Typography } from '@mui/material';
import React from 'react';
import { BsCalendar4Week } from 'react-icons/bs';
import { RiTimerLine } from 'react-icons/ri';
import { AiOutlineLeft } from 'react-icons/ai'



export const Dash_staff_SideSilder = ({ isDrawerOpenStaff, setIsDrawerOpenStaff, setIsDrawerOpenStaff1, isDrawerOpenStaff1, handleSideSliderStaff,
    setIsDrawerOpenStaff2, isDrawerOpenStaff2, handleSideSliderStaff1
}) => {
    const staffApi = [
        {
            id: 'UEC-12345',
            button: 'Bussiness subscription',
            title: 'Salmon with chili sauce',
            order: 1,
            time: '10.00 am - 01.00 pm',
            totalPaid: '200.00',
            colr: '#FF9933',
        },
        {
            id: 'UEC-12345',
            button: 'Fitness subscription',
            title: 'Salmon with chili sauce',
            order: 1,
            time: '10.00 am - 01.00 pm',
            totalPaid: '200.00',
            colr: '#FF8D85',
        },
        {
            id: 'UEC-12345',
            button: 'Personal subscription',
            title: 'Salmon with chili sauce',
            order: 1,
            time: '10.00 am - 01.00 pm',
            totalPaid: '200.00',
            colr: '#7B49E5'
        }
        ,
        {
            id: 'UEC-12345',
            button: 'Multiple Subscription',
            title: 'Salmon with chili sauce',
            order: 1,
            time: '10.00 am - 01.00 pm',
            totalPaid: '200.00',
            colr: '#158FAD'
        }
        ,
        {
            id: 'UEC-12345',
            button: 'Single order',
            title: 'Salmon with chili sauce',
            order: 1,
            time: '10.00 am - 01.00 pm',
            totalPaid: '200.00',
            colr: ' #7ECC49'
        }
    ]

    const [selectedValue, setSelectedValue] = React.useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        // console.log({...selectedValue, [event.target.name]: event.target.value });
    };
    console.log({selectedValue})
    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });


    // -=-=-===================
    //                    textarea count function -=-==========-=
    const [wordCount, setwordCount]=React.useState(0)
    const handleCount=(value)=>{
        console.log(value)
            if(value.length <= 80){
                setwordCount(value);
            }
    }
    // console.log({ wordCount+ selectedValue
// });
    return (
        <>
            {/* ------------Drawer 1 */}
            <Drawer anchor='right' open={isDrawerOpenStaff}
                onClose={() => setIsDrawerOpenStaff(false)}>
                <Box p={2} width="352px" textAlign={'center'} sx={{
                    overflowY: 'scroll'
                }}
                    role='presentation'>
                    <Typography variant='h6' component='div' textAlign={'start'} sx={{ color: '#E75C62', cursor: 'pointer' }}
                        onClick={() => setIsDrawerOpenStaff(false)}>
                        X
                    </Typography>
                    <Typography variant='h6' textAlign={'center'} component='div' sx={{ marginTop: '-29px' }} >
                        Request List
                    </Typography>
                    <Box component={'div'} sx={{ marginTop: '20px' }}>
                        {
                            staffApi.map(item => {
                                return (
                                    <>
                                        <Box sx={{
                                            width: '300px', padding: '15px', height: '260px',
                                            background: '#FFFFFF', border: '1px solid #E1E1E6',
                                            borderRadius: '6px', marginBottom: '13px'
                                        }} >

                                            <Box display={'flex'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontSize: '14px', fontFamily: 'Outfit',
                                                    color: '#1A1824', lineHeight: '20px', fontWeight: '500'
                                                }}>
                                                    ID: {item.id}
                                                </Typography>
                                                {/*--------- subscription start  */}


                                                <Chip label={item.button} size='small'
                                                    variant="contained" sx={{
                                                        height: '24px', fontFamily: 'Outfit', width: '168px',
                                                        background: `${item.colr}`,
                                                        padding: '2px ',
                                                        borderRadius: '6px', color: '#fff'
                                                    }} />

                                                {/*--------- subscription start  */}
                                            </Box>
                                            <Box display={'flex'} justifyContent={'space-between'} mt={2}>
                                                <Typography sx={{
                                                    height: '32px', fontFamily: 'Outfit',
                                                    color: '#1A1824',
                                                    fontWeight: '600'
                                                }}>
                                                    {item.title}
                                                </Typography>
                                                <Box>
                                                    <Typography sx={{ fontSize: '20px', fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824' }}>
                                                        {item.order}
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Outfit', fontSize: '12px'
                                                        , color: '#9EA3AE',
                                                        fontWeight: '400', marginTop: '-10px'
                                                    }}>
                                                        order
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box display={'flex'} alignItems={'center'} >
                                                    <BsCalendar4Week color='#9EA3AE' size={11} />
                                                    <Typography sx={{
                                                        fontFamily: 'Outfit', fontSize: '14px', ml: 1
                                                        , color: '#9EA3AE',
                                                        fontWeight: '400',
                                                    }}>
                                                        Weekly subscription:
                                                    </Typography>

                                                </Box>
                                                <Box sx={{
                                                    borderRadius: '4px', border: '1px solid #9EA3AE', width: '100%', height: '29px',
                                                }}>
                                                    testing ...
                                                </Box>
                                            </Box>

                                            <Box mt={1} display={'flex'} justifyContent={'space-between'}>
                                                <Box>
                                                    <Box display={'flex'} alignItems={'center'} >
                                                        <RiTimerLine color='#9EA3AE' size={11} />
                                                        <Typography sx={{
                                                            fontFamily: 'Outfit', fontSize: '14px', ml: 1
                                                            , color: '#9EA3AE',
                                                            fontWeight: '400',
                                                        }}>
                                                            Time:
                                                        </Typography>

                                                    </Box>
                                                    <Box sx={{
                                                        fontFamily: 'Outfit',
                                                        borderRadius: '4px', fontSize: '14px', fontweight: '400',
                                                        border: '1px solid #9EA3AE', width: '130px', height: '29px', lineHeight: '29px'
                                                    }}>
                                                        {item.time}
                                                    </Box>
                                                </Box>

                                                <Box>
                                                    <Typography sx={{
                                                        fontSize: '14px', fontFamily: 'Outfit', fontWeight: '400',
                                                        color: '#9EA3AE', mb: 2
                                                    }}>
                                                        Total paid:
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontFamily: 'Outfit', fontSize: '20px'
                                                        , color: '#1A1B24',
                                                        fontWeight: '600', marginTop: '-10px'
                                                    }}>
                                                        ${item.totalPaid}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box mt={1} display={'flex'} justifyContent={'space-between'}>
                                                <Button onClick={handleSideSliderStaff}
                                                    sx={{
                                                        textTransform: 'none',
                                                        width: '110px',
                                                        height: '25px',
                                                        background: '#FFFFFF',
                                                        border: ' 1px solid #80B3B0', fontWeight: '600',
                                                        borderRadius: '4px',
                                                        color: '#2B817B', fontFamily: 'Outfit', fontSize: '14px',
                                                        '&:hover': { color: '#2B817B', background: '#fff' }
                                                    }}>
                                                    Deatil
                                                </Button>
                                                <Button sx={{
                                                    textTransform: 'none',
                                                    width: '110px',
                                                    height: '25px',
                                                    background: '#2B817B',
                                                    fontWeight: '600',
                                                    borderRadius: '4px',
                                                    color: '#fff', fontFamily: 'Outfit', fontSize: '14px',
                                                    '&:hover': { color: '#fff', background: '#2B817B' }

                                                }}>
                                                    Accept
                                                </Button>
                                            </Box>
                                        </Box>


                                    </>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Drawer>



            {/* ------------Drawer 2 STRAT HERE*/}
            {/* ------------Drawer 2 */}
            {/* ------------Drawer 2 */}
            {/* ------------Drawer 2 */}







            <Drawer anchor='right' open={isDrawerOpenStaff1}
                onClose={() => setIsDrawerOpenStaff1(false)}>
                <Box p={2} width="352px" textAlign={'center'} sx={{overflow: 'hidden'}}
                    role='presentation'>
                    <Typography variant='h6' component='div' textAlign={'start'} sx={{ color: '#1A1824', cursor: 'pointer',
                     fontSize: '16px' }}
                        onClick={() => { setIsDrawerOpenStaff1(false); setIsDrawerOpenStaff(true); }}>
                        <AiOutlineLeft />
                    </Typography>
                    <Typography variant='h6' textAlign={'center'} component='div' sx={{ marginTop: '-29px' }} >
                        Detail Request
                    </Typography>
                    <Box component={'div'} >
                        {/* <Box onClick={handleSideSliderStaff1}> Link 2</Box> */}
                        <Box component={'div'} sx={{ marginTop: '20px' }}>
                            {
                                [
                                    {
                                        id: 'UEC-12345',
                                        button: 'Bussiness subscription',
                                        title: 'Salmon with chili sauce',
                                        order: 1,
                                        time: '10.00 am - 01.00 pm',
                                        totalPaid: '200.00',
                                        colr: '#FF9933',
                                    }].map(item => {
                                    return (
                                        <>
                                            <Box sx={{
                                                width: '335px', padding: '15px', height: '75vh',
                                                borderRadius: '6px', marginBottom: '13px'
                                            }} >

                                                <Box display={'flex'} justifyContent={'space-between'}>
                                                    <Typography sx={{
                                                        fontSize: '14px', fontFamily: 'Outfit',
                                                        color: '#1A1824', lineHeight: '20px', fontWeight: '500'
                                                    }}>
                                                        ID: {item.id}
                                                    </Typography>
                                                    {/*--------- subscription start  */}


                                                    <Chip label={item.button} size='small'
                                                        variant="contained" sx={{ fontSize:'11.9px',
                                                            height: '24px', fontFamily: 'Outfit', width: '140px',
                                                            background: `${item.colr}`,
                                                            padding: '2px ',
                                                            borderRadius: '6px', color: '#fff'
                                                        }} />

                                                    {/*--------- subscription start  */}
                                                </Box>
                                                <Box display={'flex'} justifyContent={'space-between'} mt={2}>
                                                    <Typography sx={{
                                                        height: '32px', fontFamily: 'Outfit',
                                                        color: '#1A1824',
                                                        fontWeight: '600'
                                                    }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Box>
                                                        <Typography sx={{ fontSize: '20px', fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824' }}>
                                                            {item.order}
                                                        </Typography>
                                                        <Typography sx={{
                                                            fontFamily: 'Outfit', fontSize: '12px'
                                                            , color: '#9EA3AE',
                                                            fontWeight: '400', marginTop: '-10px'
                                                        }}>
                                                            Order
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <Box display={'flex'} alignItems={'center'} >
                                                        <BsCalendar4Week color='#9EA3AE' size={11} />
                                                        <Typography sx={{
                                                            fontFamily: 'Outfit', fontSize: '14px', ml: 1
                                                            , color: '#9EA3AE',
                                                            fontWeight: '400',
                                                        }}>
                                                            Weekly subscription:
                                                        </Typography>

                                                    </Box>
                                                    <Box sx={{
                                                        borderRadius: '4px', border: '1px solid #9EA3AE', width: '100%', height: '29px',
                                                    }}>
                                                        testing ...
                                                    </Box>
                                                </Box>

                                                <Box mt={1} display={'flex'} justifyContent={'space-between'}>
                                                    <Box>
                                                        <Box display={'flex'} alignItems={'center'} >
                                                            <RiTimerLine color='#9EA3AE' size={11} />
                                                            <Typography sx={{
                                                                fontFamily: 'Outfit', fontSize: '14px', ml: 1
                                                                , color: '#9EA3AE',
                                                                fontWeight: '400',
                                                            }}>
                                                                Time:
                                                            </Typography>

                                                        </Box>
                                                        <Box sx={{
                                                            fontFamily: 'Outfit',
                                                            borderRadius: '4px', fontSize: '14px', fontweight: '400',
                                                            border: '1px solid #9EA3AE', width: '130px', height: '29px', lineHeight: '29px'
                                                        }}>
                                                            {item.time}
                                                        </Box>
                                                    </Box>

                                                    
                                                </Box>
                                                <Box sx={{ borderRadius: '4px',marginTop: '13px', border: '1px solid #9EA3AE', width: '100%', height: 'auto',}}>
                                                 
                                                    <Box display={'flex'} justifyContent={'space-between'} mt={2} sx={{ marginTop: '8px', marginBottom: '8px', marginRight: '7px', marginLeft: '7px'}}>
                                                        <Box>
                                                            <Typography textAlign={'start'} sx={{ fontSize: '16px',
                                                             fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824' }}>
                                                                Main Course
                                                            </Typography>
                                                            <Typography textAlign={'start'} sx={{
                                                                fontFamily: 'Outfit', fontSize: '14px'
                                                                , color: '#9EA3AE',
                                                                fontWeight: '400', marginTop: '-5px'
                                                            }}>
                                                                All dishes
                                                            </Typography>
                                                        </Box>
                                                        <Typography sx={{
                                                            height: '32px', fontFamily: 'Outfit',
                                                            color: '#1A1824',
                                                            fontWeight: '600'
                                                        }}>
                                                            $ 80.00
                                                        </Typography>
                                                    </Box>
                                                    <Box display={'flex'} justifyContent={'space-between'} mt={2} sx={{ marginTop: '8px', marginBottom: '8px', marginRight: '7px', marginLeft: '7px'}}>
                                                        <Box>

                                                            <Typography textAlign={'start'} sx={{ fontSize: '16px',
                                                             fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824' }}>
                                                                Salad Dishes
                                                            </Typography>
                                                            <Typography textAlign={'start'} sx={{
                                                                fontFamily: 'Outfit', fontSize: '14px'
                                                                , color: '#9EA3AE',
                                                             fontWeight: '400', marginTop: '-5px'
                                                            }}>
                                                                20 dishes are selected
                                                            </Typography>
                                                        </Box>
                                                        <Typography sx={{
                                                            height: '32px', fontFamily: 'Outfit',
                                                            color: '#1A1824',
                                                            fontWeight: '600'
                                                        }}>
                                                            $ 80.00
                                                        </Typography>
                                                    </Box>
                                                       
                                                       </Box>         
                                                <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
                                                <Box >
                                                    <Box display={'flex'}>
                                                        <Typography sx={{
                                                            fontSize: '14px', fontFamily: 'Outfit', fontWeight: '400',
                                                            color: '#9EA3AE', mb: 2
                                                        }}>
                                                            Subtotal<span style={{ marginLeft: '10px' }}>:</span>
                                                        </Typography>
                                                        <Typography sx={{
                                                            fontFamily: 'Outfit', fontSize: '16px'
                                                            , color: ' #9EA3AE',
                                                            fontWeight: '400', marginLeft: '5px'
                                                        }}>
                                                            ${item.totalPaid}
                                                        </Typography>
                                                    </Box>             
                                                    <Box display={'flex'}>
                                                        <Typography sx={{
                                                            fontSize: '14px', fontFamily: 'Outfit', fontWeight: '400',
                                                            color: '#9EA3AE', mb: 2
                                                        }}>
                                                            Tax <span style={{marginLeft: '30px'}}>:</span>
                                                        </Typography>
                                                        <Typography sx={{
                                                            fontFamily: 'Outfit', fontSize: '16px'
                                                            , color: ' #9EA3AE',
                                                            fontWeight: '400', marginLeft: '5px'
                                                        }}>
                                                            ${item.totalPaid}
                                                        </Typography>
                                                    </Box>             
                                                    <Box display={'flex'}>
                                                        <Typography sx={{
                                                            fontSize: '14px', fontFamily: 'Outfit', fontWeight: '400',
                                                            color: '#545359', mb: 2
                                                        }}>
                                                            Total <span style={{marginLeft: '30px'}}>:</span>
                                                        </Typography>
                                                        <Typography sx={{
                                                            fontFamily: 'Outfit', fontSize: '18px'
                                                            , color: ' #1A1824',
                                                            fontWeight: '600', marginLeft: '5px'
                                                        }}>
                                                            ${item.totalPaid}
                                                        </Typography>
                                                    </Box>             
                                                </Box>
                                                </Box>
                                              
                                            </Box>
                                            
                                        </>
                                    )
                                })
                            }
                        </Box>

                        {/* here */}
                        <Divider  />
                        <Box justifyContent={'flex-end'} paddingRight={0} mt={5}>
                            <Button size='small'
                                sx={{
                                    width:  '130px',
                                    border: '1px solid #80B3B0', background: '#fff', textTransform: 'none',
                                    color: '#80B3B0', marginRight: '20px', border: ' 1px solid #80B3B0', fontWeight: '600',
                                    borderRadius: '4px',
                                    color: '#2B817B', fontFamily: 'Outfit', fontSize: '14px', 
                                    '&:hover': { border: '1px solid #80B3B0', background: '#fff'
}
                                }}
                                variant="outlined" disableElevation >Decline request</Button>
                            <Button sx={{
                                width: '130px',
                                border: '1px solid #80B3B0', background: '#2B817B', textTransform: 'none',
                                background: '#2B817B',
                                fontWeight: '600',
                                borderRadius: '4px',
                                color: '#fff', fontFamily: 'Outfit', fontSize: '14px',
                                '&:hover': { color: '#fff', background: '#2B817B' }
                            }} size='small' onClick={handleSideSliderStaff1}
                                variant="contained" disableElevation>Accept request
                            </Button>


                        </Box>

                    </Box>
                       
                </Box>
            </Drawer>


            {/* ------------Drawer 3 */}
            {/* ------------Drawer 3 */}
            {/* ------------Drawer 3 */}
            {/* ------------Drawer 3 */}
            {/* ------------Drawer 3 */}

            <Drawer anchor='right' open={isDrawerOpenStaff2}
                onClose={() => setIsDrawerOpenStaff2(false)}>
                <Box p={2} width="352px" textAlign={'center'} sx={{
                    overflow: 'hidden'
                }}
                    role='presentation'>
                    <Typography variant='h6' component='div' textAlign={'start'} sx={{ color: '#1A1824', cursor: 'pointer', fontSize: '16px' }}
                        onClick={() => { setIsDrawerOpenStaff2(false); setIsDrawerOpenStaff1(true); }}>
                        <AiOutlineLeft />
                    </Typography>
                    <Typography variant='h6' textAlign={'center'} component='div' sx={{ marginTop: '-29px' }} >
                        Cancel Request
                    </Typography>
                    <Box component={'div'} mt={3}>
                        <form>
                        <Box sx={{marginRight: '10px', }}>
                            <Box mb={2}>
                                    <Box sx={{
                                    borderRadius: '6px', border: '1px solid  #E1E1E6', width: '320px', height: '40px', background: '#F6F6F6'
                                    }}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{padding: '0px 15px'}}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit', fontSize: '14px' 
                                        , color: '#1A1B24', 
                                        fontWeight: '400',}}>
                                            Out of an item
                                   </Typography>
                                        <Radio {...controlProps('OutItem')} size="small" sx={{
                                        '&, &.Mui-checked': {
                                            color: '#2B817B',
                                        },
                                    }} />

                                </Box>
                                    </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginRight: '10px'}}>
                            <Box mb={2}>
                                    <Box sx={{
                                    borderRadius: '6px', border: '1px solid  #E1E1E6', width: '320px', height: '40px', background: '#F6F6F6'
                                    }}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{padding: '0px 15px'}}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit', fontSize: '14px' 
                                        , color: '#1A1B24', 
                                        fontWeight: '400',}}>
                                           There is a restaurant problem
                                   </Typography>
                                    <Radio {...controlProps('restuarantProblem')} size="small" sx={{
                                        '&, &.Mui-checked': {
                                            color: '#2B817B',
                                        },
                                    }} />

                                </Box>
                                    </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginRight: '10px'}}>
                            <Box mb={2}>
                                    <Box sx={{
                                    borderRadius: '6px', border: '1px solid  #E1E1E6', width: '320px', height: '40px', background: '#F6F6F6'
                                    }}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{padding: '0px 15px'}}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit', fontSize: '14px' 
                                        , color: '#1A1B24', 
                                        fontWeight: '400',}}>
                                            Restaurant closed
                                   </Typography>
                                    <Radio {...controlProps('restuarantClose')} size="small" sx={{
                                        '&, &.Mui-checked': {
                                            color: '#2B817B',
                                        },
                                    }} />

                                </Box>
                                    </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginRight: '10px'}}>
                            <Box mb={2}>
                                    <Box sx={{
                                    borderRadius: '6px', border: '1px solid  #E1E1E6', width: '320px', height: '40px', background: '#F6F6F6'
                                    }}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{padding: '0px 15px'}}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit', fontSize: '14px' 
                                        , color: '#1A1B24', 
                                        fontWeight: '400',}}>
                                            Unable to fulfill order
                                   </Typography>
                                    <Radio {...controlProps('unabaleFulfil')} size="small" sx={{
                                        '&, &.Mui-checked': {
                                            color: '#2B817B',
                                        },
                                    }} />

                                </Box>
                                    </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginRight: '10px'}}>
                            <Box mb={2}>
                                    <Box sx={{
                                    borderRadius: '6px', border: '1px solid  #E1E1E6', width: '320px', height: '40px', background: '#F6F6F6'
                                    }}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{padding: '0px 15px'}}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit', fontSize: '14px' 
                                        , color: '#1A1B24', 
                                        fontWeight: '400',}}>
                                            The desired order is not available
                                   </Typography>
                                    <Radio {...controlProps('notAvailable')} size="small" sx={{
                                        '&, &.Mui-checked': {
                                            color: '#2B817B',
                                        },
                                    }} />

                                </Box>
                                    </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginRight: '10px'}}>
                            <Box mb={2}>
                                    <Box sx={{
                                    borderRadius: '6px', border: '1px solid  #E1E1E6', width: '320px', height: '40px', background: '#F6F6F6'
                                    }}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{padding: '0px 15px'}}>
                                    <Typography sx={{
                                        fontFamily: 'Outfit', fontSize: '14px' 
                                        , color: '#1A1B24', 
                                        fontWeight: '400',}}>
                                            Restaurant refuse order
                                   </Typography>
                                    <Radio {...controlProps('refuse')} size="small" sx={{
                                        '&, &.Mui-checked': {
                                            color: '#2B817B',
                                        },
                                    }} />

                                </Box>
                                    </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginRight: '10px'}}>
                            <Box mb={2} sx={{ width: '320px'}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >

                                        <label style={{
                                            fontFamily: 'Outfit', fontSize: '14px', fontWeight: '500'
                                            , color: '#1A1B24'}} textAlign={'start'}>Reason Detail</label>
                                       
                                       
                                        <label style={{
                                            fontFamily: 'Outfit', fontSize: '14px'
                                            , color: '#1A1B24'
                                        }} textAlign={'end'}> {wordCount?.length || 0}/80</label>

                                </Box>
                                <br />
                                    <TextField 
                                    onChange={(e)=>handleCount(e.target.value)}
                                        id="outlined-multiline-static"
                                        fullWidth
                                        placeholder='Type your reason'
                                        multiline 
                                        rows={4}
                                        maxLength="80"
                                        // value={value}
                                        sx={{
                                             color: '#1A1B24',
                                            borderRadius: '6px', border: '1px solid  #E1E1E6', 
                                             background: '#F6F6F6', 
                                            '&:hover': {
                                                color: '#E1E1E6' }
                                            


                                        }}
                                     
                                    />

                            </Box>
                        </Box>
                    </form>
                        <Divider />
                        <Box justifyContent={'flex-end'} paddingRight={0} mt={5}>
                            <Button size='small'
                                sx={{
                                    width: '130px',
                                    border: '1px solid #80B3B0', background: '#fff', textTransform: 'none',
                                    color: '#80B3B0', marginRight: '20px', border: ' 1px solid #80B3B0', fontWeight: '600',
                                    borderRadius: '4px',
                                    color: '#2B817B', fontFamily: 'Outfit', fontSize: '14px', 
                                    '&:hover': { border: '1px solid #80B3B0', background: '#fff' }
                                }}
                                variant="outlined" disableElevation >Cancel</Button>
                            <Button sx={{
                                width: '130px',
                                border: '1px solid #80B3B0', background: '#2B817B', textTransform: 'none',
                                background: '#2B817B',
                                fontWeight: '600',
                                borderRadius: '4px',
                                color: '#fff', fontFamily: 'Outfit', fontSize: '14px',
                                '&:hover': { color: '#fff', background: '#2B817B' }
                            }} size='small' onClick={handleSideSliderStaff1}
                                variant="contained" disableElevation>Submit
                            </Button>


                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

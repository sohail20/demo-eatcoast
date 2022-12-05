import React from 'react'
import { Box, Button, FormControl, Grid, InputLabel, ListItemIcon, ListItemText, Menu, MenuItem, Select, Typography } from '@mui/material'
import { BiCheckCircle } from 'react-icons/bi'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { DonutChart } from './DonutChart';
import { SalesChart } from './SalesChart';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export const Da_manager = ({ todayDate }) => {
        const dashRev =[
            {
            name: 'Revenue',
            price: 2000,
            value: 41,
            image: 'images/Revenue.svg',
        },
            {
            name: 'Active Subscription',
            price: 2000,
            value: -41,
                image: 'images/Play.svg',


        },
            {
            name: 'Paused Subscription',
            price: 2000,
            value: -41,
                image: 'images/Pause.svg',


        },
            {
            name: 'Single Order',
            price: 2000,
            value: 1,
                image: 'images/Single.svg',


        }
    ]
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [menu, setMenu] = React.useState('Month')
    const [checkbox, setCheckbox] = React.useState(false);
    const [checkbox2, setCheckbox2] = React.useState(false);
    const [checkbox3, setCheckbox3] = React.useState(false);

    const handleIcon = () => {
        setCheckbox(true);
        setCheckbox2(false);
        setCheckbox3(false);

    }
    const handleIcon2 = () => {
        setCheckbox(false);
        setCheckbox2(true);
        setCheckbox3(false);

    }


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
                    <Typography textAlign={'end'} sx={{
                        fontFamily: 'Outfit', fontSize: '14px',
                        color: '#42C677', lineHeight: '30px', fontWeight: '400'
                    }}>
                        ( 30 % compared to last month )
                    </Typography>
                </Box>
                <Box component={'div'}>
                    <Box mb={1} component={'div'} display={'flex'} justifyContent={'space-between'}
                    // sx={{ flexDirection: {xs: 'column', }}}
                    >
                        <Box component={'div'} >
                            <span style={{
                                fontFamily: 'Outfit', fontSize: '14px',
                                color: '#9EA3AE', lineHeight: '30px', fontWeight: '400'
                            }}>Showing: </span>
                            
                            <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon sx={{ fill: '#2B817B ' }} />}
                                sx={{
                                    color: "#545359",
                                    marginLeft: '10px',
                                    textTransform: "capitalize",
                                    border: '1px solid #E1E1E6',
                                    width: '76px',
                                    borderRadius: '6px',
                                    fontSize: {
                                        xl: "14px",
                                        lg: "14px",
                                        md: "13px",
                                        sm: "12px",
                                        xs: "12px",
                                    },
                                    fontWeight: "500",
                                    pl: "0px",
                                    width: '100px'
                                }}

                            >
                                {menu}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                open={open}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                                sx={{
                                    border: "1px solid #E1E1E6",
                                    borderRadius: "6px",
                                }}
                            >
                                <MenuItem
                                    sx={{
                                        color: "#9EA3AE",
                                        width: "120px",
                                        pt: "0px",
                                        pb: "0px",
                                        fontSize: "12px",
                                        fontWeight: "400",
                                    }}
                                    onClick={(e) => {
                                        setMenu('Name');
                                        handleClose(); handleIcon();
                                    }}
                                >
                                    <ListItemText primary={'Month'}
                                        primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                                    <ListItemIcon>
                                        {checkbox ? (
                                            <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                        ) : ''}
                                    </ListItemIcon>

                                </MenuItem>

                                <MenuItem
                                    sx={{
                                        color: "#9EA3AE",
                                        width: "120px",
                                        pt: "0px",
                                        pb: "0px",
                                        fontSize: "12px",
                                        fontWeight: "400",
                                    }}
                                    onClick={(e) => {
                                        setMenu('Daily');
                                        handleClose(); handleIcon2();
                                    }}
                                >
                                    <ListItemText primary={'Daily'}
                                        primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                                    <ListItemIcon>
                                        {checkbox2 ? (
                                            <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                        ) : ''}
                                    </ListItemIcon>

                                </MenuItem>
                            </Menu>

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
                                                <img src={item.image} alt="" />
                                                <Typography sx={{ paddingLeft: '15px' }}>
                                                   {item.name}
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



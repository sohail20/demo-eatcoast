import styled from '@emotion/styled';
import { Box, Button, Drawer, IconButton, InputAdornment, Select, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addNutrional } from './configdishes'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AspectRatioSharp } from '@mui/icons-material';


//-=========== onClick addIngredieent fun start
function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].value.id === obj.id) {
            console.log("inside true")
            return true;
        }
    }
    return false;
}
//-=========== onClick addIngredieent fun end


export default function DishMenuSlider1({ isDrawerOpenStaff1, setIsDrawerOpenStaff1 }) {
    const Typo2 = styled(Typography)(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "20px",
        color: '#1A1824'
    }));
// console.log(addNutrional)
    const [searchQuerry, setSearch] = React.useState("")
    const [searched, setSearched] = React.useState([])
   
    const [ingredientonFly, setingredientonFly] = useState([]);
    const handleSearchevent = (value) => {

        let temArray = [];
        temArray.push({ value });
        if (!containsObject(value, ingredientonFly)) {
            setingredientonFly([...ingredientonFly, ...temArray]);
            
        }
        
    }
    const handleCloseProps = (param) => {
        let deleted = ingredientonFly.filter(item => item.value.id !== param.value.id);
        setingredientonFly([...deleted]);
    }
 
    const [itemValue, setItemValue]=useState([])
    useEffect(() => {
        if (searchQuerry) {

            setSearched(
                addNutrional.filter((item) => {
                    return Object.values(item).join('').toLowerCase().includes(searchQuerry.toLowerCase())
                })
            )
        }
    }, [itemValue, searchQuerry])

    console.log(ingredientonFly)
    console.log("---here",itemValue);
    return (
        <>
            <Drawer anchor='right' open={isDrawerOpenStaff1}
            >
                <Box p={2} width="452px" textAlign={'center'} role='presentation'>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='h6' component='div' textAlign={'start'} sx={{ color: '#E75C62', cursor: 'pointer' }}
                            onClick={() => setIsDrawerOpenStaff1(false)}>
                            X
                        </Typography>
                        <Typography variant='h6' component='div'  >
                            Add Nutritional Info
                        </Typography>
                        <Button
                            sx={{
                                textTransform: 'none',
                                width: '80px',
                                height: '40px',
                                background: '#2B817B',
                                fontWeight: '600',
                                borderRadius: '4px',
                                color: '#fff', fontFamily: 'Outfit', fontSize: '14px',
                                '&:hover': { color: '#fff', background: '#2B817B' }
                            }}>
                            Save
                        </Button>
                    </Box>
                    <Box component={'div'} sx={{ marginTop: '20px' }}>
                        <Box sx={{
                            color: "#9EA3AE",
                            width: "120px",
                            pt: "0px",
                            pb: "0px",
                            fontSize: "12px",
                            fontWeight: "400",
                        }}>
                            {ingredientonFly.map((item, index )=> {
                                return (
                                    <Box component='div' width={'430px'}
                                        sx={{ border: '1px solid #E1E1E6', marginleft: '10px', marginRight: '10px', borderRadius: '6px', background: '#FFFFFF', mb: 1 }}
                                        key={item.value.id}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Box display={'flex'} alignItems={'center'}>
                                                <img src={item.value.image} width={'40px'} alt="" />
                                                <Typo2>{item.value.title}</Typo2>
                                            </Box>
                                            <Box display={'flex'} alignItems={'center'}>

                                                <Box>
                                                    <Typography sx={{
                                                        border: '1px sloid #E1E1E6',
                                                        width: '60px', height: '40px', padding: '5px 12px'
                                                        , background: '#F6F6F6'
                                                    }}>{itemValue}</Typography>
                                                </Box>
                                                <Box style={{ padding: "5px" }}>
                                                    <Select
                                                        sx={{
                                                            height: '40px',
                                                            '& .MuiSelect-select': {
                                                                color: '#2B817B'
                                                            },
                                                            ".MuiOutlinedInput-notchedOutline": {
                                                                border: "none !important"
                                                            }, '& .MuiSelect-icon': {
                                                                fill: '#2B817B'
                                                            }
                                                        }}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={item.value.qty}
                                                        
                                                        onChange={(w) => {
                                                            let ingreVal=[];
                                                            const tempArray = ingredientonFly
                                                            tempArray[index].qty = w.target.value
                                                            let temItemValue = tempArray[0].qty
                                                            ingreVal.push(temItemValue);
                                                            setItemValue([...itemValue, ...ingreVal]);
                                                        }}
                                                    >
                                                        <MenuItem  value={11}>
                                                            11 Pcs</MenuItem>
                                                        <MenuItem  value={5}>5 Pcs</MenuItem>
                                                        <MenuItem  value={300}>300 Gr</MenuItem>
                                                        <MenuItem  value={50}>50 Gr</MenuItem>
                                                        <MenuItem  value={300}>%</MenuItem>
                                                    </Select>
                                                </Box>
                                                <Box>
                                                    <Typography onClick={() => handleCloseProps(item)} 
                                                    sx={{ color: '#E75C62', padding: '5px', cursor: 'pointer' }}>
                                                        X</Typography>

                                                </Box>
                                            </Box>

                                        </Box>
                                    </Box>


                                )
                            })}

                        </Box>
                        <Typography textAlign='start'
                            sx={{
                                fontWeight: '500',
                                color: '#1A1824', fontFamily: 'Outfit', fontSize: '14px',
                            }}
                        >Search </Typography>

                        <TextField
                            onChange={(e) => setSearch(e.target.value)}
                            id="outlined-static"
                            fullWidth
                            placeholder='Search your ingredient'
                            sx={{
                                color: '#1A1B24',
                                borderRadius: '6px', border: '1px solid  #E1E1E6',
                                background: '#F6F6F6',
                                '&:hover': {
                                    color: '#80B3B0'
                                },
                                ".MuiOutlinedInput-notchedOutline": {
                                    border: "2px solid #80B3B0 !important",
                                    outline: 'none'
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <img src='/images/search-normal.svg' alt="imgag" sx={{ background: '#F6F6F6' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {/* start from  here for search value */}

                        {searchQuerry.length > 0 && (
                            searched.map(search => {
                                return (
                                    <MenuItem
                                        sx={{ '&:hover': { background: 'none' } }}
                                        onClick={() => handleSearchevent(search)} key={search.id}>
                                        <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                                            <Box display={'flex'} alignItems={'center'}>
                                                <img src={search.image} width={'40px'} alt="" />
                                                <Typo2>{search.title}</Typo2>
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    border: '1px sloid #E1E1E6',
                                                    width: '60px', height: '40px', padding: '5px 12px'
                                                    , background: '#F6F6F6'
                                                }}>99</Typography>
                                            </Box>

                                        </Box>
                                    </MenuItem>

                                )
                            })

                        ) 
                        }

                        {/* {
                            ind.map((item,index) => (
                                <Box style={{ border: "1px solid #333", padding: "5px" }}>
                                    <p>{item.label}</p>
                                    <p>{item.value}</p>
                                    <p>{ItemValue}</p>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={item.qty}
                                        label="Age"
                                        onChange={(w) => {
                                            const tempArray = ind
                                            tempArray[index].qty = w.target.value
                                            console.log(tempArray.qty, " here-=========")
                                            setInd([...tempArray])
                                            // setItemValue()
                                        }}
                                    >
                                        <MenuItem onClick={()=>setItemValue(11)} value={11}>Pcs</MenuItem>
                                        <MenuItem onClick={() => setItemValue(5)} value={5}>Pcs</MenuItem>
                                        <MenuItem onClick={() => setItemValue(300)} value={300}>Gr</MenuItem>
                                        <MenuItem onClick={() => setItemValue(50)} value={50}>Gr</MenuItem>
                                        <MenuItem onClick={() => setItemValue(30)} value={30}>Gr</MenuItem>
                                    </Select>
                                </Box>
                            ))
                        } */}
                {/* start from  here for search value */}
                   </Box>
                </Box>
            </Drawer>
        </>

    )
}



import { Box, Button, IconButton, InputAdornment, ListItemIcon, ListItemText, Menu, MenuItem, TextField } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function DishesSearchFilter({ setSearchVal }) {

    const textfield = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        background: "#F6F6F6",
        borderRadius: "6px",
        "&:hover": {
            border: " 1px solid #E1E1E6",
        },
    };

    const Typo3 = {
        fontFamily: "Outfit",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: { xl: "30px", lg: "18px", md: "18px", sm: "18px", xs: "18px" },
        lineHeight: "26px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        paddingTop: { xl: "40px", lg: "30px", md: "30px", sm: "30px", xs: "30px" },
        color: "#000000",
    };

    const IconBtn = {
        width: { xl: "26px", lg: "16px", md: "16px", sm: "16px", xs: "12px" },
        height: "auto",
    };
    // /-===================/================/
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [menu, setMenu] = React.useState('Name')
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
    const handleIcon3 = () => {
        setCheckbox(false);
        setCheckbox2(false);
        setCheckbox3(true);

    }
    
    return (
        <>
            <Box sx={{ 
                width: '100%',
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TextField
                    
                    placeholder='Search your dishes'
                    size="small"
                    onChange={(e) => setSearchVal(e.target.value)}
                    sx={{
                        width: { xs: '200px', sm: '250px', md: '350px' },
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
                <Box>
                Sort by:
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
                        <ListItemText primary={'Name'}
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
                            setMenu('Number');
                            handleClose(); handleIcon2();
                        }}
                    >
                        <ListItemText primary={'Number'}
                            primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                        <ListItemIcon>
                         { checkbox2 ?(
                                    <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                          ): '' }
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
                            setMenu('A-Z');
                            handleClose(); handleIcon3();
                        }}
                    >
                        <ListItemText primary={'A-Z'}
                            primaryTypographyProps={{ fontSize: '14px', fontFamily: "outfit", fontWeight: true ? '600' : '400', }} />

                        <ListItemIcon>
                                {checkbox3 ? (
                                    <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                                ) : ''}
                        </ListItemIcon>

                    </MenuItem>



                </Menu>
                </Box>


            </Box>

        </>
    )
}

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'
import Charts from 'react-apexcharts'
import { BiCheckCircle } from 'react-icons/bi'
import './SalesChartCss.css'


export const SalesChart = () => {


    var options = {
        title: {
            text: 'Sales Charts',
            align: 'left',
            style: {
                fontFamily: 'Outfit',
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '26px'
            },
        },
        markers: {
            colors: '#6A82CF',
            strokeColors: '#6A82CF',
            strokeWidth: 0,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
        },
        chart: {
            height: 380,
            width: "100%",
            type: "line",
            zoom: false,
            toolbar: {
                tools: {
                    download: false  //disable burgerMenu
                }
            }
        },
        // to set thickness of chart line
        stroke: {
            show: true,
            curve: 'straight',
            width: 1.5,
        }
        ,
        //for chart shoswing tooltip
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '8px',
                  },
            background: {
                enabled: true,
                foreColor: '#6A82CF',
                padding: 0,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: '#6A82CF',
                opacity: 1,
        },
            textAnchor: 'middle',
            offsetX: 0,
            offsetY: 0,
    },
        series: [{
            name: 'Order',
            data: [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4],
            style:{
                fontSize: '8px ', fontFamily: 'Outfit', background: 'red'
            }
             }],
        tooltip: {
            style: {
                background: '#2F549D',
            },
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                return '<ul>' +
                    '<li > ' + data + '<b> Order </b> </li>' +
                    '</ul>';
            }
        },
        colors: [
            function ({ value, seriesIndex, dataPointIndex, w }) {
                if (dataPointIndex) {
                    return "#6A82CF";
                } else {
                    return "#6A82CF";
                }
            }
        ]
    };

    const [dmonthly, setDmonthly] = React.useState('');
    const [checked, setChecked] = React.useState(true);
    const [checked1, setChecked1] = React.useState(false);

    const handleChange = (event) => {
        setDmonthly(event.target.value);
    };
    const handleChecked=()=>{
        setChecked(true)
        setChecked1(false)
    }
    const handleChecked1=()=>{
        setChecked1(true)
        setChecked(false)
    }
    
    return (
        <Box padding={2}>
            <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
                <Box>

                </Box>
                <FormControl sx={{ width: '160px', marginTop: '-16px' }}>
                    <InputLabel id="demo-simple-select-label"
                    > </InputLabel>
                    <Select 
                         sx={{ boxShadow: 'none', margin: '10px', lineHeight: '25px', height: '30px', padding: '0px',
                        '& .MuiSelect-select': {
                            border: '1px solid transparent'
                            ,color:'red'
                        }, 
                            '& .MuiSelect-icon': {
                                fill: '#2B817B'
                            },
                            ".MuiOutlinedInput-notchedOutline": {
                                border: "none !important"
                            }
                    }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dmonthly}
                        placeholder="This Month"
                        onChange={handleChange}
                    >
                        <MenuItem selected onClick={handleChecked} sx={{ marginRight: '0px', background: '#fff' }} disableRiple={true} value={'monthly'}>Monthly{" "}{" "}
                            {checked && <BiCheckCircle  sx={{ marginTop: '9px', marginLeft: '8px' }} color='#42C677' />} 
                              </MenuItem>
                        <MenuItem disableRiple={true} onClick={handleChecked1} value={'daily'}>Daily {" "}{" "}
                            {checked1 && <BiCheckCircle sx={{ marginTop: '9px', marginLeft: '8px' }} color='#42C677' />}</MenuItem>
                    </Select>
                </FormControl>

            </Box>
            <Charts options={options}
                series={options.series} type="line" width="100%" height='390px' />
        </Box>
    )
}

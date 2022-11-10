import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'
import Charts from 'react-apexcharts'
import { BiCheckCircle } from 'react-icons/bi'
export const SalesChart = () => {

    const series =[{
        name: 'Orders',
        data: [11, 22, 32, 45, 67, 79, 81,9,58,67]
    }];
    var options = {
        chart: {
            height: 380,
            width: "100%",
            type: "scatter",
            zoom: false,
            toolbar: {
                tools:{
                    download: false
                }
            }
        },
        series: [
            {
                name: "Series 1",
                data: [
                    {
                        x: 100,
                        y: 50,
                                            },
                    {
                        x: 150,
                        y: 55,
                        
                    },
                    {
                        x: 130,
                        y: 44,
                        
                    }
                ]
            }
        ],
        xaxis: {
            type: "numeric"
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li style={{background: #2F549D;}}>' + data.x + ' <b>Order</b> </li>' +
                    '</ul>';
            }
        }
    };
    const [dmonthly, setDmonthly] = React.useState('');

    const handleChange = (event) => {
        setDmonthly(event.target.value);
    };
    return (
        <Box padding={2}>
            <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
        <Box>

        </Box>
            <FormControl sx={{ width: '160px', marginTop: '-16px' }}>
                <InputLabel id="demo-simple-select-label"
                ></InputLabel>
                <Select sx={{ boxShadow: 'none', margin: '10px', lineHeight: '25px', height: '30px', padding: '0px' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dmonthly}
                    label="Monthly"
                    onChange={handleChange}
                >
                    <MenuItem selected sx={{ marginRight: '0px', background: '#fff' }} disableRiple={true} value={'monthly'}>Monthly
                        <BiCheckCircle sx={{ marginTop: '8px', marginLeft: '8px' }} color='#42C677' /> </MenuItem>
                    <MenuItem disableRiple={true} value={'daily'}>Daily</MenuItem>
                </Select>
            </FormControl>

            </Box>
            <Charts options={options}
                series={series} type="line" width="100%" height='390px'  />
        </Box>
    )
}

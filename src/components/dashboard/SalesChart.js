import React from 'react'
import Charts from 'react-apexcharts'
export const SalesChart = () => {

    const series =[{
        name: 'Orders',
        data: [11, 22, 32, 45, 67, 79, 81,9,58,67]
    }];
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Sales chart',
            align: 'left',
            style:{
                fontSize: '18px',
                fontFamily: 'Outfit',
                fontWeight: '600',
                lineHeight: '26px',
                color: '#545359',

            }
        },
        grid: {
            row: {
                colors: ['#fff', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: [1, 2,3,4,5,6,7,8,9,10,11,12],
            title: {
                text: false
            }
        },
        toolbar: {
            show: true
        }
    };
    
    return (
        <div>

            <Charts options={options}
                series={series} type="line" width="684px" height='400px' />
        </div>
    )
}

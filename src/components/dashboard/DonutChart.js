import React from 'react'
import Charts from 'react-apexcharts'
export const DonutChart = () => {

    const series = [90, 8, 22, 55, 77, 99];
    const options = {
        series: [45, 52, 22, 51, 30, 48],
        chart: {
            type: 'donut',
            width: '300px'
        },
        labels: ['Dietary subscription', 'Multiple subscription', 'Personal subscription', 'Single order', 
        'Business subscription'],
        colors: ['#FF8D85', '#158FAD', '#7B49E5', '#7ECC49', '#FF9933'], // add this part to modify colours
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 100,
                    },
                }
            }
        ],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            style: {
                fontSize: '8px'
            }
        },
        dataLabels: { // add this part to remove %
            enabled: false,
         
        }
    };
    




    return (
        <div>

            <Charts options={options}
                series={series} type="donut" width={'100%'} />
        </div>
    )
}

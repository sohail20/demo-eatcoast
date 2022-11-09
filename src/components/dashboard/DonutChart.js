import React from 'react'
import Charts from 'react-apexcharts'
export const DonutChart = () => {

    const series = [90, 8, 22, 55, 77, 99, 11];
    const options = {
        title: {
            text: 'abc',
            type: 'donut',
            style: {
                fontSyle: '9px',
                overflowY: 'hidden',
            },
        },
        labels: ["Dietary subscription", "Multiple subscription", "Personal subscription", "Single order", "Bussines subscription"],
         plotOptions: {
            bar:{
                dataLabels:{
                    position:'right'
                }
            },
             dataLabels: {
                 enabled: false
             },
            
            offsetY: 30            
         },           
    }
    return (
        <div>

            <Charts options={options}
                series={series} type="donut" />
        </div>
    )
}

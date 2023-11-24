'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {

    const data = {
        labels: ['Mobile', 'Leptop', 'Tablet', 'Others'],
        datasets: [
          {
            label: 'Total Source Of Revenue',
            data: [12, 19, 3, 5],
            backgroundColor: [
              '#588157',
              '#457b9d',
              '#1d3557',
              '#e63946',
            ],
            borderColor: ['#fff'],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div style={{maxHeight:'30rem', maxWidth:'100%'}}>
            <Pie data={data}/>
        </div>
  )
}

export default PieChart;
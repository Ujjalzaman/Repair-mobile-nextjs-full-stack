'use client';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


const BarChart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const getRandomNumber = (min:any, max:any) => Math.floor(Math.random() * (max - min + 1)) + min;
    const data = {
        labels,
        datasets: [
            {
                label: 'Mobile',
                data: labels.map(() => getRandomNumber(0, 1000)),
                backgroundColor: '#588157',
            },
            {
                label: 'Leptop',
                data: labels.map(() => getRandomNumber(0, 1000)),
                backgroundColor: '#457b9d',
            },
            {
                label: 'Tablet',
                data: labels.map(() => getRandomNumber(0, 1000)),
                backgroundColor: '#1d3557',
            },
            {
                label: 'Others',
                data: labels.map(() => getRandomNumber(0, 1000)),
                backgroundColor: '#e63946',
            },
        ],
    };
    return (
        <Bar options={options} data={data} />
  )
}

export default BarChart;
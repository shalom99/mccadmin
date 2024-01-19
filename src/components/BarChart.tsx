"use client";

import React, { FC, useState } from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales } from "chart.js";

import {Bar} from "react-chartjs-2";

import faker from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
      scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            }
        },
      }
    },
  };

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const data = {
    labels,
    datasets: [
        {
            label: 'Sales',
            data: labels.map(() => Math.floor(Math.random() * 6000) + 1),
            backgroundColor: '#4b5563',
        }
    ]
}

type BarChartProps = {};


const BarChart: FC<BarChartProps> = ({}) => {
  return (

    <div className="flex">
        <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;

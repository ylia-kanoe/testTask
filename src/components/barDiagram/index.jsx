import React from 'react';
import { generateRandomColor } from '../support/generateColor'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function BarDiagram(props) {
    const birthdayFemale = [] 
    const birthdayMale = [] 

    for (let i = 0; i < 12; i++) {
        birthdayFemale.push(0)
        birthdayMale.push(0)
    }

    props.jsonData.map(item => {
        let date = new Date(item.birthday)
        item.car[0].make
        if (item.gender === 'Female') {
            birthdayFemale[date.getMonth()] = birthdayFemale[date.getMonth()] + 1
        } else {
            birthdayMale[date.getMonth()] = birthdayMale[date.getMonth()] + 1
        }
    })

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Female birthday',
                data: labels.map((item, i) => birthdayFemale[i]),
                backgroundColor: '#ff86ab',
            },
            {
                label: 'Male birthday',
                data: labels.map((item, i) => birthdayMale[i]),
                backgroundColor: 'rgb(30, 136, 229)',
            }
        ],
    };

    return <Bar options={options} data={data} />;
}
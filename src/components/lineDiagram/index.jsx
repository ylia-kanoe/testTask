import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export function LineDiagram(props) {
    const countFemale = []
    const countMale = []
    let ageMass = []

    props.jsonData.map(item => {
        let age = ((new Date().getTime() - new Date(item.birthday)) / (24 * 3600 * 365.25 * 1000)).toFixed()

        if (!ageMass.includes(age)) {
            ageMass.push(age)
        }
    })

    ageMass = ageMass.sort()

    for (let i = 0; i < ageMass.length; i++) {
        countFemale.push(0)
        countMale.push(0)
    }

    props.jsonData.map(item => {
        let age = ((new Date().getTime() - new Date(item.birthday)) / (24 * 3600 * 365.25 * 1000)).toFixed()
        if (item.gender === 'Female') {
            countFemale[ageMass.indexOf(age)] = countFemale[ageMass.indexOf(age)] + 1
        } else {
            countMale[ageMass.indexOf(age)] = countMale[ageMass.indexOf(age)] + 1
        }
    })

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    }

    const labels = ageMass.map((item, i) => item)

    const data = {
        labels,
        datasets: [
            {
                label: 'Female count',
                data: labels.map((item, i) => countFemale[i]),
                borderColor: '#ff86ab',
                backgroundColor: '#ff86ab',
                tension: 0.1
            },
            {
                label: 'Male count',
                data: labels.map((item, i) => countMale[i]),
                borderColor: 'rgb(30, 136, 229)',
                backgroundColor: 'rgb(30, 136, 229)',
                tension: 0.1
            },
        ],
    }

    return <Line options={options} data={data} />;
}

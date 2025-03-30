
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { generateRandomColor } from '../support/generateColor';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutDiagram(props) {

    const countChild = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const colorChild = []

    props.jsonData.map(item => {
        item.family.map(item2 => {
            Object.keys(item2).map((key) => {
                let age = ((new Date().getTime() - new Date(item2[key])) / (24 * 3600 * 365.25 * 1000)).toFixed()
                if (key === 'birthday' && age < 18) {
                    countChild[age] = countChild[age] + 1
                }
            })
        })
    })

    for (let i = 0; i < countChild.length; i++) {
        colorChild.push(generateRandomColor())
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
    }

    const data = {
        labels: countChild.map((item, i) => 'Child age:' + i),
        datasets: [
            {
                label: 'birthday childs',
                data: countChild,
                backgroundColor: ['#FFD1DC', '#E0F9E6', '#E6E6FA', '#F9F3A1', '#A6D8E7', '#FFD8B8', '#D6B3F7', '#B5EAD7',
                    '#FFC4D6', '#F0E68C', '#C3CDE6', '#F7CAC9', '#D5E8C8', '#9AC5F0', '#FFCDA8', '#E0BBE4', '#ACE1AF', '#C9A0DC',
                ],
                borderWidth: 1
            },
        ],
    }

    return (
        <>
            <Doughnut options={options} data={data} />
        </>
    )
}

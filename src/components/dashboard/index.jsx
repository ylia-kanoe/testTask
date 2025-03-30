import './style.css'
import React from 'react';
import { DoughnutDiagram } from '../doughnutDiagram'
import { BarDiagram } from '../barDiagram'
import { LineDiagram } from '../lineDiagram'
import jsonData from '../../data.json'

export function Dashboard() {
    function currentBirthdays() {
        let count = 0
        let currentMounth = new Date().getMonth()
        jsonData.map(item => {
            if (new Date(item.birthday).getMonth() === currentMounth) {
                count = count + 1
            }
        })
        return count
    }

    function nextBirthday() {
        let currentMounth = new Date().getMonth() /* тестовые значения на март месяц */
        let currentDay = new Date().getDate() /* тестовые значения 32(нет дней рождений) 30(есть дни рождения) */
        let person = []
        jsonData.map(item => {
            if (new Date(item.birthday).getMonth() === currentMounth && new Date(item.birthday).getDate() === currentDay) {
                person.push({ birthday: item.birthday, first_name: item.first_name, last_name: item.last_name, id: item.id })
            }
        })
        console.log(person[Math.floor(Math.random() * person.length)])
        return person[Math.floor(Math.random() * person.length)]
    }
    let person = nextBirthday()

    return (
        <>
            <div className='dashboard'>
                <div className='dashboardBlock'>
                    <div className='dashboardElem dashboardElemThree dashboardPurple'>
                        <div className='dashboardSvg'>
                            <svg aria-hidden="true" fill="#ffffff" viewBox="0 0 24 24"><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
                        </div>
                        <div className='textLarge'>{jsonData.length}</div>
                        <div className='title'>Total users</div>
                    </div>
                    <div className='dashboardElem dashboardElemThree dashboardBlue'>
                        <div className='dashboardSvg'>
                            <svg aria-hidden="true" fill="#ffffff" viewBox="0 0 24 24"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2m4.6 9.99-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01M18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9"></path></svg>
                        </div>
                        <div className='textLarge'>{currentBirthdays()}</div>
                        <div className='title'>Birthdays in the current month</div>
                    </div>
                    <div className='dashboardElem dashboardElemThree dashboardYellow'>
                        <div className='dashboardSvg'>
                            <svg aria-hidden="true" fill="rgb(255, 193, 7)" viewBox="0 0 24 24"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5"></path></svg>
                        </div>
                        {person ?
                            <>
                                <div className='textLarge'><a href={'/userlist/' + (person.id - 1)}>{person.last_name} {person.first_name}</a></div>
                                <div className='title'>Birthday today</div>
                            </> :
                            <>
                                <div className='textLarge'>No birthdays today</div>
                                <div className='title'>Birthday today</div>
                            </>
                        }
                    </div>
                    <div className='dashboardElem dashboardWhite dashboardDiagramBar'>
                        <div className='textSmall'>Birthday on mounth</div>
                        <BarDiagram jsonData={jsonData} />
                    </div>
                    <div className='dashboardElem dashboardWhite dashboardDiagramCircle'>
                        <div className='textNormal'>Number of children users have</div>
                        <DoughnutDiagram jsonData={jsonData} />
                    </div>
                    <div className='dashboardElem dashboardWhite dashboardDiagramLine'>
                        <div className='textSmall'>DiagramAge</div>
                        <LineDiagram jsonData={jsonData} />
                    </div>
                </div>
            </div>
        </>
    )
}

import { useState } from "react"
import { UserInfo } from "../userInfo"
import './style.css'

export function UserListItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <>
            <tr className="userListItem">
                <td>{props.user.id}</td>
                <td className="minProfile">
                    <img width={40} height={40} src={props.user.image} style={{ backgroundColor: getRandomColor() }} />
                    <div className="minInfo">
                        <p className="name">{props.user.first_name} {props.user.last_name}</p>
                        <p className="email">{props.user.email}</p>
                        <div className="gender" style={{ backgroundColor: props.user.gender === 'Male' ? '#0093d7' : '#f187b9' }}><p>{props.user.gender === 'Male' ? 'M' : 'F'}</p></div>
                    </div>

                </td>
                <td>{((new Date().getTime() - new Date(props.user.birthday)) / (24 * 3600 * 365.25 * 1000)).toFixed()}</td>
                <td>{props.user.birthday}</td>
                <td>{props.user.company_name}</td>
                <td>{props.user.job_title}</td>
                <td onClick={() => showInfo ? setShowInfo(false) : setShowInfo(true)}
                    className="clickTd">
                    {showInfo ? 'Скрыть' : 'Быстрый просмотр'}
                </td>
                <td className="clickTd">
                    <a href={'/userlist/' + (props.user.id - 1)}>Перейти на страницу</a>
                </td>
            </tr>
            {showInfo &&
                <tr>
                    <td className="viewBlock" colSpan="8">
                        <UserInfo user={props.user} />
                    </td>
                </tr>
            }

        </>
    )
}



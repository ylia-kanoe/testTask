import './style.css'
import { UserInfo } from "../userInfo"
import { Breadcrumbs } from "../breadcrumbs"

export function UserItem(props) {
    return (
        <>
            <div className='container'>
                <div className='userItemTop'>
                    <Breadcrumbs />
                </div>
            </div>
            <div className='container'>
                <div className='userItem'>
                    <UserInfo user={props.user} />
                </div>
            </div>
        </>
    )
}
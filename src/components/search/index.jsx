import { useState } from 'react'
import './style.css'

export function Search(props) {
    const [searchIcon, setSearchIcon] = useState(true)

    return (
        <>
            <div className='searchBlock'>
                <div className={`searchIcon ${searchIcon ? 'active' : ''}`}>🔍︎</div>
                <input className="searchInput"
                    onChange={() => {
                        if(event.target.value !== ''){
                            setSearchIcon(false)
                        } else {
                            setSearchIcon(true)
                        }
                        props.findUsers(event.target.value)
                    }}
                    placeholder="Введите имя пользователя" />
            </div>
        </>
    )
}
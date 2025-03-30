import { useState } from 'react'
import './style.css'

export function Pagination(props) {
    const [activePage, setActivePage] = useState(0)

    let pagination = []

    for (let i = 0; i < props.length; i++) {
        if (i % props.countItemPage == 0) {
            pagination.push(i)
        }
    }

    return (
        <>
            <div className='pagination'>
                <div className='paginationSection'>
                    <button className={`nextPage ${props.numPage === 0 ? 'disabled' : ''}`}
                        disabled={props.numPage === 0 ? true : false}
                        onClick={() => {
                            setActivePage(props.numPage - 1)
                            props.click(props.numPage - 1)
                        }}>
                        <svg fill="rgb(54, 65, 82)" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                        </svg>
                    </button>
                    <ul className="paginationItems">
                        {pagination.length < 10 && (
                            pagination.map((item, i) =>
                                (i >= pagination.length - 5) &&
                                <li className={`paginationItem ${activePage === i ? 'active' : ''}`} key={i}
                                    onClick={() => {
                                        setActivePage(i)
                                        props.click(i)
                                    }}>
                                    <p>{i + 1}</p>
                                </li>
                            )
                        )}
                        {pagination.length >= 10 && (
                            props.numPage < 4 && (
                                <>
                                    {pagination.slice(0, 5).map((item, i) =>
                                        <li className={`paginationItem ${activePage === i ? 'active' : ''}`} key={i}
                                            onClick={() => {
                                                setActivePage(i)
                                                props.click(i)
                                                console.log(pagination)
                                            }}>
                                            <p>{i + 1}</p>
                                        </li>
                                    )}
                                    ...
                                    <li className={`paginationItem ${activePage === pagination.length ? 'active' : ''}`}
                                        onClick={() => {
                                            setActivePage(pagination.length - 1)
                                            props.click(pagination.length - 1)
                                        }}>
                                        <p>{pagination.length}</p>
                                    </li>
                                </>
                            ) ||
                            (props.numPage >= 4 && props.numPage <= pagination.length - 5) && (
                                <>
                                    <li className={`paginationItem ${activePage === 1 ? 'active' : ''}`}
                                        onClick={() => {
                                            setActivePage(1)
                                            props.click(1)
                                        }}>
                                        <p>{1}</p>
                                    </li>
                                    ...
                                    {pagination.map((item, i) =>

                                        (i >= props.numPage - 1 && i <= props.numPage + 1) &&
                                        <li className={`paginationItem ${activePage === i ? 'active' : ''}`} key={i}
                                            onClick={() => {
                                                setActivePage(i)
                                                props.click(i)
                                            }}>
                                            <p>{i + 1}</p>
                                        </li>
                                    )} ...
                                    <li className={`paginationItem ${activePage === pagination.length ? 'active' : ''}`}
                                        onClick={() => {
                                            setActivePage(pagination.length - 1)
                                            props.click(pagination.length - 1)
                                        }}>
                                        <p>{pagination.length}</p>
                                    </li>

                                </>
                            ) ||
                            (props.numPage > pagination.length - 5) && (
                                <>
                                    <li className={`paginationItem ${activePage === 1 ? 'active' : ''}`}
                                        onClick={() => {
                                            setActivePage(1)
                                            props.click(1)
                                        }}>
                                        <p>{1}</p>
                                    </li>
                                    ...
                                    {pagination.map((item, i) =>
                                        (i >= pagination.length - 5) &&
                                        <li className={`paginationItem ${activePage === i ? 'active' : ''}`} key={i}
                                            onClick={() => {
                                                setActivePage(i)
                                                props.click(i)
                                            }}>
                                            <p>{i + 1}</p>
                                        </li>
                                    )}

                                </>
                            )
                        )}
                    </ul>
                    <button className={`nextPage ${props.numPage === pagination.length - 1 ? 'disabled' : ''}`}
                        disabled={props.numPage === pagination.length - 1 ? true : false}
                        onClick={() => {
                            setActivePage(props.numPage + 1)
                            props.click(props.numPage + 1)
                        }}>
                        <svg fill="rgb(54, 65, 82)" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <div>
                        <div className='activeCountRows'>
                            {props.countItemPage} rows <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M15.88 9.29 12 13.17 8.12 9.29a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"></path></svg>
                            <ul className='checkCountPage'>
                                <li className={`checkCountPageItem ${props.countItemPage === 10 ? 'active' : ''}`} onClick={() => props.setCount(10)}>10 rows</li>
                                <li className={`checkCountPageItem ${props.countItemPage === 20 ? 'active' : ''}`} onClick={() => props.setCount(20)}>20 rows</li>
                                <li className={`checkCountPageItem ${props.countItemPage === 30 ? 'active' : ''}`} onClick={() => props.setCount(30)}>30 rows</li>
                                <li className={`checkCountPageItem ${props.countItemPage === 50 ? 'active' : ''}`} onClick={() => props.setCount(50)}>50 rows</li>
                                <li className={`checkCountPageItem ${props.countItemPage === 100 ? 'active' : ''}`} onClick={() => props.setCount(100)}>100 rows</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
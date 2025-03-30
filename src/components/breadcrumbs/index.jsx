import './style.css'

export function Breadcrumbs() {
    const massCrumbs = window.location.pathname.split('/')

    return (
        <>
            <ul className='breadcrumbs'>
                {massCrumbs.map((item, i) =>
                    <>
                        <li className="breadcrumbsItem" key={i}>
                            <a href={i !== massCrumbs.length - 1 ? "/" + item: item}>{item === '' ?
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="rgb(103, 58, 183)" stroke="rgb(103, 58, 183)"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                                : item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                        {i !== massCrumbs.length - 1 &&
                            <li className="breadcrumbsItem" key={i+'arrow'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6l-6 6"></path></svg>
                            </li>
                        }
                    </>
                )}

            </ul>
        </>
    )
}
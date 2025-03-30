import './style.css'

export function Button(props){
    return(
        <>
        <button className="button" onClick={() => console.log(props.click)}>{props.title}</button>
        </>
    )
}
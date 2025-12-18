export default function Card(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
                <img src="./vite.svg" className="card-img-top" alt="vite logi"/>
                <div className="card-body">
                <h5 className="card-title">{props.name || "Deafult Value"}</h5>
                <p className="card-text">{props.age || 12}</p>
                <a target='_blank' href="www.google.com" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

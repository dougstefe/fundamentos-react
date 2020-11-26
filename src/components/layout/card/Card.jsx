import "./Card.css"
export default function Card(props) {
    const color = props.color || '#222'
    return (
        <div className="card" style={{backgroundColor: color, borderColor: color}}>
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
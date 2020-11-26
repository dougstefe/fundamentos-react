export default function EvenOrOdd(props){
    return (
        <div>
            {props.number % 2 === 0 ? <span>O número {props.number} é par</span> : <span>O número {props.number} é ímpar</span>}
        </div>
    )
}
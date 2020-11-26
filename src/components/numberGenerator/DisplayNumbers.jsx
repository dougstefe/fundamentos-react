import {Component} from "react"

class DisplayNumbers extends Component{
    render(){
        return (
            <h2>
                {
                    this.props.numbers.map((number, i) => <span key={i}>{number}</span>)
                }
            </h2>
        )
    }
}

export default DisplayNumbers
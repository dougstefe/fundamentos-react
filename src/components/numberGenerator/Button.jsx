import {Component} from "react"
class Button extends Component{

    render(){
        return (
            <button onClick={_ => this.props.action()}>Gerar números</button>
        )
    }
}

export default Button
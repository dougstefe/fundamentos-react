import { Component } from "react"
import DisplayNumber from "./DisplayNumber"
import Button from "./Button"
import PortionForm from "./PortionForm"

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            number: props.number || 0,
            portion: props.portion || 1
        }
        this.incrementBind = this.incrementBind.bind(this)
        this.decrementBind = this.decrementBind.bind(this)
    }
    increment(){
        this.setState({
            number: this.state.number + this.state.portion
        });
    }
    incrementBind(){
        this.setState({
            number: this.state.number + this.state.portion
        });
    }
    incrementArrow = () => {
        this.setState({
            number: this.state.number + this.state.portion
        });
    }
    decrement(){
        this.setState({
            number: this.state.number - this.state.portion
        });
    }
    decrementBind(){
        this.setState({
            number: this.state.number - this.state.portion
        });
    }
    decrementArrow = () => {
        this.setState({
            number: this.state.number - this.state.portion
        });
    }
    setPortion = (value) => {
        this.setState({
            portion: value
        })
    }
    render() {
        return (
            <div>
                <h2>Contador</h2>
                <DisplayNumber number={this.state.number} />
                <PortionForm portion={this.state.portion} setPortion={this.setPortion}/>
                <Button action={this.incrementBind} text="+ bind" />
                <Button action={this.incrementArrow} text="+ arrow" />
                <Button action={_ => this.increment()} text="+ implict" />
                <br/>
                <Button action={this.decrementBind} text="- bind" />
                <Button action={this.decrementArrow} text="- arrow" />
                <Button action={_ => this.decrement()} text="- implict" />
            </div>
        )
    }
}

export default Counter
import {Component} from "react"
import DisplayNumbers from "./DisplayNumbers"
import Button from "./Button"
import "./NumberGenerator.css"
class NumberGenerator extends Component{
    constructor(props){
        super(props)
        this.state = {
            numbers: []
        }
        this.quantity = props.quantity || 10;
        this.minValue = props.minValue || 0;
        this.maxValue = (props.maxValue || 100) + 1;
    }
    generate = () => {
        if(this.maxValue - this.minValue < this.quantity)
            throw new Error(`'${this.maxValue} - ${this.minValue}' it is smaller than ${this.quantity}.`)

        this.setState(
            {
                numbers: Array(this.quantity)
                    .fill(0)
                    .reduce((numbers) => {
                        return [ ...numbers, this.generateUniqueNumber(numbers)]
                    }, [])
                    .sort((n1, n2) => n1 - n2)
            }
        )
    }
    generateUniqueNumber = (numbers) =>{
        const number = this.minValue + Math.floor((this.maxValue - this.minValue) * Math.random())
        return numbers.indexOf(number) > -1 ? this.generateUniqueNumber(numbers) : number;
    }
    render(){
        return (
            <div className="generated-numbers">
                <DisplayNumbers numbers={this.state.numbers} />
                <Button action={this.generate} />
            </div>
        )
    }
}

export default NumberGenerator
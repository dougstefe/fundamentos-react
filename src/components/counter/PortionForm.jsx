import { Component } from "react"

class PortionForm extends Component {
    render(){
        return (
            <div>
                <label htmlFor="inputPortion">Portion: </label>
                <input id="inputPortion" type="number" value={this.props.portion} onChange={e => this.props.setPortion(+e.target.value)} />
            </div>
        )
    }
}

export default PortionForm
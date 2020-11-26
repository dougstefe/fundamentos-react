import { Component } from "react";

class DisplayNumber extends Component{
    render(){
        return (
            <h3>
                {this.props.number}
            </h3>
        )
    }
}

export default DisplayNumber
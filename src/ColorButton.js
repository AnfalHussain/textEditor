import React, { Component } from "react";

class ColorButton extends Component {
    state = {
        color: "black", //default
    };

    // changeColor() {
    //     this.setState(state => ({
    //       // color: 
    //     }));


    render() {
        const color = this.props.color;

        return (

            <button style={{ backgroundColor: color, height: 30, width: 30 }}
                key={color}
            />
        )


    }

}

export default ColorButton;


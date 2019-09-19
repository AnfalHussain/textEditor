import React, { Component } from "react";
import "./App.css";



const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

class App extends Component {
  state = {
    value: '',
    isToggleOn: true,
    bold: false,
    italic: false,
    underline: false,
    color: "black",
    buttonBackground: ""


  };



  // used for textarea
  handleChange(event) {
    this.setState({ value: event.target.value });
  }



  // // used for buttons
  // handleClick(style) {
  //   this.setState(state => ({
  //     style: !state.style

  //   }));
  // }
  handleStyle = (style) => {
    let newState = !this.state[style]

    this.setState({
      [style]: newState,
      // buttonBackground: 'blue'


    });
    console.log(style)

  }

  styling = () => {
    let appliedStyles = {}
    appliedStyles["color"] = this.state.color
    if (this.state.bold) {
      appliedStyles['fontWeight'] = "bold"
    } else {
      appliedStyles['fontWeight'] = ""
    }
    if (this.state.italic) {
      appliedStyles["fontStyle"] = "italic"
    } else {
      appliedStyles["fontStyle"] = ""
    }

    if (this.state.underline) {
      appliedStyles["textDecorationLine"] = "underline"
    } else {
      appliedStyles["textDecorationLine"] = ""
    }

    return appliedStyles
  }

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button onClick={() => this.handleStyle(style)} style={styles[style], { backgroundColor: this.state.buttonBackground }} key={style}>
          {style}
        </button>




      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() =>
            this.setState({ color: color })}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={this.styling()} />
        <div className="my-3">
          {colorBoxes}

        </div>


      </div>
    );
  }
}

export default App;

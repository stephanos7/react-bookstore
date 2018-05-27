import React from "react";

class GridViewOptions extends React.Component {
  // creating buttons in react? inheritance? if many buttons then will
  // they get many props of event handlers to call in handleClick?
  handleClick = (viewValue) => this.props.toggleView(viewValue);

  render(){
    return(
      <div>
        <button style={{backgroundColor:"#16D3F9", fontSize:"2em"}}
                value={"narrow"} 
                onClick={(e) => this.handleClick(e.target.value)}>Narrow View
        </button>
        <button style={{backgroundColor:"#16D3F9", fontSize:"2em"}}
                value={"normal"} 
                onClick={(e) => this.handleClick(e.target.value)}>Normal View
        </button>
        <button style={{backgroundColor:"#16D3F9", fontSize:"2em"}}
                value={"wide"} 
                onClick={(e) => this.handleClick(e.target.value)}>Wide View
      </button>
      </div>
    )
  }
}

export default GridViewOptions;
import React from "react";

class GridViewOptions extends React.Component {
  // creating buttons in react? inheritance? if many buttons then will
  // they get many props of event handlers to call in handleClick?
  handleClick = () => {
    console.log("handling");
  }

  render(){
    return(
      <div>
        <button style={{backgroundColor:"#16D3F9", fontSize:"2em"}} 
                onClick={this.handleClick}>change grid view</button>
      </div>
    )
  }
}

export default GridViewOptions;
import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
    /**
     * binding this to genRandom function
     */
    this.genRandom = this.genRandom.bind(this);
  }

  genRandom() {
    /**
     * pick random number
     */
    let rand = Math.floor(Math.random() * 10) + 1;

    /**
     * Update state with new random number
     */
    this.setState({ num: rand });
  }
  render() {
    return (
      <div className="Clicker">
        <h1>Number is : {this.state.num}</h1>
            {this.state.num === 7 ? (<h2>You win!!!</h2>) :
                (<button onClick={this.genRandom}>Random Number</button>)
            }
      </div>
    );
  }
}

export default Clicker;

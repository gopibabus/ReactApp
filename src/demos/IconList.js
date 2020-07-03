import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  };

  constructor(props) {
    super(props);
      this.state = {
        icons : []
      };
      this.addIcon = this.addIcon.bind(this);
    }
    
    /**
     * Not Ideal way
     */
    /**
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        let oldIcons = this.state.icons;
        oldIcons.push(newIcon);
        this.setState({icons: oldIcons});
    }
     */

    /**
     * Ideal way
     * We should copy the object then modify the values in that object and update object with modified copy
     */
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({icons: [...this.state.icons, newIcon]});
    }

    render() {
        const icons = this.state.icons.map( i => 
            (<i className={`fas fa-${i}`}/>)
        );
    return (
      <div>
            <h1>Icons: {icons}</h1>
            <button onClick={this.addIcon}>Add New Icon </button>
      </div>
    );
  }
}

export default IconList;

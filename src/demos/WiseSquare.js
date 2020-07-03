import React, { Component } from 'react';
import {choice } from '../demos/Helpers';

/**
 * This is to practice Mouse events in React
 */
class WiseSquare extends Component {

    constructor(props) {
        super(props);
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
        this.handleKeyEvent = this.handleKeyEvent.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    dispenseWisdom() {
        let messages = [
            "this is message1", "this is message2" , "this is message3"
        ];
        let rIndex = choice(messages);
        console.log(rIndex);
    }

    handleKeyEvent(evt) {
        if (evt.keyCode === 13) {
            console.log("***** I love this *****");
        } else {
            console.log("Boooo");
        }
    }

    handleCopy() {
        alert("Stop stealing from me!!!");
    }
    
    render() {
        return (
            <div>
                <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
                    😀
                </div>
                <textarea onKeyUp={this.handleKeyEvent} />
                <section onCopy={this.handleCopy}>
                In a keypress event, the Unicode value of the key pressed is stored in either the keyCode or charCode property, never both. If the key pressed generates a character (e.g. 'a'), charCode is set to the code of that character, respecting the letter case. (i.e. charCode takes into account whether the shift key is held down). Otherwise, the code of the pressed key is stored in keyCode.
                </section>
            </div>
        );
    }
}

export default WiseSquare;
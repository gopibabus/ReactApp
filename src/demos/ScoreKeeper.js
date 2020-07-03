import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }

    singleKill() {
        this.setState({score: this.state.score + 1});
    }

    /**
     * Only last setState will be executed
     */
    /**
    tripleKill() {
        this.setState({score: this.state.score + 1});
        this.setState({score: this.state.score + 1});
        this.setState({score: this.state.score + 1});
    }
    */

    /**
     * Proper way of updating same state value multiple times
     */
    /**
    tripleKill() {
        this.setState((st) => {
            return({score : st.score + 1});
        });
        this.setState((st) => {
            return({score : st.score + 1});
        });
        this.setState((st) => {
            return({score : st.score + 1});
        });
    }
    */
    
    /**
     * After refactoring the code
     */
    tripleKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    incrementScore(currState) {
        return({score : currState.score + 1});
    }

    render() {
        return (
            <div className="ScoreKeeper">
                <h1>The Score is : {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
            </div>
        );
    }
}

export default ScoreKeeper;
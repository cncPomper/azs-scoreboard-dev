import React, { Component } from 'react'
import '../assets/styles/player.css'

class Player extends Component {
  render() {
    const { num, name, surname, goals, exclusions } = this.props.player;
    return (
      <div
        className="player"
        // style={`background-color ${this.props.player.exclusions === 3 ? "red" : {}}`}
      >
        <div className="num">{num}</div>
        <div className="name">{name}</div>
        <div className="surname">{surname}</div>
        <div
          className="score"
          // onClick={() => this.props.onIncrementGoals(this.props.player)}
        >
          {goals}
        </div>
        <div
          className="exclusions"
          // onClick={() => this.props.onIncrementExclusions(this.props.player)}
        >
          {exclusions}
          {/* {this.formatExclusions()} */}
        </div>

      </div>
    );
  }

  formatExclusions() {
    const { exclusions: count } = this.props.player;
    return count === 3 ? "Out" : count;
  }
}

export default Player;


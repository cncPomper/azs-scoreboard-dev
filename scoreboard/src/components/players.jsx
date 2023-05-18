import React, { Component } from 'react'
import Player from './player'

class Players extends Component {

  render() {
    const { players, onIncrementExclusions, onIncrementGoals } = this.props;
    return (
      <div>
        {players?.map(player =>
          <Player
            key={player.num}
            onIncrementExclusions={onIncrementExclusions}
            onIncrementGoals={onIncrementGoals}
            player={player}
            />
        )}
      </div>
    );
  }
}

export default Players;


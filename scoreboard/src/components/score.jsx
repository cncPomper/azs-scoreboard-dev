import React, { Component } from "react";
import "../assets/styles/score.css";
class Score extends Component {
  // state = {
  //   scoreHome_state: 0,
  //   scoreGuest_state: 0,
  // }

  render() {
    const {
      score_home,
      exc_home,
      to_home,
      score_guests,
      exc_guests,
      to_guests,
      time_minutes,
      time_seconds,
      action_time,
      quarter,
    } = this.props.score;
    // const { dataGuest } = this.props.dataguest

    // const calcScore = (data) => {
    //   var sum_score = 0
    //   dataHome?.map(player => {
    //     sum_score = sum_score + player.goals
    //   })
    //   console.log(dataHome)
    //   return sum_score
    // }
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <img src={require("../assets/AZS-Uniwersytet-Warszawski.png")} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="timer">
            <div className="utilL">
              <h1>{this.props.scorehome}</h1>
              <h1>Q{quarter}</h1>
              <h1>{this.props.scoreguest}</h1>
            </div>
            <div className="timeout-wrapper">
              <div className="col-md-6">
                {exc_home === 0 ? null : (
                  <div className="util-timeout">exc: {exc_home}</div>
                )}
                <div className="util-timeout">Timeouts left: {to_home}</div>
              </div>
              <div className="col-md-6">
                {exc_guests === 0 ? null : (
                  <div className="util-timeout">exc: {exc_guests}</div>
                )}
                <div className="util-timeout">Timeouts left: {to_guests}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6 ml-auto">
              <img
                src={require("../assets/arkonia_szczecin-removebg-preview.png")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  formatExclusions() {}
}

export default Score;

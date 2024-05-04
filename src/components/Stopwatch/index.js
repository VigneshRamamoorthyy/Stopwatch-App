import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    elapsedTimeSeconds: 0,
    isTimerRunning: false,
  }

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({
      isTimerRunning: true,
    })
  }

  updateTimer = () => {
    this.setState(prevState => ({
      elapsedTimeSeconds: prevState.elapsedTimeSeconds + 1,
    }))
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({
      isTimerRunning: false,
    })
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({
      elapsedTimeSeconds: 0,
      isTimerRunning: false,
    })
  }

  renderMinutes = () => {
    const {elapsedTimeSeconds} = this.state
    const minutes = Math.floor(elapsedTimeSeconds / 60)
    console.log(minutes)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {elapsedTimeSeconds} = this.state
    const seconds = Math.floor(elapsedTimeSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Stopwatch</h1>

          <div className="elapsed-timer-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="watch-img"
                alt="stopwatch"
              />
              <h1 className="timer-text">Timer</h1>
            </div>
            <h1 className="time">{time}</h1>
            <div className="button-container">
              <button
                className="timer-button start"
                type="button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="timer-button stop"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="timer-button reset"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

import * as React from 'react'

export default class Clock extends React.Component {
  state = {
    time: new Date()
  }
  interval: NodeJS.Timeout

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        <h1>Hello World </h1>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }
}

import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
    }
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    this.IntervalID = setInterval( () => { 
      this.setState((prev) => ({ second: prev.second + 1 })) 
    }, ONE_SECOND)
  }

  componentDidUpdate() {
    const { second, minute } = this.state;
    const TIMER = 60;
    if (second >= TIMER) {
      this.setState({ second: 0 })
      this.setState((prev) => ({ minute: prev.minute + 1 }))
    }
    if (minute >= TIMER) {
      this.setState({ minute: 0 })
      this.setState((prev) => ({ hour: prev.hour + 1 }))
    }
  }

  componentWillUnmount() {
    const { hour } = this.state;
    const HOUR_DAY = 24;
    if ( hour === HOUR_DAY ) {
      clearInterval(this.IntervalID)
    }
  }

  render() {
    const { second, minute, hour } = this.state;
    return (
      <div>
        <h1>Cronômetro</h1>
        <section className='timer'>
          {hour} : {minute} : {second}
        </section>

      </div>
    )
  }
}

export default Timer
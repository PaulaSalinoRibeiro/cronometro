import React, { Component } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';
import Timer from './component/Timer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    }
  }

  handleClick = () => {
    const { toggle } = this.state;
    if (toggle === true) {
      this.setState({ toggle: false })
    } else {
      this.setState({ toggle: true })
    }
  }

  render() {
    const { toggle } = this.state;
    return (
      <div className='container'>
        {!toggle && <Timer />}
        <button
          className='btn'
          type='button'
          onClick={this.handleClick}
        >
          {toggle ? <FaPlay /> : <FaStop />}
        </button>
      </div>
    )
  }
}

export default App;

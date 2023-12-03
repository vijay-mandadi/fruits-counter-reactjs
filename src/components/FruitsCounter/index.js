import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoIncrement = () => {
    this.setState(prev => ({mangoCount: prev.mangoCount + 1}))
  }

  bananaIncrement = () => {
    this.setState(prev => ({bananaCount: prev.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Bob ate <span className="number">{mangoCount}</span> mangoes{' '}
            <span className="number">{bananaCount}</span> bananas
          </h1>
          <div className="card">
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="button1" type="button" onClick={this.mangoIncrement}>
                Eat Mango
              </button>
            </div>
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="button1" type="button" onClick={this.bananaIncrement}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

// Write your code here
import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {count: 0, mount: 0}

  onMango = () => {
    this.setState(prevState => {
      console.log(prevState.count)
      return {count: prevState.count + 1}
    })
  }

  onBanana = () => {
    this.setState(prevState => {
      console.log(prevState.mount)
      return {mount: prevState.mount + 1}
    })
  }

  render() {
    const {count} = this.state
    const {mount} = this.state

    return (
      <div className="bg-container">
        <div className="heading-container">
          <h1 className="heading">
            Bob ate <span className="span"> {count} </span> mangoes{' '}
            <span className="span">{mount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-card">
              <img
                className="mango-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="banana-button"
                onClick={this.onMango}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-card">
              <img
                className="banana-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="banana-button"
                onClick={this.onBanana}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter

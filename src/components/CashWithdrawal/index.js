// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  firstValue = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="card-container">
          <div className="container-1">
            <button type="button" className="button-1">
              <span className="span">S</span>
            </button>
            <p className="customer-name">Sarah Williams</p>
          </div>
          <div className="container-2">
            <p className="your-balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="in-rupees">IN RUPEES</p>
            </div>
          </div>
          <div className="container-3">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="subbu">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachValue={eachItem}
                key={eachItem.id}
                firstValue={this.firstValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

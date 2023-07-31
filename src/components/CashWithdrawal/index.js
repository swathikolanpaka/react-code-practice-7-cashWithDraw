// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amt: 2000}

  amtDeduct = value => {
    const {amt} = this.state

    this.setState(prevAmt => {
      amt: prevAmt - value
    })
  }

  render() {
    const {amt} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="small-container">
          <div className="account-details">
            <p className="logo">S</p>
            <h1 className="holder-name">Sarah Williams</h1>
          </div>

          <div className="amt-details">
            <div className="bal-box">
              <p className="bal">Your Balance</p>
            </div>

            <div>
              <p className="amt">{amt}</p>
              <p className="amt-rupees">In Rupees</p>
            </div>
          </div>

          <div>
            <p className="amt">Withdraw</p>
            <p className="bal">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="amount-container">
            {denominationsList.map(eachAmt => (
              <DenominationItem
                denominationList={eachAmt}
                amtDeduct={this.amtDeduct}
                key={eachAmt.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

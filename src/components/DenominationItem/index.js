// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationList, amtDeduct} = props
  const {value} = denominationList

  const deductAmt = () => {
    amtDeduct(value)
  }

  return (
    <li className="amt">
      <button type="button" onClick={deductAmt}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

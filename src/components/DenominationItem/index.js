import './index.css'

const DenominationItem = props => {
  const {eachValue, firstValue} = props
  const {value} = eachValue
  const first = () => {
    firstValue(value)
  }

  return (
    <li className="list-1">
      <button type="button" className="amount-button-1" onClick={first}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem

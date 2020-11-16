import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
  const stateProps = useSelector((state) => {
    return {
      numOfIceCream: state.iceCream.numOfIceCream,
    }
  })

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Ice Cream: {stateProps.numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer

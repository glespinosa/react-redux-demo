import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
  const stateProps = useSelector((state) => {
    return { numOfCakes: state.cake.numOfCakes }
  })

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Num of cakes: {stateProps.numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer

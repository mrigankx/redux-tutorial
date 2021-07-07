import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum } from "./actions/index";
import "./App.css";
const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div class="container">
      <h1> Counter Application</h1>
      <h4>Using react and redux</h4>
      <div class="quantity">
        <button class="quantity_minus" title="decrement" onClick={()=> dispatch(decNum(5)) }><span>-</span></button>
        <input type="text" name="quantity" class="quantity_input" value={myState} />
        <button class="quantity_plus" title="increment" onClick={()=> dispatch(incNum(5)) }><span>+</span></button>

      </div>
    </div>
  )
}

export default App
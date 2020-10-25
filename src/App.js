import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createStore } from 'redux';

//Action
const INCREASE_COUNT = 'INCREASE_COUNT';
const increment = num => {
  return {
    type: INCREASE_COUNT,
    payload: num
  };
};

// Reducer
const initialState = { count: 0 }
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREASE_COUNT) {
    //ok return Object.assign({}, state, { count: state.count + action.payload })
    return { ...state, count: state.count + action.payload }
  }
  return state;
}

// store
export const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// This doesn't work:
// const mapStateToProps = state => {  
//   return {count: state.count};  
// }
// const mapDispatchToProps = dispatch => {
//   increment: () => dispatch(increment())
// }

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
      <div>
      Counter: {count} <button onClick={ ()=> dispatch(increment(1))}>Increment</button>
      </div>      
  );
}

// connect(mapStateToProps,mapDispatchToProps)(App);

export default App;

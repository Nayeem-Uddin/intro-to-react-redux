import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './Actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello React-Reducer</h1>
      <h4>Counter : {counter}</h4>
      <button onClick={()=> dispatch(increment(5))}>increment</button>
      <br/><br/>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      { isLogged ? <h3>You cann't see the valuable information</h3> : <h3>U can see the information</h3>}
    </div>
  );
}

export default App;

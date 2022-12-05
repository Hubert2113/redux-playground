
import { useSelector, useDispatch } from 'react-redux';
import {
  INCREMENT,
  DECREMENT,
  CHANGE_VALUE,
} from './redux/actions';

function App() {
  const dispatch = useDispatch();

  const currentNumber = useSelector(state => state.currentNumber);
  const step = useSelector(state => state.step);

  const incrementValue = () => {
    dispatch(INCREMENT());
  }

  const decrementValue = () => {
    dispatch(DECREMENT());
  }

  const changeStep = (ev) => {
    dispatch(CHANGE_VALUE(ev.target.value));
  }

  return (
    <>
      <p>{currentNumber}</p>
      <input value={step} type="number" onInput={changeStep}/>
      <button onClick={incrementValue}>+</button>
      <button onClick={decrementValue}>-</button>
    </>
  );
}

export default App;


import { useSelector, useDispatch } from 'react-redux';
import {
  INCREMENT,
  DECREMENT,
  CHANGE_VALUE,
} from './redux/actions';

function App() {
  const dispatch = useDispatch();

  const currentNumber = useSelector(state => state.currentNumber);

  const incrementValue = () => {
    dispatch(INCREMENT);
  }

  const decrementValue = () => {
    dispatch(DECREMENT);
  }

  const changeStep = () => {
    dispatch(CHANGE_VALUE);
  }

  return (
    <>
      <p>{currentNumber}</p>
      <input type="number"/>
      <button onClick={incrementValue}>+</button>
      <button>-</button>
    </>
  );
}

export default App;

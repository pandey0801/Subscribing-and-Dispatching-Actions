import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
  };

  const incHandler = () =>
    {
      dispatch({type:'inc'});
    }

   const decHandler = () =>
    {
      dispatch({type:'dec'});
    } 

  const counter = useSelector((state) => state.counter)

  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <div>
      <button onClick={incHandler}>Increment By 5</button>
      </div>
      <div>
      <button onClick={decHandler}>Decremenen by 5</button>
      </div>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

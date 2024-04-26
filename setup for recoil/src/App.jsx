import React from 'react';
import { useRecoilState, useRecoilValue,useSetRecoilState,useResetRecoilState } from 'recoil';
import { counterState, counterEvenOddState } from './store/atoms/count';

function CounterComponent() {
  const [counter, setCounter] = useRecoilState(counterState);
  const counterType = useRecoilValue(counterEvenOddState);
  const setCountWithState = useSetRecoilState(counterState);
  const resetCount = useResetRecoilState(counterState);

  const increment = () => {
    setCounter(counter => counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => resetCount(); // Resets count to default value

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {counter}</p>
      <p>Counter Type: {counterType}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setCountWithState(100)}>Set Count to 100</button>
    </div>
  );
}

export default CounterComponent;

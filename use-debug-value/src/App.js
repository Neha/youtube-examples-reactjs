import './App.css';
import Counter from './Counter';

function App() {
  const { count, increment, decrement } = Counter(3);


  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
}

export default App;

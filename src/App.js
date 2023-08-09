import './index.scss';
import {useState} from 'react';

function App() {
    let [count, setCount] = useState(0);

    const counterPlus = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const counterMinus = () => {
      if (!count <= 0){
        setCount((prevCount) => prevCount - 1);
      }
    };

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={counterMinus} className="minus">- Minus</button>
        <button onClick={counterPlus} className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;

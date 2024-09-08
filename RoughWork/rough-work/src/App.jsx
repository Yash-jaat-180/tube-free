import { useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(10);
  const increamentFive = () => {
    for (let i = 0; i < 5; i++){
      setCount((prevCount) => (
        prevCount + 1
      ));
    }
  }
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount -1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={increamentFive}>increament 5</button>
    </div>
  )
}



export default App

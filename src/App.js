import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  let [count,setValue] = useState(0);
  
  

  function decrement(){

    count  = count - 1;

    setValue(count);
    
  }

  function increment(){

    count = count + 1;

    setValue(count);
  }

  function reset(){

    count = 0;

    setValue(count);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center  bg-[#344151] gap-10 items-center">

        <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>

        <div className="bg-white flex items-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">

        <button onClick={decrement} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"> - </button>

        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>

        <button onClick={increment} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl pb-2"> + </button>
        </div>

        <button onClick={reset} className="bg-[#0398d4] text-white px-5 py-2 text-lg rounded-sm">Reset</button>

      
      
    </div>
  );
}

export default App;


import {useState} from "react";

import './App.css'

function App() {

  const [count , updateCount] = useState(0);
  const [input , updtateInput] = useState(0);

function incrementor()
{
  if(count == 100) return;

  if(input != 0) {
    updateCount(count + Number(input));
  }
  else 
  {
    updateCount(count + 1);
  }
    
}

function decrementor()
{
  if(count <= 0) return;

  if(input != 0) {
    updateCount((count - input) * 1);
  }
  else 
  {
    updateCount(count - 1);
  }
}

  return (
    <>

      <div className = "">
          <section><h1>UseState Challenge</h1></section>

            <section>
              <p>Count : {count}</p>

              <div>
                <span>Steps: </span>

                <input type="number" onChange={ (e) => updtateInput(e.target.value) }/>

              </div>

            </section>

          <section>

            <button onClick={incrementor}>Increment</button>

            <button onClick={decrementor}>Decrement</button>

            <button onClick={() => updateCount(0)}>Reset</button>

          </section>

      </div>

    </>
  )
}

export default App

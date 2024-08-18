import { useState } from 'react'
import './App.css'
import Buttons from "./buttonComponent/Buttons";

function App() {
  const [color, setColor] = useState("orange");

  const buttonHolderStyle = {
    "backgroundColor": "blueviolet",
    "marginBottom" : "45px",
    "padding" :"20px",
    "borderRadius" : "23px"
  } 

  function updateBg(data){
    // console.log("working");
    // console.log(data);
    setColor(data);
    // console.log("yeah");
  }
  const availableColors = ["Red" ,"Green" ,  "Olive" , "Purple" , "Yellow" , "Blue" , "White" , "Black" , "Pink" , "Gray"];
  return (

    <div className="parent" style={{backgroundColor : color}}>

          <div style={buttonHolderStyle}>

              {  availableColors.map( (val , index)=> {
                    return (
                    
                    <Buttons key = {index} content = {val} bgChanger = {(childComponentData) => updateBg(childComponentData)}/>
                  );
                })
              }

          </div>

    </div>

  );
}

export default App

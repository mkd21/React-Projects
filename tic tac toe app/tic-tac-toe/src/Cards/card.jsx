import { useState } from "react";
import Render from "../CardRendered/renderer.jsx";
import "../Styles for winning section/winnerStyle.css";
import "../Styles for winning section/resetButtonStyle.css";

import winnerDecider from "../Winner checker/winnerCheck.jsx";   // if else checker for winner 

// REACT TOASTIFY 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function cards(props)
{
    const [arr , updateArr] = useState(Array(props.size).fill(""));
    // console.log(arr);

    const [currentMove , updateMove] = useState(true);
    const [winner , updateWinner] = useState("");

    function exec(id)
    {
        console.log("move updater function called");
        if(currentMove == true)
        {
            arr[id] = "O";
        }
        else{
            arr[id] = "X";
        }

        let gameResult = winnerDecider(arr , (currentMove ? "O" : "X"));

        if(gameResult)
        {
            updateWinner(gameResult);
            toast.success(`Winner is player ${gameResult}`);
        }

        updateArr([...arr]);
        updateMove(!currentMove);
    }

    function resetGame()
    {
        updateArr(Array(props.size).fill(""));
        updateWinner("");
    }

    return(
        <>
            {winner && 
                <>
                    <h1 className="winner" >Winner is {winner}</h1>
                    <button onClick={resetGame} className="resetBtn" >Reset</button>
                </>
            }

            <h1 style = {{margin : "0px"}} >Current move is {(currentMove ? "O" : "X")}</h1>
            <div style={{width : "678px" ,height: "582px", paddingTop: "18px" , backgroundColor : "orange" , border : "1px solid red" , display: "flex" , flexWrap : "wrap" , justifyContent : "space-around" , borderRadius : "23px" , boxShadow: "11px 11px 15px #6c0064"}}>
                { arr.map( (val , idx) => <Render key={idx} id = {idx} displayIcon = {val} moveUpdater = {(id) => exec(id)} winnerDecided = {winner} />) }
            </div>

            <ToastContainer position="top-center" autoClose={2000} theme="dark"/>
        </>
    );
}

export default cards;
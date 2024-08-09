import { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
let count = 1;
function parent()
{
    const [Length , updateLength] = useState(8);
    const [NumberInUse , updateNumberInUse] = useState(false);
    const [characterInUse , updateCharacterInUse] = useState(false);
    const [password , updatePassword] = useState("");

    // password generator function 
    let randomPasswordGenerator = useCallback( () =>
    {
        let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(characterInUse) text += "!$%^ &*/?";
        if(NumberInUse) text += "0123456789";

        let generatedPassword = "";
        for(let i = 0; i < Length; i++)
        {
            let random = Math.floor(Math.random() * text.length );
            generatedPassword += text[random];
        }
        updatePassword(generatedPassword);
    } , [Length , NumberInUse , characterInUse]);   

     // useEffect hook 
    useEffect( () =>{
        randomPasswordGenerator();
        
    } , [Length , NumberInUse , characterInUse]);

    // useRef hook 
    const passwordText = useRef("");

    // copy to clipboard function 
    let copyToClipBoard = useCallback( () => {
        if(passwordText.current != ""){
            passwordText.current.select();
        }
        window.navigator.clipboard.writeText(password);
        toast("Copied to Clipboard"); 
    });

    return (

        <div className="w-6/12 h-72 bg-slate-500 ml-40 mt-12 p-3">

            <section>
                <input className="w-2/3 mb-3" type="text"readOnly value={password} ref={passwordText}/>
                <button className="w-16 bg-blue-400" onClick={copyToClipBoard}>Copy</button>
                <ToastContainer position="top-right" autoClose={1500} pauseOnHover={false} theme="dark"/>
            </section>
            
            <section className="flex justify-around align-middle bg-yellow-300">

                <label htmlFor="">
                    <input  type="range" min={8} max={100} onChange={(e) => updateLength(e.target.value)}/>
                    Lenght : ({Length})
                </label>

                <label htmlFor="numberCheckbox">
                    <input id="numberCheckbox" type="checkbox" onClick={() => {
                        updateNumberInUse(!NumberInUse);
                        randomPasswordGenerator();
                        }}/>
                    Numbers
                </label>

                <label htmlFor="characterCheckbox">
                    <input id="characterCheckbox" type="checkbox" onClick={()=>updateCharacterInUse(!characterInUse)}/>
                    Characters
                </label>

            </section>
            
        </div>
    );
}

export default parent;
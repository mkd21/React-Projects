import { useState } from "react";
import { memo } from "react";

const memoiseAddTweetComponent = memo(function addTweet({addTweetHandling})
{
    const [text , updateText] = useState("");
    return(
        <>
            <input placeholder = "Write the tweet..." value = {text} onChange={(e) => updateText(e.target.value)}/>
            <button 
                onClick={() => {
                    if(text == "") return;
                    
                    addTweetHandling(text);
                    updateText("");
                }}>
                Add Tweet
            </button>
        </>
    );
})

export default memoiseAddTweetComponent;
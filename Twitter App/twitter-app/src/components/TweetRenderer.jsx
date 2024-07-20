import "../CSS/StyleTweetRenderer.css";
import "../CSS/Tweet_Content_Style.css";
import "../CSS/Like_Count_Style.css";
import { useState } from "react";

import { memo } from "react";

// packing the whole component inside the momo. to prevent the component from re rendering if no porps gets updated
const memoisedComponent = memo(function tweetRenderer({ tweetId , content , LikesCount , tweetTime , tweetUpdater , date}) {  

    const [isEditing , updateIsEditing] = useState(false);

    return(
        <div className="TweetdisplayBox">

            <div className="tweetContent">
                {
                    (isEditing) ? <input 
                                    value={content} 
                                    onChange={(e) => {
                                       tweetUpdater({
                                            id : tweetId,
                                            Content : e.target.value,
                                            LikesCount : LikesCount,
                                            tweetTime : tweetTime,
                                            date : date
                                       })
                                    }}
                                /> 
                    : content
                }
                                                                                                             {/* it was not rendering because the way we were passing the content prop. it was treated as an object */}
                {/* {(isEditing) ? <input value={content} onChange={(e) => console.log(e.target.value)} /> : {content} } */}
            </div>

            <button onClick={ () => updateIsEditing(!isEditing)}>
                {(isEditing) ? "Save" : "Edit"}
            </button>


            <div className = "likesOnTweet">{LikesCount} Likes</div>
            <div className="tweetTime likesOnTweet">Tweeted at: {tweetTime}</div>
        </div>
    );
})

export default memoisedComponent;
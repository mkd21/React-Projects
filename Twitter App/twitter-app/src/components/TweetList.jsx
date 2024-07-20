import TweetRenderer from "./TweetRenderer.jsx";

function tweetList({tweetData , tweetUpdate})
{
    
    return(
       <ul  style={{border: "1px dashed green" , paddingTop : "12px" , listStyleType : "none"}}>
            {
                tweetData.map( (tweetIter) => 
                {
                    return(
                        <li key={tweetIter.id}> 
                        
                            <TweetRenderer content = {tweetIter.Content} 
                                           LikesCount = {tweetIter.Likes} 
                                           tweetTime = {tweetIter.tweetTime} 
                                           tweetId = {tweetIter.id}
                                           date = {tweetIter.date}
                                           tweetUpdater = {tweetUpdate}
                            /> 
                            
                        </li>
                    )
                })
            }
       </ul>
    );
}

export default tweetList; 
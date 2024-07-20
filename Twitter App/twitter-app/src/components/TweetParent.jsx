import { useState , useCallback } from "react";
import AddTweet from "./AddTweet.jsx";
import Tweetlist from "./TweetList.jsx";


function timeUpdater()
{
    let Hour = new Date().getHours();
    let Minutes = new Date().getMinutes();
    let Seconds = new Date().getSeconds();

    let x = new Date().getDay();
    let day;
    switch(x)
    {
        case 0 : day = "Sunday"; break; 
        case 1 : day =  "Monday"; break;  
        case 2 : day = "Tuesday"; break;  
        case 3 : day = "Wednesday"; break;
        case 4 : day = "Thursday"; break;
        case 5 : day = "Friday"; break;  
        case 6 : day = "Saturday"; break;  
    }

    let time = `${Hour}: ${Minutes} : ${Seconds} on ${day}`;
    return time;
}

let arrayData = [
    {id : 1 , Content : "First Tweet" , Likes : 10 , tweetTime : timeUpdater() , date : new Date()},
    {id : 2 , Content : "Second Tweet after some changes in functionalities" , Likes : 131 , tweetTime : timeUpdater() , date : new Date()},
    {id : 3 , Content : "Third Tweet after some more improvement" , Likes : 234 , tweetTime : timeUpdater() , date : new Date()}
];

function tweetParent()
{   
    const [tweets , updateTweets] = useState(arrayData);

    // packing the function inside useCallback hook to prevent it from re creation just because the parent component has re-rendered
    let manageTweetAdding = useCallback((text) => {
    
        updateTweets([...tweets , {
            id : (tweets.length > 0) ? tweets[tweets.length - 1].id + 1 : 0,
            Content : text,
            Likes : Math.floor(Math.random() * 20),
            tweetTime : timeUpdater(),
            date : new Date()
        }]);

    } , [tweets]);

    // packing the function inside useCallback hook to prevent it from re creation just because the parent component has re-rendered
    let editTweet = useCallback((updatedTweet) =>{
        
        tweets.map( (iter) => {
            if(iter.id == updatedTweet.id)
            {
                iter.Content = updatedTweet.Content;
                updateTweets([...tweets]);
            }
        })

        // method 2   both the methods are doing the same work.

        // updateTweets(
        //     tweets.map( (iter) =>{
        //         if(iter.id == updatedTweet.id)
        //         {
        //             return updatedTweet;
        //         }
        //         else
        //         {
        //             return iter;
        //         }
        //     })
        // );
    } , [tweets]);

    // packing the function inside useCallback hook to prevent it from re creation just because the parent component has re-rendered
    let sortTweet = useCallback( () =>{

       tweets.sort( (a , b) => b.date - a.date);
       updateTweets([...tweets]);

    } , [tweets]);

    return (
        <>
            <AddTweet addTweetHandling = {manageTweetAdding} />
            <button onClick={sortTweet}>Sort Tweets</button>
            <Tweetlist tweetData = {tweets} tweetUpdate = {editTweet} />
        </>
    );
}

export default tweetParent;
function winnerDecider(board , symbol)
{
    if( (board[0] == board[1]) &&   (board[1] == board[2]) && (board[2] == symbol) ) return symbol;
    if( (board[3] == board[4]) &&   (board[4] == board[5]) && (board[5] == symbol) ) return symbol;
    if( (board[6] == board[7]) &&   (board[7] == board[8]) && (board[8] == symbol) ) return symbol;


    console.log("checking for vertical matches");
       
    if( (board[0] == board[3]) &&   (board[3] == board[6]) && (board[6] == symbol) )
    {
        console.log("first column");
        return symbol;
    } 

    if( (board[1] == board[4]) &&   (board[4] == board[7]) && (board[7] == symbol)) 
    {
        console.log("second column");
        return symbol;
    }

    if( (board[2] == board[5]) &&   (board[5] == board[8]) && (board[8] == symbol))
    {
        console.log("third column");
        return symbol;
    } 

    // Diagonal 

    if( (board[2] == board[4]) &&  (board[4] == board[6]) && (board[6] == symbol))
    {
        console.log("diagonal from right to left");
        return symbol;
    } 
    if((board[0] == board[4]) && (board[4] == board[8]) && (board[8] == symbol) )
    {
        console.log("diagonal from left to right");
        return symbol;
    } 

    return "";
}

export default winnerDecider;
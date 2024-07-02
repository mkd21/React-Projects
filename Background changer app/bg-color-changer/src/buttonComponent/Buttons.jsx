function btns(props){
    // console.log(props.content);
    // console.log(props);

    const tailwind = "pr-3 pl-3 text-lg font-bold border-none rounded-md mr-3 border-2";
    let buttonStyles = {};
    if(props.content == "Black"){
        buttonStyles = {
            backgroundColor : props.content,
            color : "white"
        }
    }
    else {
        buttonStyles = {
            backgroundColor : props.content
        }
    }
    
    return(
        <>
            <button onClick={() => props.bgChanger(props.content)} className = {tailwind} style={buttonStyles}>{props.content}</button>
        </>
    );

}

export default btns;
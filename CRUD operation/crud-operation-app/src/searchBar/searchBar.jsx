

function searchBar() {
  return (

    <div className="bg-slate-500 p-1 mt-6 mb-6" style={{width : "484px" , marginLeft : "34%"}}>

        <input type="text" placeholder="Add Title" className="mr-3 pl-2"/>
        <input type="text" placeholder="Add Post" className="mr-3"/>

        <button className="bg-green-400 w-20 p-1" >ADD</button>
    </div>

  )
}

export default searchBar

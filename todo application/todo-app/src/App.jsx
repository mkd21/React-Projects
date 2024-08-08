import ParentComponent from "./components/parent.jsx";

let design = {
  backgroundColor : "black",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  height : "100vh"
}

function App() {
  return (
    <div style={design}>
     <ParentComponent />
    </div>
  )
}

export default App

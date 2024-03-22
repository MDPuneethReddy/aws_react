
import './App.css';
import axios from "axios"
import {useEffect,useState} from "react"
function App() {
  const [text,setText]=useState("")
  console.log(process.env.REACT_APP_BACKENDURL)
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKENDURL}`)
  .then( (response)=> {
    console.log(response);
    setText(response.data)
  })
  .catch( (error) =>{
    // handle error
    console.log(error);
  })
  },[])
  return (
    <div className="App">
      <p>{text}</p>
    </div>
  );
}

export default App;

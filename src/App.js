import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "./components/Header";
import Nav from "./components/Nav";
import axios from "axios"
import { useEffect,useState } from "react";
import Main from "./components/Main";


function App() {
  const url = "https://course-api.com/react-tabs-project";
  
  const [info, setInfo] = useState()
  
  const getInfo = async ()=> {
    
    try {
      const {data} = await axios.get(url)
      setInfo(data)
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    
    
  }
  console.log(info);
  useEffect(() => {
    getInfo();
  }, [])
  
  

  return (
  <>
    <Header/>
    <Nav/>
    <Main info={info}/>
  </>
  )
}

export default App;

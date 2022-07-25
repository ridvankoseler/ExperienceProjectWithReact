import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Experince from './components/Experince';
import Section from './components/Section';



const App = () => {
    const url ='https://course-api.com/react-tabs-project';

    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState([])
    const [value, setValue] = useState(0)
    
    const getInfo = async () => {
        const {data} = await axios.get(url)
        setInfo(data)
        setLoading(false)
    };

    useEffect(() => {
      getInfo()
      
    }, [])
    // console.log(info[2]);
    
  return (
    <>
        {
            loading ? 
                <Loading/> 
                    : 
            <div>
                <Header/>
                <div>
                    <Section btnInfo={info} value={value} setValue={setValue} />
                    <Experince info={info[value]}/>
                </div>
                
            </div> 
        }

    </>
  )
}

export default App
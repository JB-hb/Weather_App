import REACT,{useState}from 'react'
import axios from 'axios'
import Header from './components/header/header.jsx'
import darkContext from './context/darkContext.js'


function App() {

  const [data , setData] = useState({})
  const [location, setLocation] = useState('')
  const [dark, setDark] = useState(false)  
  const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=3e16832e1a67fffd264f6a23170156a7'


  return (
    <div className="App">
      <darkContext.Provider value={{dark, setDark}}>
       <Header/>
      <div className='Container'>
        das
      </div>
      </darkContext.Provider>
    </div>
  );
}

export default App;

import REACT,{useState}from 'react'
import axios from 'axios'
import Header from './components/header/header.jsx'
import darkContext from './context/darkContext.js'
import {TiWeatherDownpour, TiWeatherSunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy,TiWeatherCloudy,TiWeatherWindy} from 'react-icons/ti'
import {WiHumidity} from 'react-icons/wi'
import {FaTemperatureHigh} from 'react-icons/fa'
import {FaCompressArrowsAlt} from 'react-icons/fa'
import Weather from './components/weather/weather.jsx'
import Datos from './components/datos/datos.jsx'

function App() {

  
  const [data , setData] = useState({});
  const [location, setLocation] = useState('');
  const [dark, setDark] = useState(false)  ;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3e16832e1a67fffd264f6a23170156a7&units=metric`;
  const rain = <TiWeatherDownpour size={90}/>
  const clear = <TiWeatherSunny size={90}/>
  const storm = <TiWeatherStormy size={90}/>
  const snow = <TiWeatherSnow size={90}/>
  const drizle = <TiWeatherShower size={90}/>
  const clouds = <TiWeatherCloudy size={90}/>
  const weather = data.weather
  const listData = weather != undefined ? [[<TiWeatherWindy size={25}/>, data.wind.speed, 'Wind Speed (m/s)', 'speed'],
  [<WiHumidity size={25}/>, data.main.humidity, 'Humidity', 'humi'],
  [<FaTemperatureHigh size={25}/>, data.main.temp, 'Temperature (°C)', 'temp'],
  [<FaCompressArrowsAlt size={25}/>, data.main.pressure, 'Pressure (Pa)','pressure']] : []
  const darkStyle = {
    backgroundColor:"rgb(109, 109, 109)",
    color: 'rgba(251, 165, 0, 1)'
  }

  const changeDataHandler = (e) => {

    e.preventDefault()

    axios.get(url).then(response=>{
      setData(response.data);
      setLocation('')
    })
  }

  const weatherData = (we) =>{
    if (we === 'Thunderstorm'){
      return(storm)
    }
    else if(we ==='Drizzle'){
      return(drizle)
    }
    else if(we === 'Rain'){
      return(rain)
    }
    else if(we ==='Snow'){
      return(snow)
    }
    else if(we === 'Clear'){
      return(clear)
    }
    else{
      return(clouds)
    }
  }

  return (
    <div className="App" style={dark? {backgroundColor:'rgba(134, 134, 134, 1)'} : {backgroundColor:'white'}}>
      <darkContext.Provider value={{dark, setDark}}>
      <Header/>
      </darkContext.Provider>
      <div className='cc'>
        <div className='Container' style={dark ? darkStyle:{backgroundColor:'white'}}>
          <form onSubmit={changeDataHandler}>
            <input
              value={location}
              onChange={ev => setLocation(curr => curr = ev.target.value)}
              type='text' 
              placeholder='Enter City'
              className='scity'
            />
            <input
              type='submit'
              value={'Search'}
              className='search'
            />
          </form>
          <h1 className='city' style={dark ? darkStyle:{backgroundColor:'white'}}>{data.name}</h1>
          <Weather icon = {data.weather != undefined ? weatherData(weather[0].main) : ""} weth = {data.weather != undefined ? weather[0].main : ''}/>
          {data.weather != undefined && listData.map(dato =>
            <Datos icon={dato[0]} name={dato[2]} content={dato[1]} clas={dato[3]}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

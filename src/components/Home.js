import {  useState } from "react"
import wind from ".././assets/images/wind.png"
import humidity from ".././assets/images/humudity.png"
const Home = () => {
    const [inputVal, setInputVal] = useState('')
    const [icon, setIcon] = useState('')
    const [data, setData] = useState('')
    const WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=`
    const API_KEY = "3219171859640e5b58059d6d59d90981"
    const IMG_URL = `https://openweathermap.org/img/wn/${icon}@2x.png`

    // useEffect(() => {
    //     getWeather()
    // }, [])
    const getWeather = async () => {
        const data = await fetch(WEATHER + API_KEY)
        const result = await data.json()
        console.log(result)
        console.log(inputVal)
        result.weather.map(item => setIcon(item.icon))
        setData(result)
    }

    return (
        <div className="m-5  w-full bg-blue-200">
            <div className="w-3/5 mx-auto bg-blue-400 h-screen " >
                <div className="flex px-10 ">
                    <input type="text" className="w-[90%] border border-gray-400 p-2 rounded-md mt-5" placeholder="search city" onChange={(e) => setInputVal(e.target.value)} />
                    <button className="w-28 ml-2 bg-green-300 border border-gray-500 rounded-md mt-5" onClick={() => getWeather()}>submit</button>
                </div>
                {data &&
                    <div>
                        <div className="flex align-middle justify-center mt-10 text-white">
                            <img src={IMG_URL} alt="weather mood" className="w-36 h-36" />
                        </div>
                        <div className="flex align-middle justify-center  text-white">

                            <div className="flex flex-col items-center">
                                {data && <div>{Math.round(data.main.temp)}'C
                                </div>}
                                <div>{data.name}</div>
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div className="flex text-white">
                                <img src={humidity} alt="wind" className="w-20 h-16" />
                                <div className="ml-2">
                                    <div>{data && data.main.humidity}%</div>
                                    <div>Humidity</div>
                                </div>

                            </div>
                            <div className="flex text-white">
                                <img src={wind} alt="wind" className="w-20 h-16" />
                                <div className="ml-2">
                                    <div>{data && Math.round(data.wind.speed)} km/h</div>
                                    <div>Wind</div>
                                </div>
                            </div>

                        </div>

                    </div>
                }
                </div>
        </div>
    )


}
export default Home
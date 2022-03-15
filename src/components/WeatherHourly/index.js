import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { WeatherItem } from "../WeatherItem"
import { Wrapper } from "./style"
const WeatherHourly = ({ weatherData }) => {
   const { date } = useParams()
   const [hourly, setHourly] = useState([])
   console.log(date);
   useEffect(() => {
      const data = weatherData.filter(e => e.date === date);
      setHourly(data[0]?.hourly)
   }, [date, weatherData])
   return (
      <Wrapper>
         {
            hourly?.map((e, i) => (
               <WeatherItem
                  key={i}
                  date={e.dt_txt}
                  icon={e.weather[0].icon}
                  min={e.main.temp_min}
                  max={e.main.temp_max}
                  main={e.weather[0].main}
                  description={e.weather[0].description}
               />
            )
            )
         }
      </Wrapper>
   )
}
export default connect(({ weather: { weatherData } }) => ({ weatherData }))(WeatherHourly)
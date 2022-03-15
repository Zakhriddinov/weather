import React from 'react'
import {  Wrapper } from './style'

const WeatherItem = (props) => {
   const maxTemp = Math.floor(props.max - 273.15)
   const minTemp = Math.floor(props.min - 273.15)
   return (
    

         <Wrapper>
            <div className='date'>{props.date}</div>
            <div className='style'>
               <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather-icon" />
               <div>
                  <div className="main">{props.main}</div>
                  <div className="description">{props.description}</div>
               </div>
            </div>
            <div className='degree'>
               <div className='min'>+{props.min}°...</div>
               <div className='max'>+{props.max}°</div>
            </div>
         </Wrapper>
    
   )
}
export { WeatherItem }
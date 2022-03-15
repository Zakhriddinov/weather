import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getWeather } from '../../redux/weather';
import WeatherDateList from '../WeatherDateList';
import WeatherHourly from '../WeatherHourly';
import { Wrapper } from './style'

const WeatherList = ({ getWeather }) => {
   useEffect(() => {
      getWeather()
   }, [])

   return (
      <Wrapper>
         <Routes>
            <Route path='/' element={<WeatherDateList />} />
            <Route path='/:date' element={<WeatherHourly />} />
         </Routes>
      </Wrapper>
   )
}
export default connect(({ weather: { weatherData } }) => ({ weatherData }), { getWeather })(WeatherList)
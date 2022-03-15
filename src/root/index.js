import React from 'react'
import  WeatherList  from '../components/WeatherList'
import { Container } from './style'

const Root = () => {
   return (
      <Container>
         <WeatherList />
      </Container>
   )
}
export { Root }
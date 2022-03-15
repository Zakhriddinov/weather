import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../redux/weather'
import api from './middleware/api'

export default configureStore({
   reducer: {
      weather: weatherReducer
   },
   middleware: [api]
})
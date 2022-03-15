import { createSlice } from "@reduxjs/toolkit";
import { getApi } from "../axios";
import { apiCall } from "./api";


const initialState = {
   weatherData: [],
   hourly: []
}
const slice = createSlice({
   name: "weather",
   initialState,
   reducers: {
      getFromResponse: (state, action) => {
         state.weatherData = action.payload
      }
   }
})

export const getWeather = () => apiCall()

export default slice.reducer

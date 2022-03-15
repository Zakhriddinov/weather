import axios from 'axios'

export const getApi = axios.create({
   baseURL: "https://api.openweathermap.org",
   params: {
      appid: "c4ec1a5f945d59f0f779f508871eec88",
      units:"metric"
   }
})
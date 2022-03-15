import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Item, Wrapper } from "./style"

const WeatherDateList = ({ weatherData }) => {
   return (
      <Container>
         <Wrapper>
            <h3>Detailed forecast for 5 days Per month</h3>
            <Item>
               {
                  weatherData?.map((e, i) => (
                     <Link to={`/${e.date}`} key={i}>
                        {e.date}
                     </Link>
                  ))
               }
            </Item>
         </Wrapper>
      </Container>
   )
}
export default connect(({ weather: { weatherData } }) => ({ weatherData }))(WeatherDateList)
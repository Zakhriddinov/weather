import styled from 'styled-components'
import { css } from 'styled-components'
import bg from '../../assets/images/bg.jpg'


const common = css`
display: flex;
align-items: center;
justify-content: center;
`
export const Container = styled.div`
height: 100vh;
width: 100%;
background: whitesmoke;
${common}
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
width: 900px;
height: 300px;
background:white;
border-radius: 10px 10px 10px 10px;
h3{
  margin: 20px 60px;
  font-family: 'Courier New', Courier, monospace;
}
`
export const Item = styled.div`
${common}
 a{
  touch-action: manipulation;
   padding: 30px 30px;
   text-decoration: none;
   border-radius: 10px;
   font-size: 24px;
   color: rgba(0,0,0,0.5);
   transition: all .3s linear;
   border: 1.1px solid transparent;
   font-family: 'Courier New', Courier, monospace;
   &:hover{
     border: 1px solid grey;
     box-shadow: 0 3px 6px 1px  rgba(0,0,0,0.16);
     background: white;
    }
 }
`
import styled from "styled-components"


export const Wrapper = styled.div`
   width: 150px;
   height: 200px;
   background: white;
   border: 1px solid whitesmoke;
   margin-bottom: 15px;
   border-radius: 10px;
   margin-right: 15px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   box-shadow: 0px 1px 3px whitesmoke;;
   transition:0.5s;

   &:hover{
      box-shadow: 0px 1px 5px rgba(0,0,0,0.3);
   }
   .date{
     text-align: center;
     margin: 10px;
     font-family: 'Courier New', Courier, monospace;
   }  
   img{
     width :70px ;
   }
   .style{
      display: flex;
      align-items: center;
      .main{
         font-size: 12px;
         font-family: 'Courier New', Courier, monospace;
         font-weight: bold;
         margin-bottom: 5px;
      }
      .description{
         font-size: 10px;
         font-family: 'Courier New', Courier, monospace;
         color: grey;

      }
   }
  
   .degree{
      display: flex;
      .max{
         font-weight: bold;
         font-family: 'Courier New', Courier, monospace;
         font-size: 14px;
      }
      .min{
         font-weight: bold;
         font-family: 'Courier New', Courier, monospace; 
         color :grey ;
         font-size: 14px;
      }
   }
`
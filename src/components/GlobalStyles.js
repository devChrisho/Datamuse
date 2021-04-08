import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;400;500;600;700;800;900&display=swap');

* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Work Sans', sans-serif;
:focus{
  outline: none;
}
}
html {
font-size: 62.5%;
}

.App{
  background-image: linear-gradient(45deg,
    #ffb6c1 ,
    #ffb6d9,
    #feb6ff,
    #e3b6ff);
  background-size: 300%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
animation: bgmove infinite alternate 40s;

}

@keyframes bgmove {
  from {background-position:left}
  to{background-position: right}
}

`;

export default GlobalStyles;

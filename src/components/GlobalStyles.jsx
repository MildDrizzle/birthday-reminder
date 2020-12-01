import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    
}
body {
    font-family: 'Josefin Sans', sans-serif;
   background: #41295a;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2F0743, #41295a);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
`;

export default GlobalStyles;

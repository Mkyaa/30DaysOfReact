// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './css/style.css'


// const hexaColor = () => {
//   let digit = '0123456789abcdef'
//   let color = ''
//   for (let i = 0; i < 6; i++) {
//     const index = Math.floor(Math.random() * digit.length)
//     color += digit[index]
//   }
//   return '#' + color
// }

// const color1 = hexaColor(),
//   color2 = hexaColor(),
//   color3 = hexaColor(),
//   color4 = hexaColor(),
//   color5 = hexaColor()

// const styleHexa1 = {
//   backgroundColor: color1
// }
// const styleHexa2 = {
//   backgroundColor: color2
// }
// const styleHexa3 = {
//   backgroundColor: color3
// }
// const styleHexa4 = {
//   backgroundColor: color4
// }
// const styleHexa5 = {
//   backgroundColor: color5
// }


// const HexaColor = () => {
//   return (
//     <div className='hexa-wrapper'>
//       <div style={styleHexa1}>{color1}</div>
//       <div style={styleHexa2}>{color2}</div>
//       <div style={styleHexa3}>{color3}</div>
//       <div style={styleHexa4}>{color4}</div>
//       <div style={styleHexa5}>{color5}</div>
//     </div>
//   )
// }

// const Main =()=>{
//   return(
//     <div className='main-wrapper'>
//     <HexaColor/>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div className='app'>
//       <Main />
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

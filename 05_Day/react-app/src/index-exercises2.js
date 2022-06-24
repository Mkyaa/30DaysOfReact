// import React from 'react'
// import ReactDOM from 'react-dom'
// import './css/style.css'


// const HexaColor = ({ 
//     rndColor: { color1, color2, color3, color4, color5, color6 }, 
//     bgColors : {bgColor1 , bgColor2, bgColor3, bgColor4, bgColor5, bgColor6}
// }) => {
//     return (
//         <div className='hexa-wrapper'>
//             <div style={bgColor1}>{color1}</div>
//             <div style={bgColor2}>{color2}</div>
//             <div style={bgColor3}>{color3}</div>
//             <div style={bgColor4}>{color4}</div>
//             <div style={bgColor5}>{color5}</div>
//             <div style={bgColor6}>{color6}</div>
//         </div>
//     )
// }

// const App = () => {
//     const hexaColor = () => {
//         const digit = '0123456789abcdef'
//         let color = ''
//         for (let i = 0; i < 6; i++) {
//             const index = Math.floor(Math.random() * digit.length)
//             color += digit[index]
//         }
//         return '#' + color
//     }
//     const rndColor = {
//         color1: hexaColor(),
//         color2: hexaColor(),
//         color3: hexaColor(),
//         color4: hexaColor(),
//         color5: hexaColor(),
//         color6: hexaColor(),
//     }
//     const bgColorStyle = {
//         bgColor1: {
//             backgroundColor: rndColor.color1
//         },
//         bgColor2: {
//             backgroundColor: rndColor.color2
//         },
//         bgColor3: {
//             backgroundColor: rndColor.color3
//         },
//         bgColor4: {
//             backgroundColor: rndColor.color4
//         },
//         bgColor5: {
//             backgroundColor: rndColor.color5
//         },
//         bgColor6: {
//             backgroundColor: rndColor.color6
//         }
//     }

//     return (
//         <div className='app'>
//             <HexaColor rndColor={rndColor} bgColors={bgColorStyle} />
//         </div>
//     )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
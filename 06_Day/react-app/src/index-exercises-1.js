// import React from "react"
// import ReactDOM from "react-dom/client"
// import './css/style.css'

// //from 0 to 32 prime number creator
// const getPrimeNum = () => {
//     const arr = []
//     for (let i = 0; i < 32; i++) {
//         if (i % 2 === 0) {
//             arr.push({
//                 number: i,
//                 bgColor: "#21bf73",
//             })
//         }
//         else {
//             arr.push({
//                 number: i,
//                 bgColor: "#fddb3a",
//             })
//         }
//         if (i >= 2) {
//             let control = 0
//             for (let j = 2; j < i; j++) {
//                 if (i % j === 0) {
//                     control++
//                     break
//                 }
//             }
//             if (control === 0) {
//                 arr[i].bgColor = '#fd5e53'
//             }
//         }
//     }
//     return arr
// }

// const numberObj = getPrimeNum()

// //Header component
// const Header = () => {
//     return (
//         <div className="header-wrapper">
//             <h1>30 Days Of React</h1>
//             <h3>Number Generator</h3>
//         </div>
//     )
// }

// //Number Component
// const Number =({number : {number, bgColor}})=>{
//     return <li style={{backgroundColor : bgColor}}>{number}</li>
// }

// //Main component
// const Main = ({ numberObj }) => {
//     const numberObjList = numberObj.map(number=> <Number key={number.number} number={number} />)
//     return (
//         <div className="main-wrapper">
//             <ul>{numberObjList}</ul>
//         </div>
//     )
// }

// //Footer component
// const Footer = () => {
//     return <div>Footer</div>
// }

// //App
// const App = () => {
//     return (
//         <div className="app">
//             <Header />
//             <Main numberObj={numberObj} />
//             <Footer />
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />)

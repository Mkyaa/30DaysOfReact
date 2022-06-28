// import React from "react"
// import ReactDOM from "react-dom/client"
// import './css/style.css'

// const randomGenerator = () => {
//     const digit = '0123456789abcdef'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//         const index = Math.floor(Math.random() * digit.length)
//         color += digit[index]
//     }
//     return '#'+color
// }
// const getDecimal = () => {
//     const arr = []
//     for (let i = 0; i < 32; i++) {
//         arr.push(randomGenerator())
//     }
//     return arr
// }

// const hexObj = getDecimal()

// //Header component
// const Header = () => {
//     return (
//         <div className="header-wrapper">
//             <h1>30 Days Of React</h1>
//             <h3>Hexadecimal Colors</h3>
//         </div>
//     )
// }


// //Main component
// const Main = ({hexObj}) => {
//     const hexList = hexObj.map((hex,i)=> <li key={i} style={{backgroundColor : hex}} >{hex}</li>)
//     return (
//         <div className="main-wrapper">
//             <ul>
//                 {hexList}
//             </ul>
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
//             <Main hexObj ={hexObj} />
//             <Footer />
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />)

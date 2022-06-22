// import React from 'react'
// import ReactDOM from 'react-dom'
// import mertImage from './images/pp.jpg'

// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'Mert',
//   lastName: 'Kaya'
// }
// const date = 'Jun 22, 2022'

// // JSX element, header
// const header = (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>Instructor:{author.firstName} {author.lastName}</p>
//       <small>Date: {date}</small>
//     </div>
//   </header>
// )

// const numOne = 3
// const numTwo = 2
// const result = (
//   <p>
//     {numOne} + {numTwo} = {numOne + numTwo}
//   </p>
// )
// const yearBorn = 1994
// const currentYear = new Date().getFullYear()
// const age = currentYear - yearBorn
// const personAge = (
//   <p>
//     {' '}
//     {author.firstName} {author.lastName} is {age} years old.
//   </p>
// )

// const techs = ['HTML', 'CSS', 'Javacsript']
// const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>)

// const user =(
//   <div >
//     <img src={mertImage} alt='mert image' className='user-pp'></img>
//   </div>
// )

// // JSX element, main
// const main = (
//   <main>
//     <div className='main-wrapper'>
//       <p>
//         Prerequisite to get started{' '}
//         <strong>
//           <em>react.js</em>
//         </strong>
//         :
//       </p>
//       <ul>
//       {techsFormatted}
//       {personAge}
//       {result}
//       {user}
//       </ul>
//     </div>
//   </main>
// )

// const copyRight = 'Copyright 2022'

// // JSX element, footer
// const footer = (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>{copyRight}</p>
//     </div>
//   </footer>
// )

// // JSX element, app
// const app = (
//   <div className='app'>
//     {header}
//     {main}
//     {footer}
//   </div>
// )

// const rootElement = document.getElementById('root')
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(app, rootElement)
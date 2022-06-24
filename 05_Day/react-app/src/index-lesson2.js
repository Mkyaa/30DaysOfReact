// import React from 'react'
// import ReactDOM from 'react-dom'

// //Button Props
// const showDate = time => {
//     const months = ['January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December']

//     const month = months[time.getMonth()].slice(0, 3)
//     const year = time.getFullYear()
//     const date = time.getDate()
//     return `${month} ${date}, ${year}`
// }

// const Header = (props) => {
//     const data = props.data
//     const {
//         welcome,
//         title,
//         subtitle,
//         author: { firstName, lastName },
//         date
//     } = data

//     return (
//         <header>
//             <h1>{welcome}</h1>
//             <h2>{title}</h2>
//             <h3>{subtitle}</h3>
//             <p>{firstName} {lastName}</p>
//             <small>{showDate(date)}</small>
//         </header>
//     )
// }

// const App = () => {
//     const data = {
//         welcome: 'Welcome to 30 Days Of React',
//         title: 'Getting Started React',
//         subtitle: 'JavaScript Library',
//         author: {
//             firstName: 'Mert',
//             lastName: 'Kaya',
//         },
//         date: new Date(),
//     }

//     return (
//         <div className='app'>
//             <Header data ={data} />
//         </div>
//     )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
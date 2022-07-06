// import React from 'react'
// import ReactDOM from 'react-dom'
// import './css/style.css'
// import morningTime from './images/morning.jpg'
// import noonTime from './images/noon.jpg'
// import eveningTime from './images/evening.jpg'
// import nightTime from './images/night.jpg'

// const changeBg = () => {
//     const hour = new Date().getHours()

//     const morningTime = [6, 7, 8, 9, 10, 11, 12],
//         noonTime = [13, 14, 15, 16, 17, 18],
//         eveningTime = [19, 20, 21, 22, 23, 24],
//         nightTime = [0, 1, 2, 3, 4, 5]
//     if (morningTime.includes(hour)) {
//         return 'Morning'
//     }
//     else if (noonTime.includes(hour)) {
//         return 'Noon'
//     }
//     if (eveningTime.includes(hour)) {
//         return 'Evening'
//     }
//     else if (nightTime.includes(hour)) {
//         return 'Night'
//     }
// }

// const Title = ({ timeOfTheDay}) => {
//         return (
//             <div className='title'>
//                 <h1>{timeOfTheDay}</h1>
//             </div>
//         )
//     }

// class App extends React.Component {

//     render() {
//         const timeOfTheDay = changeBg()
//         return (
//             <div className='app'>
//                 {timeOfTheDay.toLowerCase() === 'morning' && (document.body.style.backgroundImage = `url(${morningTime})`)}
//                 {timeOfTheDay.toLowerCase() === 'noon' && (document.body.style.backgroundImage = `url(${noonTime})`)}
//                 {timeOfTheDay.toLowerCase() === 'evening' && (document.body.style.backgroundImage = `url(${eveningTime})`)}
//                 {timeOfTheDay.toLowerCase() === 'night' && (document.body.style.backgroundImage = `url(${nightTime})`)}
//                 <Title timeOfTheDay={timeOfTheDay} />
//             </div>
//         )
//     }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
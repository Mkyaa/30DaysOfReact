// import React from 'react'
// import ReactDOM from 'react-dom'
// import './css/style.css'
// import springPic from './images/ilkbahar.jpg'
// import summerPic from './images/yaz.jpg'
// import autumnPic from './images/sonbahar.jpg'
// import winterPic from './images/kis.jpg'

// const getFullDate = () => {
//     const months = [
//         'January',
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
//         'December',
//     ]
//     const time = new Date()
//     const month = months[time.getMonth()].slice(0, 3)
//     const year = time.getFullYear()
//     const date = time.getDate()
//     return `${month} ${date}, ${year}`
// }
// const getSeason = () => {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     const date = getFullDate()
//     const filterDate = months.indexOf(date.slice(0, 3))
//     if (filterDate === 12 || filterDate === 1 || filterDate === 2) {
//         return 'WINTER'
//     }
//     else if (filterDate === 3 || filterDate === 4 || filterDate === 5) {
//         return 'SPRING'
//     }
//     else if (filterDate === 6 || filterDate === 7 || filterDate === 8) {
//         return 'SUMMER'
//     }
//     else if (filterDate === 9 || filterDate === 10 || filterDate === 11) {
//         return 'AUTUMN'
//     }
// }

// const Title = ({ season, date }) => {
//     return (
//         <div className='title'>
//             <h1>{season}</h1>
//             <h3>{date}</h3>
//         </div>
//     )
// }

// const date = getFullDate()
// const season = getSeason()


// class App extends React.Component {

//     render() {

//         return (
//             <div className='app'>
//                 {season === 'SPRING' && (document.body.style.backgroundImage = `url(${springPic})`)}
//                 {season === 'SUMMER' && (document.body.style.backgroundImage = `url(${summerPic})`)}
//                 {season === 'AUTUMN' && (document.body.style.backgroundImage = `url(${autumnPic})`)}
//                 {season === 'WINTER' && (document.body.style.backgroundImage = `url(${winterPic})`)}
//                 <Title season={season} date={date} />
//             </div>
//         )
//     }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
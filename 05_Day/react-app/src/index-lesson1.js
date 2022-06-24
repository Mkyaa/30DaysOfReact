// import React from 'react'
// import ReactDOM from 'react-dom'

// //Button Props
// const showDate = time =>{
//   const months=[ 'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December']

//   const month = months[time.getMonth()].slice(0,3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date}, ${year}`
// } 

// const sayHi =()=>{
//   alert('Welcome to 30 Days Of React Challenge, 2020')
// }
// const handleTime =()=>{
//   alert(showDate(new Date()))
// }

// // Button Component
// const Button  =(props) => <button onClick={props.onClick}>{props.text}</button>


// const App = () => {
//   return (
//     <div className='app'>
//     <Button text='Greet People' onClick={sayHi} />
//     <Button text='Show Time' onClick={()=> alert(new Date())} />
//     <Button text='Show Readable Time' onClick={handleTime}/>
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
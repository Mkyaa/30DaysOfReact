// import React from 'react'
// import ReactDOM from 'react-dom'
// import './css/style.css'

// const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

// const SubForm = ({ title, explain, onClick }) => {
//     return (
//         <div className='sub-form'>
//             <h1>{title}</h1>
//             <p>{explain}</p>
//             <div className='input-container'>
//                 <input type='text' placeholder='First Name' />
//                 <input type='text' placeholder='Last Name' />
//                 <input type='text' placeholder='Email' />
//             </div>
//             <Button text='Subscribe' onClick={onClick} />
//         </div>
//     )
// }

// const App = () => {
//     const title = 'SUBSCRİBE'
//     const explain = 'Sign up with your email address to recieve news and updates'
//     const showMes = () => {
//         alert('Subscription Successfull')
//     }

//     return (
//         <div className='app'>
//             <SubForm title={title} explain={explain} onClick={showMes} />
//         </div>
//     )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
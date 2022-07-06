// // index.js
// import React from 'react'
// import ReactDOM from 'react-dom'

// // A button component
// const Button = ({ text, onClick, style }) => (
//     <button onClick={onClick} style={style} >
//         {text}
//     </button>
// )

// // CSS styles in JavaScript Object
// const buttonStyles = {
//     backgroundColor: '#61dbfb',
//     padding: 10,
//     border: 'none',
//     borderRadius: 5,
//     margin: '3px auto',
//     cursor: 'pointer',
//     fontSize: 22,
//     color: 'white',
// }

// // class based component
// class Header extends React.Component {
//     render() {
//         console.log(this.props.data)
//         const {
//             welcome,
//             title,
//             subtitle,
//             author: { firstName, lastName },
//             date,
//         } = this.props.data

//         return (
//             <header>
//                 <div className='header-wrapper'>
//                     <h1>{welcome}</h1>
//                     <h2>{title}</h2>
//                     <h3>{subtitle}</h3>
//                     <p>
//                         {firstName} {lastName}
//                     </p>
//                     <small>{date}</small>
//                 </div>
//             </header>
//         )
//     }
// }

// const Welcome = () => (
//     <div>
//         <h3>Welcome to the 30 Days Of React</h3>
//     </div>
// )

// const Login = () => (
//     <div>
//         <h3>Please Login</h3>
//     </div>
// )

// class App extends React.Component {
//     state = {
//         loggedIn: false,
//         techs: ['HTML', 'CSS', 'JS']
//     }
//     handleLogin = () => {
//         this.setState({
//             loggedIn: !this.state.loggedIn
//         })
//     }
//     render() {
//         const data = {
//             welcome: '30 Days Of React',
//             title: 'Getting Started React',
//             subtitle: 'JavaScript Library',
//             author: {
//                 firstName: 'Mert',
//                 lastName: 'Kaya',
//             },
//             date: 'Jul 5, 2022',
//         }


//         const { techs, loggedIn } = this.state
//         const status = loggedIn ? <Welcome /> : <Login />

//         return (
//             <div className='app'>
//                 <Header data={data} />
//                 {status}
//                 <Button
//                     text={loggedIn ? 'Logout' : 'Login'}
//                     style={buttonStyles}
//                     onClick={this.handleLogin} 
//                 />
//                 {techs.length ===3 && (
//                 <p>You have all the prerequisite courses to get started React</p>
//                 )}
//                 {!loggedIn && (
//                 <p>Please login to access more information about 30 Days Of React
//                 challenge</p>
//                 )}
//             </div>
//         )
//     }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
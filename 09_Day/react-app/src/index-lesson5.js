// // index.js
// import React from 'react'
// import ReactDOM from 'react-dom'


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
//         <h3>You have successfully logged in</h3>
//     </div>
// )

// const Login = () => (
//     <div>
//         <h3>Please login</h3>
//     </div>
// )
// const Message = ({ message }) => (
//     <div>
//         <h1>{message}</h1>
//     </div>
// )

// const Button = ({ text, onClick, style }) => {
//     return <button style={style} onClick={onClick} >
//         {text}
//     </button>
// }

// const TechList =({techs})=>{
//     const techList = techs.map(tech => <li key={tech}>{tech}</li>)
//     return techList
// }

// // class based component
// class Main extends React.Component {
//     render() {
//         const { loggedIn, handleLogin, handleTime, greetPeople, message, techs } = this.props

//         const status = loggedIn ? <Welcome /> : <Login />

//         return (
//             <main>
//                 <div className='main-wrapper'>
//                     <p>SKILLS</p>
//                     <ul>
//                         <TechList techs={techs} />
//                         {techs.length === 3 && (<p>Only have 3 skills</p>)}
//                     </ul>
//                     {status}
//                     <Button
//                         text={loggedIn ? 'Logout' : 'Login'}
//                         onClick={handleLogin}
//                         style={buttonStyles}
//                     />{' '}
//                     <Button
//                         text='Greet People'
//                         onClick={greetPeople}
//                         style={buttonStyles}
//                     />{' '}
//                     <Button
//                         text='Show Time'
//                         onClick={handleTime}
//                         style={buttonStyles}
//                     />
//                     {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
//                     <Message message={message} />
//                 </div>
//             </main>
//         )
//     }
// }

// class App extends React.Component {
//     state = {
//         loggedIn: false,
//         techs: ['HTML', 'CSS', 'JS'],
//         message: 'Click show time or Greet people to change me'
//     }

//     handleLogin = () => {
//         this.setState({
//             loggedIn: !this.state.loggedIn
//         })
//     }

//     showDate = (time) => {
//         const months = [
//             'January',
//             'February',
//             'March',
//             'April',
//             'May',
//             'June',
//             'July',
//             'August',
//             'September',
//             'October',
//             'November',
//             'December',
//         ]

//         const month = months[time.getMonth()].slice(0, 3)
//         const year = time.getFullYear()
//         const date = time.getDate()
//         return `${month} ${date}, ${year}`
//     }

//     handleTime = () => {
//         const message = this.showDate(new Date())
//         this.setState({ message: message })
//     }

//     greetPeople = () => {
//         const message = 'Welcome to 30 Days Of React Challenge, 2022'
//         this.setState({ message: message })
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

//         return (
//             <div className='app'>
//                 <Header data={data} />
//                 <Main
//                     loggedIn={this.state.loggedIn}
//                     handleLogin={this.handleLogin}
//                     handleTime={this.handleTime}
//                     greetPeople={this.greetPeople}
//                     message={this.state.message}
//                     techs= {this.state.techs}
//                 />
//             </div>
//         )
//     }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
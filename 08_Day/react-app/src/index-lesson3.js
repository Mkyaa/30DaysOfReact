// // index.js
// import React from 'react'
// import ReactDOM from 'react-dom'
// import profPic from './images/pp.jpg'

// const showDate = (time) => {
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
//     const year = time.getFullYear(),
//         date = time.getDate(),
//         month = months[time.getMonth()].slice(0, 3)
//     return `${month} ${date}, ${year}`
// }

// class Header extends React.Component {
//     render() {
//         const { welcome, title, subtitle, author: { firstName, lastName }, date } = this.props.data
//         return (
//             <header>
//                 <div className='header-wrapper'>
//                     <h1> {welcome} </h1>
//                     <h3> {title} </h3>
//                     <h5> {subtitle} </h5>
//                     <p> {firstName.toUpperCase()} {lastName.toUpperCase()}</p>
//                     <small>{showDate(date)}</small>
//                 </div>
//             </header>
//         )
//     }
// }

// const TechList = ({ techs }) => {
//     const techList = techs.map(tech => <li key={tech}>{tech}</li>)
//     return techList
// }

// const UserCard = ({ user:{firstName, lastName}, techs }) => {
//     return (
//         <div className='user-card'>
//             <img src={profPic} alt='prof-pic'></img>
//             <h3> {firstName } {lastName } </h3>
//             <h3>SKILLS</h3>
//             <ul>
//                 <TechList techs={techs} />
//             </ul>
//         </div>
//     )
// }

// const Button = ({ text, onClick }) => {
//     return <button onClick={onClick}>{text}</button>
// }

// const Count = ({ count,addOne, minusOne }) => {
//     return (
//         <div>
//             <h1>{count} </h1>
//             <div>
//                 <Button text='+1' onClick={addOne} />
//                 <Button text='-1' onClick={minusOne} />
//             </div>
//         </div>
//     )
// }

// class Main extends React.Component {
//     render() {
//         const { user, techs, handleTime, greetPeople, changeBackground, addOne, minusOne, count } = this.props
//         return (
//             <main>
//                 <UserCard user={user} techs={techs} />
//                 <Button text='Show Time' onClick={handleTime}></Button>,
//                 <Button text='Greet People' onClick={greetPeople}></Button>
//                 <Button text='Change Background' onClick={changeBackground}></Button>
//                 <Count count={count} addOne={addOne} minusOne={minusOne} />
//             </main>
//         )
//     }
// }

// class App extends React.Component {
//     state = {
//         count: 0,
//         style: {
//             backgroundColor: '#fff',
//             color: '#0f172a'
//         }
//     }
//     addOne = () => {
//         const count = this.state.count
//         return this.setState({ count: count + 1 })
//     }
//     minusOne = () => {
//         const count = this.state.count
//         return this.setState({ count: count - 1 })
//     }
//     changeBackground = () => {
//         const bgDark = '#0f172a',
//             txtColorForDark = '#ccc',
//             bgLight = '#fff',
//             txtColorForLight = '#0f172a'
//         const backgroundColor = this.state.style.backgroundColor === bgLight ? bgDark : bgLight
//         const color = this.state.style.color === txtColorForLight ? txtColorForDark : txtColorForLight
//         return this.setState({ style: { backgroundColor, color } })
//     }
//     handleTime = () => {
//         alert(showDate(new Date()))
//     }
//     greetPeople = () => {
//         alert('Welcome to 30 Days Of React Challenge, 2022')
//     }
//     render() {
//         const data = {
//             welcome: 'Welcome to 30 Days Of React',
//             title: 'Getting Started React',
//             subtitle: 'JavaScript Library',
//             author: {
//                 firstName: 'Mert',
//                 lastName: 'Kaya',
//             },
//             date: new Date(),
//         }
//         const techs = ['HTML', 'CSS', 'JavaScript']
//         const date = new Date()
//         const user = { ...data.author, image: profPic }

//         return (
//             <div className='app' style={this.state.style}>
//                 <Header data={data} />
//                 <Main
//                     user={user}
//                     techs={techs}
//                     handleTime={this.handleTime}
//                     greetPeople={this.greetPeople}
//                     changeBackground={this.changeBackground}
//                     addOne={this.addOne}
//                     minusOne={this.minusOne}
//                     count={this.state.count}
//                 />
//             </div>
//         )
//     }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
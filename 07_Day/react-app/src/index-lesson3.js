import React from 'react';
import ReactDOM from 'react-dom/client';
import profilePic from './images/pp.jpg'

//Header Component
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { welcome, title, subtitle, author: { firstName, lastName }, date } = this.props.data
        return (
            <header>
                <h1> {welcome} </h1>
                <h2> {title} </h2>
                <h3> {subtitle} </h3>
                <p> {firstName} {lastName}</p>
                <small> {date} </small>
            </header>
        )
    }
}

//TechList Component
const TechList = ({ techs }) => {
    const techList = techs.map(tech => <li key={tech}>{tech}</li>)
    return techList
}

//User Component
const UserCard = ({ user: { firstName, lastName, profilePic } }) => {
    return (
        <div className='user-card'>
            <img src={profilePic} alt='profile pic' ></img>
            <h2>{firstName} {lastName}</h2>
        </div>
    )
}

//Button Component
const Button = ({ onClick, text }) => (
    <button onClick={onClick} >{text}</button>
)

//Main Component
class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={this.props.techs} />
                    </ul>
                    <UserCard user={this.props.user} />
                    <Button text='Show Time' onClick={this.props.handleTime} />
                    <Button text='Greet People' onClick={this.props.greetPeople} />
                </div>
            </main>
        )
    }
}

//Footer Component
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright {this.props.date.getFullYear()}</p>
                </div>
            </footer>
        )
    }
}

//App
class App extends React.Component {
    showDate = (time) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        const month = months[time.getMonth()].slice(0, 3)
        const year = time.getFullYear()
        const date = time.getDate()
        return `${month} ${date}, ${year}`
    }
    handleTime = () => {
        alert(this.showDate(new Date()))
    }
    greetPeople = () => {
        alert('Welcome to 30 Days Of React, Challenge, 2022')
    }
    render() {
        const data = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
                firstName: 'Mert',
                lastName: 'Kaya',
            },
            date: 'Jun 29, 2022',
        }
        const techs = ['HTML', 'CSS', 'JavaScript', 'Sass']
        const user = { ...data.author, profilePic }
        return (
            <div className='app'>
                <Header data={data} />
                <Main user={user} techs={techs} handleTime={this.handleTime} greetPeople={this.greetPeople} />
                <Footer date ={new Date()} />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
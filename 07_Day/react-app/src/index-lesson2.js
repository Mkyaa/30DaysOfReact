import React from 'react';
import ReactDOM from 'react-dom/client';

// Header Component
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { welcome, title, subtitle, author: { firstName, lastName }, date } = this.props.data

        return (
            <header>
                <div className='header-wrapper'>
                    <h1> {welcome} </h1>
                    <h2> {title} </h2>
                    <h3> {subtitle} </h3>
                    <p> {firstName} {lastName} </p>
                    <small> {date} </small>
                </div>
            </header>
        )
    }
}

// TechList Component
class TechList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {techs} = this.props
        const techList = techs.map(tech => <li key={tech}>{tech}</li>)
        return techList
    }
}

// Main Component
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
                </div>
            </main>
        )
    }
}

//App
class App extends React.Component {
    constructor(props) {
        super(props)
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
            date: 'Jun 29, 2020',
        }
        const techs = ['HTML', 'CSS', 'JavaScript']
        return (
            <div className="app">
                <Header data={data} />
                <Main techs={techs} />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
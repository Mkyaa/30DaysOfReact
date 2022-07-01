import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import { countriesData } from './countries'

const countries = countriesData

class Header extends React.Component {
    render() {
        const { data: { title, subtitle, author: { firstName, lastName } } } = this.props
        return (
            <div className='header-wrapper' >
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <h5>{firstName} {lastName}</h5>
            </div>
        )
    }
}

const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>
}

class Main extends React.Component {
    render() {
        const { name, flag, capital, language, population, currency, changeCountry } = this.props
        return (
            <div className='main-wrapper' >
                <img src={flag} alt='flag'></img>
                <h3>{name}</h3>
                <p><b>Capital :</b> {capital}</p>
                <p><b>Language :</b> {language}</p>
                <p><b>Population :</b> {population}</p>
                <p><b>Currency :</b> {currency}</p>
                <Button text='Change Counrty' onClick={changeCountry} />
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className='footer-wrapper'>
                <p>Copyright 2022</p>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        name: 'Turkey',
        flag: 'https://restcountries.eu/data/tur.svg',
        capital: 'Ankara',
        language: 'Turkish',
        population: '78741053',
        currency: 'Turkish lira'
    }
    changeCountry = () => {
        let name = this.state.name,
            flag = this.state.flag,
            capital = this.state.capital,
            language = this.state.language,
            population = this.state.population,
            currency = this.state.currency
        const index = Math.floor(Math.random() * countries.length)
        const newCountry = countries[index]
        console.log(index)
        name = newCountry.name
        flag = newCountry.flag
        capital = newCountry.capital
        language = newCountry.languages.join(', ')
        population = newCountry.population
        currency = newCountry.currency
        return this.setState({ name, flag, capital, language, population, currency })
    }
    render() {
        const data = {
            title: 'Welcome to 30 Days Of React',
            subtitle: 'Getting Started React',
            author: {
                firstName: 'Mert',
                lastName: 'Kaya',
                job: 'Junior Frontend Developer'
            }
        }
        return (
            <div className='app' >
                <Header data={data} />
                <Main
                    name={this.state.name}
                    flag={this.state.flag}
                    capital={this.state.capital}
                    language={this.state.language}
                    population={this.state.population}
                    currency={this.state.currency}
                    changeCountry={this.changeCountry}
                />
                <Footer />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
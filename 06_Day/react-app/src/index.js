import React from "react"
import ReactDOM from "react-dom/client"
import './css/style.css'

const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'USA', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russia', population: 146599183 },
    { country: 'Japan', population: 126960000 },
]
const totalPop = tenHighestPopulation[0].population

const getWidth =(pop)=>{
    const rate = (pop / totalPop) * 100
    return rate+'%'
}

//Header component
const Header = () => {
    return (
        <div className="header-wrapper">
            <h1>30 Days Of React</h1>
            <h3>Hexadecimal Colors</h3>
            <h5>Ten most populated countries</h5>
        </div>
    )
}

//TenPopulation component 
const TenPopulation = ({ tenPop: { country, population } }) => (
    <div className="country-cont">
        <div className="country">{country.toUpperCase()}</div>
        <div className="percent">
            <div style={{width: getWidth(population), backgroundColor:'#ffa500', height:'40px'}}></div>
        </div>
        <div className="population">{population}</div>
    </div>
)

//Main component
const Main = ({highestPop}) => {
    const popList = highestPop.map(pop => <TenPopulation key={pop.country} tenPop={pop} />)
    return (
        <div className="main-wrapper">
            {popList}
        </div>
    )
}

//App
const App = () => {
    return (
        <div className="app">
            <Header />
            <Main highestPop={tenHighestPopulation} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

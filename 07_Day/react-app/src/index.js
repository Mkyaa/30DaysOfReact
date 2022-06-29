import React from "react";
import ReactDOM from "react-dom/client"

const randomGen = () => {
    const digit = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * digit.length)
        color += digit[index]
    }
    return '#' + color
}

const getHexCode = () => {
    const arr = []
    for (let i = 0; i < 32; i++) {
        arr.push(randomGen())
    }
    return arr
}

//Header Component
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <h1>30 Days Of React</h1>
                    <h3>Hexadecimal Colors</h3>
                </div>
            </header>
        )
    }
}

//HexList Component
const HexLists = ({ hexLists }) => {
    const hexList = hexLists.map((hex, i) => <li key={i}>{hex}</li>)
    return hexList
}

//Main Component
class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <div className="main-wrapper">
                    <ul>
                        <HexLists hexLists={this.props.hexLists} />
                    </ul>
                </div>
            </main>
        )
    }
}

//App
class App extends React.Component {
    
    render() {
        const hexObj = getHexCode()
        return (
            <div className="app">
                <Header />
                <Main hexLists={hexObj} />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
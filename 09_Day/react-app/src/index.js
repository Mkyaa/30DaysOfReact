import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import pic from './images/night.jpg'



class App extends React.Component {
    state = {
        loading: true,
        backgroundImage: ''
    }
    pageLoad = () => {
        return this.setState({ loading: false })
    }
    bgLoad = () => {
        return this.setState({ backgroundImage: `url(${pic})` })
    }

    render() {
        const load = this.state.loading
        setTimeout(this.pageLoad, 2000)
        setTimeout(this.bgLoad, 2000)
        setTimeout(()=>{
            document.body.style.backgroundImage=this.state.backgroundImage
        },2000)
        return (
            <div className='app'>
                {load && (<h1>Loading...</h1>)}
                {!load && (<h1>Load.</h1>)}
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
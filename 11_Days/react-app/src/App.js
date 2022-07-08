import React, { Component } from "react";


class App extends Component {
  

    randomNum =()=>{
        const rndNum = Math.random() * 100
        return `${rndNum}`
    }
    
    handleMouseEnter=(e)=>{
        const h1 = document.getElementById('title')
        const x= this.randomNum()
        const y=this.randomNum()
        h1.style.top=`${x}%`
        h1.style.left=`${y}%`
    }

    render() {
        return (
            <div className='app'>
                <h1 id='title' onMouseEnter={this.handleMouseEnter}>30 Days Of React</h1>
            </div>
        )
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';


// Header Component
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Mert Kaya</p>
          <small>Jun 29, 2022</small>
        </div>
      </header>
    )
  }
}

// TechList Component
class TechList extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const TechList = techs.map(tech => <li key={tech}>{tech}</li>)
    return TechList
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
            <TechList />
          </ul>
        </div>
      </main>
    )
  }
}

//Footer Component
class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <footer>
      <div className='footer-wrapper'>
        <p>Copyright 2022</p>
      </div>
    </footer>
    )
  }
}

// App Component
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

// root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
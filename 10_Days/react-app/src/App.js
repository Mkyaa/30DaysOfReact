import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Button from "./shared/Button"

//skilllist component
function SkillList({ techs }) {
  const skillList = techs.map(skill => <li key={skill}>{skill}</li>)
  return skillList
}

//skills component
function Skills({ techs }) {
  return (
    <ul>
      <SkillList techs={techs} />
    </ul>
  )
}

//app
export default class App extends Component {
  state = {
    headerBg: '#c2e6f4',
    mainBg: '#f8f9fa',
    footerBg: '#c2e6f4',
    color: 'black',
    borderTop: '',
    borderBottom: ''
  }

  changeBg = () => {
    const darkBg = '#0f172a',
      lightBg = '#c2e6f4',
      maingLightBg = '#f8f9fa',
      lightTextColor = '#ccc',
      darkTextColor = 'black',
      border = '2px solid #ccc'
    const nowHeaderBg = this.state.headerBg === darkBg ? lightBg : darkBg
    const nowMainBg = this.state.mainBg === darkBg ? maingLightBg : darkBg
    const nowFooterBg = this.state.footerBg === darkBg ? lightBg : darkBg
    const nowTextColor = this.state.color === darkTextColor ? lightTextColor : darkTextColor
    const nowBorder = this.state.border === border ? '' : border
    return this.setState({
      headerBg: nowHeaderBg, 
      mainBg: nowMainBg, 
      footerBg: nowFooterBg, 
      color: nowTextColor, 
      borderTop: nowBorder, 
      borderBottom: nowBorder
    })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Mert',
        lastName: 'Kaya',
      },
      date: 'Jul 6, 2022',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']

    const headerBg = {
      backgroundColor: this.state.headerBg,
      color: this.state.color
    }
    const mainBg = {
      backgroundColor: this.state.mainBg,
      color: this.state.color,
      border: this.state.border,
      borderTop: this.state.borderTop,
      borderBottom: this.state.borderBottom
    }
    const footerBg = {
      backgroundColor: this.state.footerBg,
      color: this.state.color
    }
    return (
      <div className="app">
        <Header data={data} headerBg={headerBg} />
        <main>
          <div className="main-wrapper" style={mainBg}>
            <Skills techs={techs} />
            <Button text='Change Background' onClick={this.changeBg} />
          </div>
        </main>
        <Footer footerBg={footerBg} />
      </div>
    )
  }
}
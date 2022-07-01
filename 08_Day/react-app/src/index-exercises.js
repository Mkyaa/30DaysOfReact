// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import profPic from './images/pp.jpg'
// import './css/style.css'


// class Header extends React.Component {
//     render() {
//         const { data :{title, subtitle, author: { firstName, lastName }}, headStyle } = this.props
//         return (
//             <div className='header-wrapper' style={headStyle}>
//                 <h1>{title}</h1>
//                 <h3>{subtitle}</h3>
//                 <h5>{firstName} {lastName}</h5>
//             </div>
//         )
//     }
// }

// const TechList = ({ techs }) => {
//     const techList = techs.map(tech => <li key={tech}>{tech}</li>)
//     return techList
// }

// const Button = ({ text, onClick }) => {
//     return <button onClick={onClick}>{text}</button>
// }

// const CardList = ({ user: { firstName, lastName, job }, techs }) => {
//     return (
//         <div className='user-card'>
//             <img src={profPic} alt='prof-pic'></img>
//             <h3>{firstName.toUpperCase()} {lastName.toUpperCase()}</h3>
//             <p>{job}</p>
//             <h3>SKILLS</h3>
//             <ul>
//                 <TechList techs={techs} />
//             </ul>
//         </div>
//     )
// }

// class Main extends React.Component {
//     render() {
//         const { user, techs, changeBackground, mainStyle } = this.props
//         return (
//             <div className='main-wrapper' style={mainStyle}>
//                 <CardList user={user} techs={techs} />
//                 <Button text='Change Bacground' onClick={changeBackground} />
//             </div>
//         )
//     }
// }

// class Footer extends React.Component {
//     render() {
//         return (
//             <div className='footer-wrapper'>
//                 <p>Copyright 2022</p>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     state = {
//         style: {
//             header: {
//                 backgroundColor: '#2acfcf',
//                 color: 'black'
//             },

//             main: {
//                 backgroundColor: '#fff',
//                 color: '#0f172a',
//                 borderTop: '',
//                 borderBottom: ''
//             }
//         }
//     }
//     changeBackground = () => {
//         const bgDark = '#0f172a',
//             txtColorForDark = '#ccc',
//             bgLight = '#fff',
//             txtColorForLight = '#0f172a',
//             border = '1px solid #ccc',
//             bgHead ='#2acfcf'
//         const borderTop = this.state.style.main.borderTop === '' ? border : ''
//         const borderBottom = this.state.style.main.borderBottom === '' ? border : ''
//         const backgroundColor = this.state.style.main.backgroundColor === bgLight ? bgDark : bgLight
//         const color = this.state.style.main.color === txtColorForLight ? txtColorForDark : txtColorForLight
//         const bgHeadColor = this.state.style.header.backgroundColor === bgHead ? bgDark : bgHead
//         const headColor = this.state.style.header.color === 'black' ? 'white' : 'black'
//         return this.setState({ style: { header: { backgroundColor:bgHeadColor, color:headColor }, main: {backgroundColor:backgroundColor, color:color, borderTop:borderTop, borderBottom:borderBottom } } })
//     }
//     render() {
        
//         const data = {
//             title: 'Welcome to 30 Days Of React',
//             subtitle: 'Getting Started React',
//             author: {
//                 firstName: 'Mert',
//                 lastName: 'Kaya',
//                 job: 'Junior Frontend Developer'
//             }
//         }
//         const user = { ...data.author, profPic }
//         const techs = ['HTML', 'CSS', 'Javascript', 'Sass', 'Bootstrap', 'React']

//         return (
//             <div className='app' >
//                 <Header data={data} headStyle={this.state.style.header} />
//                 <Main
//                     user={user}
//                     techs={techs}
//                     changeBackground={this.changeBackground}
//                     mainStyle={this.state.style.main}
//                 />
//                 <Footer />
//             </div>
//         )
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
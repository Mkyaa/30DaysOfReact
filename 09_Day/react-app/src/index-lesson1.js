// // index.js
// import React from 'react'
// import ReactDOM from 'react-dom'


// // class based component
// class Header extends React.Component {
//   render() {
//     const {
//       welcome,
//       title,
//       subtitle,
//       author: { firstName, lastName },
//       date,
//     } = this.props.data

//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <h3>{subtitle}</h3>
//           <p>
//             {firstName} {lastName}
//           </p>
//           <small>{date}</small>
//           <p>Select a country for your next holiday</p>
//         </div>
//       </header>
//     )
//   }
// }


// class App extends React.Component {
//   state={
//     isLoggedIn : true
//   }

//   render() {
//     const data = {
//       welcome: '30 Days Of React',
//       title: 'Getting Started React',
//       subtitle: 'JavaScript Library',
//       author: {
//         firstName: 'Mert',
//         lastName: 'Kaya',
//       },
//       date: 'Agu 5, 2022',
//     }

//     let status;
//     if(this.state.isLoggedIn){
//       status= <h3>Welcome to 30Days Of React</h3>
//     }
//     else{
//       status = <h3>Please Login</h3>
//     }
//     return (
//       <div className='app'>
//        <Header status={status} data={data} />
//        {status}
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
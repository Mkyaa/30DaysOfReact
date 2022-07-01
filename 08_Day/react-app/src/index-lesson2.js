// import React from 'react';
// import ReactDOM from 'react-dom/client';


// class App extends React.Component {
//     state = {
//         image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
//     }
//     changeImg =()=>{
//         let catUrl='https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
//         dogUrl = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg',
//         image = this.state.image === catUrl ? dogUrl : catUrl
//         return this.setState({image})
//     }
//     render() {
//         return (
//             <div className='app'>
//                 <h1>30 Days Of React</h1>
//                 <img src={this.state.image} alt='animalImage'></img>
//                 <button onClick={this.changeImg}>Change Image</button>
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
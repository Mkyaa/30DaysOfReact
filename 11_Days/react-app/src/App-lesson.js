// import React, { Component } from "react";

// class App extends Component {
//   state={
//     message:'',
//     firstName:''
//   }
//   handleClick=()=>{
//     this.setState({
//       message:'click event'
//     })
//   }
//   handleMouseMove=()=>{
//     this.setState({
//       message:'onMouseMove event'
//     })
//   }
//   handleCopy=()=>{
//     this.setState({
//       message:'onCopy event'
//     })
//   }
//   handleKeyPress=(e)=>{
//     this.setState({
//       message: `${e.target.value} has been pressed and the keycode is : ${e.charCode}`
//     })
//   }
//   handleBlur=()=>{
//     this.setState({
//       message: 'blue event'
//     })
//   }
//   handleChange =(e)=>{
//     this.setState({
//       message : e.target.value,
//       firstName: e.target.value
//     })
//   }
//   showState=(e)=>{
//     e.preventDefault()
//     console.log(this.state)
//   }

//   render() {
//     return (
//       <div className='app'>
//         <h1>Welcome to the World Of Events</h1>

//         <button onClick={this.handleClick}>Click Me</button>
//         <button onMouseMove={this.handleMouseMove} >Move mouse on me</button>
//         <p onCopy={this.handleCopy} >Check copy right permission by copying this text</p>

//         <p>{this.state.message}</p>

//         <label htmlFor=''>Test for onKeyPress Event:</label>
//         <input type='text' onKeyPress={this.handleKeyPress} />
//         <br />

//         <label htmlFor=''> Test for onBlur Event: </label>
//         <input type='text' onBlur={this.handleBlur} />
//         <br />

//         <form>
//           <div>
//             <label htmlFor='firstName'> First Name:</label>
//             <input
//               onChange={this.handleChange}
//               name='firstName'
//             />
//           </div>
//           <div>
//             <input type='submit' value='Submit' onClick={this.showState} />
//           </div>
//         </form>

//       </div>
//     )
//   }
// }

// export default App;

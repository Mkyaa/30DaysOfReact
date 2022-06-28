// import React from "react";
// import ReactDOM from "react-dom/client";

// const skills = [
//   ["HTML", 10],
//   ["CSS", 7],
//   ["JavaScript", 9],
//   ["React", 8],
// ];

// const countries = [
//   { name: "Finland", city: "Helsinki" },
//   { name: "Sweden", city: "Stockholm" },
//   { name: "Denmark", city: "Copenhagen" },
//   { name: "Norway", city: "Oslo" },
//   { name: "Iceland", city: "Reykjavík" },
// ];

// //Country component
// const Country =({country :{name, city}})=>{
//     return (
//         <li>
//             {name} {city}
//         </li>
//     )
// }

// //Countries component
// const Countries = ({countries})=>{
//     const countriesList = countries.map(country=> <Country key={country.name} country = {country} />)
//     return <ul>{countriesList}</ul>
// }

// //Skill component
// const Skill = ({ skill: [tech, level] }) => {
//   return (
//     <li>
//       {tech} {level}
//     </li>
//   );
// };

// //Skills component
// const Skills = ({ skills }) => {
//   const skillsList = skills.map((skill) => <Skill key={skill[0]} skill={skill} />);
//   return <ul>{skillsList}</ul>;
// };

// const App = () => {
//   return (
//     <div className="app">
//       <Skills skills={skills} />
//       <Countries countries={countries} />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);

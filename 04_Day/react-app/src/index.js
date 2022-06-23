import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css'
import profilePic from './images/pp.jpg'

const author = {
    firstName: 'Mert',
    lastName: 'Kaya',
    skills: ['HTML', 'CSS', 'JS', 'Sass', 'Bootstrap','React'],
    job:'Junior Frontend Developer',
    country:'Turkey'
}
const date = 'Jun 22, 2022'
const formattedSkills = author.skills.map(skill => <li key={skill}> {skill} </li>)

const UserCard = () => {
    return (
        <div className='user-card'>
            <img src={profilePic} alt="profile pic"></img>
            <h4>{author.firstName.toUpperCase()} {author.lastName.toUpperCase()} </h4>
            <span>{author.job}, {author.country} </span>
            <h4>SKILLS</h4>
            <ul>
            {formattedSkills}
            </ul>
            <p>Joined on {date}</p>
        </div>
    )
}

const Main = () => {
    return (
        <div className='main-wrapper'>
            <UserCard />
        </div>
    )
}

const App = () => {
    return (
        <div className='app'>
            <Main />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

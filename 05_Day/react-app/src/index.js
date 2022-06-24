import React from 'react'
import ReactDOM from 'react-dom'
import profilePic from './images/pp.jpg'
import './css/style.css'

const TechList =({skills})=>{
    const techList = skills.map(skill => <li key={skill}>{skill}</li>)
    return techList
}

const UserCard = ({ user: { firstName, lastName, skills, job,country, joinedTime } }) => {
    return (
        <div className='user-card'>
            <img src={profilePic} alt={firstName}></img>
            <h4>{firstName} {lastName}</h4>
            <p>{job}, {country}</p>
            <h4>SKILLS</h4>
            <ul>
            <TechList skills = {skills} />
            </ul>
            <p>Joined on {joinedTime}</p>
        </div>
    )
}

const App = () => {
    const user = {
        firstName: 'MERT',
        lastName: 'KAYA',
        skills: ['HTML', 'CSS', 'JS', 'Scss', 'Bootstrap', 'React'],
        job: 'Junior Frontend Developer',
        country:'Turkey',
        joinedTime: 'Jun 24, 2022'
    }

    return (
        <div className='app'>
            <UserCard user={user} />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
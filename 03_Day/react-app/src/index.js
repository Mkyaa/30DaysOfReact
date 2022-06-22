import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import frontEndImage from './images/frontend_technologies.png'
import mertImage from './images/pp.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'))

const frontEndTech = (
    <div>
        <img className='f-img' src={frontEndImage} alt='frontend image'></img>
    </div>
)

const subPage = (
    <div className='sub-page'>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to recieve news and updates.</p>
        <div className='input-container'>
            <input type='text' placeholder='First name' />
            <input type='text' placeholder='Last name' />
            <input type='text' placeholder='Email' />
        </div>
        <button>Subscribe</button>
    </div>
)

const author={
    firstName:'Mert',
    lastName:'Kaya',
    skills:['HTML', 'CSS', 'Sass', 'JS', 'Bootstrap']
}
const date='Jun 22, 2022'
const skillsFormatted = author.skills.map(skill=> <li key={skill}>{skill}</li>)

const userCard =(
    <div className='user-card'>
        <img src={mertImage} alt='user image' className='user-image'></img>
        <h3>{author.firstName.toUpperCase()} {author.lastName.toUpperCase()}</h3>
        <p>Junior Developer, Turkey</p>
        <span>SKILLS</span>
        <div className='skill-set'>
            <ul>
                {skillsFormatted}
            </ul>
        </div>
        <p>Joined, {date}</p>
    </div>
)

const app = (
    <div className='app'>
        {frontEndTech}
        {subPage}
        {userCard}
    </div>
)

root.render(app)
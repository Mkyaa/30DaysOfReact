import React, { Component } from "react";

export default class Header extends Component {
    render() {
        const { data: {
            welcome,
            title,
            subtitle,
            author: { firstName, lastName },
            date }, 
            headerBg
        } = this.props
        return (
            <header>
                <div className="header-wrapper" style={headerBg}>
                    <h1>{welcome}</h1>
                    <h3> {title} </h3>
                    <h5> {subtitle} </h5>
                    <p> {firstName}  {lastName} </p>
                    <small> {date} </small>
                </div>
            </header>
        )
    }
}
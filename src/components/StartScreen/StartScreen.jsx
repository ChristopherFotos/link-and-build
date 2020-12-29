import {Link} from 'react-router-dom'
import {render } from '@testing-library/react'
import React, { Component } from 'react'
import './StartScreen.scss';
// import logo from '../../assets/triviafy-logo.png';

function StartScreen () {
    return(
            <body className="start">
                <div className="start__logo">Triviafy</div>
                <div className="start__hero"></div>
                <Link to="/category" className="link-to-category">
                    <button className="start__button">Get Started</button> 
                </Link>                
            </body>
    ) 
}

export default StartScreen
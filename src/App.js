import logo from './logo.svg';
import {Route, Switch, Link} from 'react-router-dom'
import CategorySelect from './components/CategorySelect/CategorySelect'
import React, { Component } from 'react'
import './App.css';


export default class App extends Component {

  state = {
    // category
    // subcategory
    // difficulty
    // quiz
  }

  handleCategoryChange = (e)=> {
    this.setState(
      {
        ...this.state,
        category: e.target.dataset.category
      }
    )
  }

  changeSubcategory = (c)=>{
    this.setState(
      {
        ...this.state,
        category: c
      }
    )
  }

  handleDifficultyChange = (e)=> {
    this.setState(
      {
        ...this.state,
        category: e.target.dataset.difficulty
      }
    )
  }


  render() {
    return (
      <div>
        <Switch>
          <Route path = '/' exact component      = {HomePage}/>
          <Route path = '/category' component    = {CategorySelect}/>
          <Route path = '/:category' component   = {DifficultySelect}/>
          <Route path = '/:difficulty' component = {QuizSelect}/>
        </Switch>
      </div>
    )
  }
}


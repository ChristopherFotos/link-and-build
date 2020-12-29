import {Route, Switch, Link} from 'react-router-dom'
// import CategorySelect from './components/CategorySelect/CategorySelect'
import React, { Component } from 'react'
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import SelectScreen from './components/SelectScreen/SelectScreen';
import categories from './data/category-select'
import difficulties from './data/difficulty-select'


export default class App extends Component {

  state = {
    category: ''
    // subcategory
    // difficulty
    // quiz
  }

  handleCategoryChange = (e)=> {
    // e.preventDefault();
    console.log(e.target.dataset.category)
    this.setState(
      {
        ...this.state,
        category: e.target.dataset.category
      }
    )
  }

  // changeSubcategory = (c)=>{
  //   this.setState(
  //     {
  //       ...this.state,
  //       category: c
  //     }
  //   )
  // }

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
        {/* <StartScreen /> */}

        <Switch>
          <Route path = '/' exact component={StartScreen}/>
          <Route path = '/category'   component = {()=><SelectScreen type='category'   options = {categories} clickHandler = {this.handleCategoryChange} /> }/>
          <Route path = '/difficulty' component = {()=><SelectScreen type='difficulty' options = {difficulties} clickHandler = {this.handleDifficultyChange}/>}/>
          {/* <Route path = '/:difficulty' component = {QuizSelect}/> */}
        </Switch>
      </div>
    )
  }
}


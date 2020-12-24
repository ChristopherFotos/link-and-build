import React, { Component } from 'react'
import axios from 'axios'

export default class QuizSelect extends Component {

    // props: 
    // ['chemistry', 'biology'],
    // difficulty: 'medium'

    state = {
        renderedQuiz: 1,
    }

    componentDidMount(){
        axios.get(_URL + this.props.category + this.props.difficulty)
            .then(

            )
    }

    render() {
        return (
            <div onClick>
                {this.props.quizes[this.state.renderedQuiz]}
            </div>
        )
    }
}

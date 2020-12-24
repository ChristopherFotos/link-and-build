import React, { Component } from 'react'
import axios from 'axios'
import subcategories from '../../subcategories'

// Do we really need separate components for selecting a category and selecting a difficulty? Probably not, so let's try 
// making both screens render the same component, but pass it the props that it should render, i.e.,  an array of category options
// or an array of difficulty options. We can use conditional rendering to do this.

// if it's a sub-category component we'll pass it its parent category (e.g. science), and then it will use the subcategories object to 
// get a list of options to render. 

export default class SelectScreen extends Component {

    // props: 
    // ['chemistry', 'biology'],
    // difficulty: 'medium'

    state = {
        renderedQuiz: 1,
    }

    render() {
        return (
            <div >
            </div>
        )
    }
}

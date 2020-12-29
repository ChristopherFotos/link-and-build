import React, { Component } from 'react'
import axios from 'axios'
import './SelectScreen.scss';
import subcategories from '../../subcategories'
import {Link} from 'react-router-dom'


// Do we really need separate components for selecting a category and selecting a difficulty? Probably not, so let's try 
// making both screens render the same component, but pass it the props that it should render, i.e.,  an array of category options
// or an array of difficulty options. We can use conditional rendering to do this.

// if it's a sub-category component we'll pass it its parent category (e.g. science), and then it will use the subcategories object to 
// get a list of options to render. 

class SelectScreen extends Component {

    // props: 
    // ['chemistry', 'biology'],
    // difficulty: 'medium'

    // state = {
    //     renderedQuiz: 1,
    // }

    render() {

        return (
            <body className="body">
                <h1 className="body__title">Choose a Category</h1>
                <div className="categories">
                    <Link to="/difficulty">
                        <button onClick={this.props.clickHandler} className="categories__button" data-category='science'>Science</button>
                    </Link>
                    <Link to="/difficulty">
                        <button className="categories__button" data-category='entertainment'>Entertainment</button>
                    </Link>
                    <Link to="/difficulty">
                        <button className="categories__button" data-category='history'>History</button>      
                    </Link>
                </div>
            </body>
        )
    }
}

export default  SelectScreen
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
    

    render() {


        return (
            <div className="body">
                <h1 className="body__title">Choose a {this.props.type}</h1>
                <div className="options">
                    {this.props.options.map(option => 
                    <Link to={option.to}>
                        <button onClick={this.props.clickHandler} 
                            className="options__button" 
                            data-option = {option.data}
                        >
                            {option.text}
                        </button>
                    </Link>)}
                </div> 
            </div>
        )
    }
}

export default  SelectScreen
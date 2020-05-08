import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Book extends Component {

render() {
    console.log(this.props.url)
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"style={{ width: 128, height: 193 , backgroundImage: this.props.url}}></div>
                <div className="book-shelf-changer">
                    <select onChange={(event) => this.props.onChangeCategory(event.target.value, this.props)}>
                        <option value="move" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.author}</div>
        </div>
    )
}

}

Book.propTypes = {
    url: propTypes.string
}

export default Book
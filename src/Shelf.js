import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
import sortBy from 'sort-by'


class Shelf extends Component {
    state = {
        
        currentlyReading: [{
            book_url:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            title:'To Kill a mochingbird',
            author:'Harper Lee',
        },{
            book_url:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            title:'To Kill a mochingbird',
            author:'Harper Bee',

        },
        {
            book_url:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            title:'To Kill a mochingbird',
            author:'Harper Bee',

        }],
        wantToRead: [],
        read: []
      }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {this.props.book.map((books) => (
                                        <li key = {books.id}>
                                            {books.shelf === 'currentlyReading' && (
                                                <Book  
                                                key = {books.id}
                                                id = {books.id}                                              
                                                title={books.title}
                                                author={books.authors}
                                                url={'url(' + books.imageLinks.thumbnail + ')'}
                                                onChangeCategory={this.props.onChangeCategory}
                                                />
                                                
                                            )}                                            
                                        </li>                                                                           
                                    )
                                    )}                                
                                </ol>                               
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.book.map((books) => (
                                        <li key = {books.id}>
                                            {books.shelf === 'wantToRead' && (
                                                <Book  
                                                key = {books.id}
                                                id = {books.id}                                               
                                                title={books.title}
                                                author={books.authors}
                                                url={'url(' + books.imageLinks.thumbnail + ')'}
                                                onChangeCategory={this.props.onChangeCategory}
                                                />
                                                
                                            )}                                            
                                        </li>                                                                           
                                    )
                                    )}                            
                                </ol>                               
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.book.map((books) => (
                                        <li key = {books.id}>
                                            {books.shelf === 'read' && (
                                                <Book  
                                                key = {books.id}
                                                id = {books.id}                                              
                                                title={books.title}
                                                author={books.authors}
                                                url={'url(' + books.imageLinks.thumbnail + ')'}
                                                onChangeCategory={this.props.onChangeCategory}
                                                />
                                                
                                            )}                                            
                                        </li>                                                                           
                                    )
                                    )}                            
                                </ol>                               
                            </div>
                        </div>

                    </div>


                </div>

                    
                
            </div>
        )
    }
    
    }

    export default Shelf
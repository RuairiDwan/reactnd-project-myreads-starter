import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './Book'
import Shelf from './Shelf'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    query: '',
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
      books
    }))
  })  
  }

  changeCategory = (shelf, book) => {
    this.setState((currentState) => ({
      books: currentState.books.filter((c) => {
        console.log(c.shelf)
        c.id === book.id && (     
          c.shelf = shelf
        )
        console.log('The shelf is:')
        console.log(c.shelf)
        return c
      })
    }))
    BooksAPI.update(book, shelf)
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }


  render() {

    const showingBooks = this.state.query === ''
    ? this.state.books
    : this.state.books.filter((c) => (
      c.title.toLowerCase().includes(this.state.query.toLowerCase())
    )) 
    console.log(this.state.query)

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Shelf book={this.state.books} onChangeCategory={this.changeCategory}/>
        )}/>
        <Route exact path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link 
              to='/'
              className="close-search" 
              >Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}/>             
              </div>
            </div>
          <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((books) => (
              <li key = {books.id}>
                <Book  
                key = {books.id}
                id = {books.id}                                              
                title={books.title}
                author={books.authors}
                url={'url(' + books.imageLinks.thumbnail + ')'}
                onChangeCategory={this.props.onChangeCategory}
                />                                                                                                                 
              </li>                                                                           
            ))}                                
          </ol>
          </div>
        </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp

import React, { Component } from 'react'
import axios from 'axios'
import BookItems from './bookitem'

export class Books extends Component {
  state = {
    books: [],
    isLoaded: false,
  }

  componentDidMount() {
    axios
      .get('http://localhost:10004/wp-json/wp/v2/books/')
      .then((res) =>
        this.setState({
          books: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err))
  }

  render() {
    const { books } = this.state
    return (
      <div>
        {books.map((book) => (
          <BookItems key={book.id} book={book} />
        ))}
      </div>
    )
  }
}

export default Books

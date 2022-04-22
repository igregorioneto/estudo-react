import React, { Component } from 'react'
import Avatar from './Avatar'

class Search extends Component {
  state = {
    query: '',
    users: []
  }

  handleSearch = event => {
    const query = event.target.value

    setTimeout(() => {
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then(response => response.json())
        .then(users => {
          this.setState({
            query,
            users: users.items
          })
        })
    }, 200)
  }

  render() {
    const { query, users } = this.state

    return (
      <div>
        <input type="text" name="search" onChange={this.handleSearch} />
        <button>Search</button>
        {query && <p>Results for: {query}</p>}

        <div style={{ marginTop: 10 }}>
          {users &&
            users.map(user => (
              <div key={user.id}>
                <ul style={{ listStyle: 'none' }}>
                  <li>{user.login}</li>
                  <li>
                    <a href={user.url}>{user.url}</a>
                  </li>
                  <li>
                    <Avatar url={user.avatar_url} />
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default Search

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class AdminNavbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">Roles</Link></li>
          <li><Link to="#">Technical Coach List</Link></li>
          <li><Link to="#">Overall Ratings</Link></li>
        </ul>
      </nav>
    )
  }
}

export default AdminNavbar

// ## Navbar As Admin
//   - Roles(add roles to users)
//   - Technical Coach List(ratings, notes, comments from students)
//     - Overall Ratings(Graph of Ratings, filtered by month / week / day)
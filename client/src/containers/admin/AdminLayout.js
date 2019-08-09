import React, { Component } from 'react'
import { AdminNavbar } from '../../components/admin';

export class AdminLayout extends Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default AdminLayout

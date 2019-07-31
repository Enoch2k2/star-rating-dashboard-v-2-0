import React, { Component } from 'react'
import { AdminNavbar } from '../../components/admin';
import '../../stylesheets/AdminLayout.css';

export class AdminLayout extends Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="main">
          <h1>Star Rating Admin Dashboard</h1>
        </div>
      </div>
    )
  }
}

export default AdminLayout

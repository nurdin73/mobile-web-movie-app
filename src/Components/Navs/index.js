import React, { Component } from 'react'
import { Home, Movie, Tv, Settings } from '@material-ui/icons'
export default class Navs extends Component {
  handleClick = (e) => {
    e.preventDefault()
    alert('halo')
  }
  render() {
    return (
      <div>
        <nav className="navbar bg-primary">
          <ul className="nav-parent">
            <li className="nav-list">
              <button className="btn btn-secondary active" onClick={this.handleClick}><Home /><small>Home</small></button>
            </li>
            <li className="nav-list">
              <button className="btn btn-secondary" onClick={this.handleClick}><Movie /><small>Movies</small></button>
            </li>
            <li className="nav-list">
              <button className="btn btn-secondary" onClick={this.handleClick}><Tv /><small>Tv Show</small></button>
            </li>
            <li className="nav-list">
              <button className="btn btn-secondary" onClick={this.handleClick}><Settings /><small>Settings</small></button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul className="Nav">
        <li>
            <NavLink to="/">Form</NavLink>
        </li>
        <li>
            <NavLink to="/table">All Data</NavLink>
        </li>
      </ul>
    </div>
  )
}

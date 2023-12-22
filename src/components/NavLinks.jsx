import { links } from '../data'
import { NavLink } from 'react-router-dom'

import React from 'react'

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const {id, url, text} = link;
        return (
            <li key={link.id}>
                <NavLink 
                to={url}
                className='capitalize'>
                    {text}
                </NavLink>
            </li>
        )
      })}
    </>
  )
}

export default NavLinks

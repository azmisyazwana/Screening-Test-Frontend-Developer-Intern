import React from 'react'
import './ListItem.css'

const ListItem = ({children, no}) => {
  return (
    <li><span className='list-number'>{no}</span><p className='list-text'>{children}</p></li>
    )
}

export default ListItem
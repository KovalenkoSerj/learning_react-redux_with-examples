import React from 'react'

export const Link = ({ onClick, active, children }) => (
  <button onClick={onClick} disabled={active} style={{ marginLeft: '4px'}}>
    {children}
  </button>
)
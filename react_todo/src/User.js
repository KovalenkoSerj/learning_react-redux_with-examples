import React from 'react'

export const User = (props) => {
 return (<li>
    <span>name: {props.children}, age: {props.age}</span>
    <button onClick={props.delEvent}>Delete</button>
  </li>)
}
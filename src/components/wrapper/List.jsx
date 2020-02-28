import React from 'react'
import ListItem from './ListItem'
import uniqid from 'uniqid'

const List = (props) => {
  return props.children.map((li) => {
    return <ListItem key={uniqid()} {...li.props} indent={props.indent} />
  })
}

export default List

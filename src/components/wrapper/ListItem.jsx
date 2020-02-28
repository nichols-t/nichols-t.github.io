import React from 'react'
import { Text } from 'grommet'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import List from './List'
import { StatusPlaceholder, StatusPlaceholderSmall } from 'grommet-icons'

const itemIconProps = {
  size: 'small',
  color: 'light-1'
}

/**
 * Renders a list item.
 * @param {*} props must have `children`, which will either be a string or an array of stuff.
 */
const ListItem = (props) => {
  console.log(props)
  // This seems to be the way to detect if this ListItem is a "leaf".
  return props.children.map((child) => {
    // The children of this element. Make sure it's not a nested list
    const grandKids = child.props
    if (Array.isArray(grandKids.children) && grandKids.children[0].type.name === 'ListItem') {
      return <List key={uniqid()} {...grandKids} indent={props.indent ? props.indent + 1 : 1} />
    } else {
      return (
        <Text key={uniqid()} margin={{ left: `${2 + (2 * props.indent || 0)}em` }}>
          {props.indent % 2 === 0 || !props.indent ? <StatusPlaceholderSmall {...itemIconProps} />
            : <StatusPlaceholder {...itemIconProps} />}
          {' '}
          {grandKids.children}
        </Text>)
    }
  })
}

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.string.isRequired]).isRequired,
  indent: PropTypes.number
}

export default ListItem

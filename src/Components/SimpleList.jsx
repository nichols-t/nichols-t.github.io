import React from 'react';
import {
  List,
  ListItemText,
} from '@material-ui/core';

/**
 * Top-level section for the detailed "About Me" page.
 * @param {*} props
 * @param {Array<String>} props.items list items
 */
const SimpleList = ({ items }) => (
  <List>
    {items.map((item) => (
      <ListItemText>
          -
        {' '}
        {item}
      </ListItemText>
    ))}
  </List>
);

export default SimpleList;

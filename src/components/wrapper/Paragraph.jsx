import React from 'react'
import { Paragraph as GrommetP } from 'grommet'

/**
 * Parapgraph that fills space and has a medium left margin.
 * @param {*} props all props, which will override this component's props.
 */
const Paragraph = (props) => <GrommetP fill margin={{ left: 'medium' }} {...props} />

export default Paragraph

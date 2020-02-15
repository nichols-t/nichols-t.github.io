import React from 'react'
import { Heading } from 'grommet'

/**
 * Title that creates a white, centered Heading.
 * @param {*} props all other props, which will override this component's defaults.
 */
const Heading2 = (props) => <Heading fill='true' margin={{ bottom: 'xsmall' }} {...props} level={2} />

export default Heading2

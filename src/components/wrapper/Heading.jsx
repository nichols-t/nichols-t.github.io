import React from 'react'
import { Heading as GHeading } from 'grommet'

/**
 * Title that creates a white, centered Heading.
 * @param {*} props all other props, which will override this component's defaults.
 */
const Heading = (props) => <GHeading fill='true' margin={{ bottom: 'xsmall' }} {...props} />

export default Heading

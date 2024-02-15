import React from 'react';

/**
 * Renders a link to a PDF at the given `to` URL.
 * @param {*} props
 * @param {*} props.children Link text
 * @param {String} props.to Link href
 * @returns
 */
function PDFLink({ to, children }) {
  return <a target="blank" href={to}>{children}</a>;
}

export default PDFLink;

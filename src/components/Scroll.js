import React from 'react'

const Scroll = props => {
  return (
    <div style={{overflowY: 'scroll', border:'3px solid black', height: '85vh'}}>
      {props.children}
    </div>
  )
};

export default Scroll;

import React from 'react'

const Footer = () => {
    const messageStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
  
    return (
      <div style={messageStyle}>
        <br />
        <em>Note app, Department of Computer Science, University of Helsinki 2019</em>
      </div> 
    )
  }
  

  export default Footer
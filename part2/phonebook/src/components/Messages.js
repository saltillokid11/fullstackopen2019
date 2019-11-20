import React from 'react'

const Messages = (props) => {
  console.log("aafafafafafaf", props.name);
  if(props.message === null){
    return null;
  } else {
    let messageStyle = null;
    let messageString = null;
    if(props.message == "deleted"){
      messageString = `Information of ${props.name} has already been removed from the server`;
        messageStyle = {
          color: 'red',
          border: "2px",
          borderStyle: "solid",
          borderColor: 'green',
          fontSize: 16,
          padding: "6px",
          backgroundColor: "#DDDDDD",
          fontWeight: "bold",
          marginBottom: "20px"
          }
    } else {
      messageString = `Added ${props.name}`;
        messageStyle = {
            color: 'green',
            border: "2px",
            borderStyle: "solid",
            borderColor: 'green',
            fontSize: 16,
            padding: "6px",
            backgroundColor: "#DDDDDD",
            fontWeight: "bold",
            marginBottom: "20px"
          }
    }
  
    return (
      <div style={messageStyle}>
        <div>{messageString}</div>
      </div> 
    )
  }
}
  

  export default Messages
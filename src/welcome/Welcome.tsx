import React from 'react'

type props = {
    name: string;
}


const Welcome = (props: props) => {
  return (
    <div>Welcome {props.name}</div>
  )
}

export default Welcome
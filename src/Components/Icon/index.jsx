import React from 'react'

function index({src , alt , id , onClick , width , height}) {
  return (
    <img src={src} alt={alt} id={id} onClick={onClick} width={width} height={height}/>
  )
}

export default index
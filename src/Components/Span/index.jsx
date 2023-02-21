import React from 'react'

function index({data ,className , onChange}) {
  return (
    <span className={className} onChange={onChange}>
        {data}
    </span>
  )
}

export default index;
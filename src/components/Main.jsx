

import React from 'react'


const Main = ({info}) => {
  return (
    <div>
        <h1>{info[0].title}</h1>
        <div>{info[0].company}</div>
        <p>{info[0].dates}</p>
        <ul>
            {info[0].duties.map((item)=>{
                return(
                    <li>{item}</li>
                )
            })}
        </ul>
    </div>
        
  )
}

export default Main
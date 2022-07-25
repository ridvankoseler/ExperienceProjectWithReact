import React from 'react'

const Section = ({btnInfo,value,setValue}) => {
    // console.log(btnInfo);
    // console.log(value);
    // console.log(setValue);
  return (
    <>
        {
            btnInfo.map((btn,index)=>{
                console.log(btn.company);
                return(
                    <button key={btn.id} onClick={()=>setValue(index)}>{btn.company}</button>
                    
                )
            })
        }
    </>
  )
  
}

export default Section
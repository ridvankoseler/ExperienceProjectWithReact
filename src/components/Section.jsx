import React from 'react'

const Section = ({btnInfo,value,setValue}) => {
    // console.log(btnInfo);
    // console.log(value);
    // console.log(setValue);
  return (
    <div className='d-flex flex-md-column justify-content-center sectionDiv m-auto text-center flex-wrap fw-bold col-md-2'>
        {
            btnInfo.map((btn,index)=>{
                console.log(btn.company);
                return (
                 
                 <button
                      className='mt-3 mx-2 border-0 bg-white buttonDiv fw-bold fs-4 text-success '
                      key={btn.id}
                      onClick={() => setValue(index)}
                    >
                      {btn.company}
                    </button>
                    
                    
                  
                );
            })
        }
    </div>
  )
  
}

export default Section
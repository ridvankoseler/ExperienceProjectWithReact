import React from 'react'
import { FaFastForward } from "react-icons/fa";
const Experince = ({info}) => {
    const {title,company,dates,duties} = info
  return (
    <div>
      <div>{title}</div>
      <div>{company}</div>
      <div>{dates}</div>
      <div>
        {
            duties.map((index)=>{
                return (
                  <div>
                    {" "}
                    <p>
                      <span>
                        {" "}
                        <FaFastForward />{" "}
                      </span>
                      {index}
                    </p>
                  </div>
                );
            })
        }
      </div>
      {/* <div>
        
        
        <p><span><FaFastForward/></span>
          {" "}
          
          {duties[0]}
        </p>{" "}
        <p>{duties[1]}</p> <p>{duties[2]}</p>{" "}
      </div> */}
    </div>
  );
}

export default Experince
import React from "react";
import { FaFastForward } from "react-icons/fa";


const Experince = ({ info }) => {
  const { title, company, dates, duties } = info;
  return (
    <div className="experienceDiv mt-5 col-md-8">
      <h3 className="titleDiv text-center">{title}</h3>
      <h4 className="companyDiv fw-bold text-center text-danger">{company}</h4>
      <div className="datesDiv text-center fw-bold">{dates}</div>
      <div className="dutiesDiv mt-4">
        {duties.map((index) => {
          return (
            <div className="d-flex">
              <span className="d-flex justify-content-center align-items-center p-2 text-danger">
                <FaFastForward />
              </span>
              <p>{index}</p>
            </div>
          );
        })}
      </div>
      {/* <div>
        <p><span><FaFastForward/></span>
          {duties[0]}
        </p>
        <p>{duties[1]}</p> <p>{duties[2]}</p>{" "}
      </div> */}
    </div>
  );
};

export default Experince;

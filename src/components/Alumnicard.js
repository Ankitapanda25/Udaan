import React, { useState } from "react";
import AlumniData from "./AlumniData";

export default function Alumnicard({ data }) {


  return (
    <>
      {
        data.map((element, key) => {
        return (
          <>
            <div className='flex sm:justify-self-center lg:align-self-start xs:px-[8vh] xxs:flex-col xs:flex-row'> 
              <div className=" w-[90px]  lg:mr-3 xxs:text-center xxs:relative xxs:ml-[40%] xxs:mb-4 xs:ml-0 ">
                <img src={element.imgdata} className="w-[100%] " alt="" />
                <h5
                  style={{ fontFamily: "poppins, sans-serif" }}
                  className="text-white text-[13px]  mt-2 ml-[-39px] w-[170px] relative text-center"
                >
                  {element.name}
                </h5>
                <h5 className="text-white text-[14px] text-center w-[170px] -ml-10">
                 {element.info}
                </h5>
              </div>
              <div className="xxs:ml-[4rem] lg:ml-10">
                <p className="text-white text-[11.5px] lg:w-[25vw] sm:w-[50vw] ">
                  {element.description}{" "}
                </p>
              </div>

              
            </div>
             

           
          </>


        );
      })}
       

  

    
    
    </>
    
  );
}

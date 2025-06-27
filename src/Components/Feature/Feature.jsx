import React from 'react';
import { IoIosCheckmark } from "react-icons/io";


const Feature = ({feature}) => {
  return (
    <div>
        <p className='flex items-center'><IoIosCheckmark className='text-white text-2xl mr-4' /> {feature}</p>
      
    </div>
  );
};

export default Feature;
import React from 'react';
import './Category.css'
const Category = ({info}) => {
 console.log(info)

  const { icon ,title,jobs} = info;
  return (
    <div >
    
     
        <div className='box'>
          <img src={icon} alt="" />
          <h3>{title}</h3>
          <p>{jobs}</p>
        </div>
     
    </div>
  );
};

export default Category;
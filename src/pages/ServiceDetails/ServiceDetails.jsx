/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id}= useParams();
    const [detail,setDetail] = useState([]);

  useEffect(()=>{

fetch(`http://localhost:5000/allData/${id}`)
.then((res)=>res.json())
      .then(data => setDetail(data)); 
  },[]);
  console.log(detail);
    return (
        <div className='card'>
            <img style="width: 100px; height: 100px;" src={detail?.chef_pic} alt="" />
            <div className='card-body'>
            <h2>{detail?.chef_name}</h2>
            <p>Recipies Information: {detail?.details}</p>
            <p>Years of experience: {detail?.experience}</p>
            <p>Num of recipies: {detail?.num_of_recipies}</p>
            <p>Likes: {detail?.likes}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;
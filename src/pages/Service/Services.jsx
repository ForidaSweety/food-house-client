/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    const [servicesData,setServicesData] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:5000/allData")
      .then((response)=>response.json())
      .then(data => setServicesData(data));
    },[]);
  
    console.log(servicesData);

    return (
         <div>
        
      <div className="services">
        {servicesData[0]?.services?.map((service) => (
          <div key={service?.id} className="service-card">
            <img style="width: 100px; height: 100px;" src={service?.chef_pic} alt="" />
            <h2>{service?.chef_name}</h2>
            <p>Years of experience: {service?.experience}</p>
            <p>Num of recipies: {service?.num_of_recipies}</p>
            <ul>
              {service?.items?.map((item) => (
                <li key={item?.id}>
                  {item?.name} - ${item?.price}
                </li>
              ))}
            </ul>
            <p>Likes: {service?.likes}</p>
            
            <Link to={`/services/${service?.id}`}>
              <button>View Recipies</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Services;
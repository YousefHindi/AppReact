// Main.js
import React from 'react';
import data from './data.json'; 
import MyCard from './Card'; 

const Main = () => {
  return (
    <div className="main">
      <div className="card-container">
        {data.map((item, index) => (
          <MyCard 
            key={index} 
            image_url={item.image_url}
            title={item.title} 
            description={item.description}
            category={item.category} 
          />
        ))}
      </div>
    </div>
  );
};

export default Main;

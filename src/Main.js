import React, { useState } from 'react';
import MyCard from './Card';
import data from './data.json';
function Main() {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="card-row">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div className="card-wrapper" key={index}>
              <MyCard 
                image_url={item.image_url} 
                title={item.title} 
                description={item.description} 
                category={item.category}
              />
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Main;

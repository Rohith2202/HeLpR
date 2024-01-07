import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../styles/getposts.css'

const Home=()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    
    <>
       <h1 className='Heading'>HeLpR</h1>
       <div className='secondHead'>
       <h2 className='secondHead'>Open Jobs</h2>
      <Link to="/post" className='post'>Post</Link>
       </div>
      <hr></hr>
      <div className='data'>
      <ul className="what">
        {data.map((item) => (
          <div className='contains'>
          <Link to="/fullpost" state={{id:item._id}} className='links'>
          <li key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <p>Locality: {item.locality}</p>
          </li>
          </Link>
          <hr className='hr'/>
          </div>
        ))}

      </ul></div>
    </>
  );
};

export default Home;

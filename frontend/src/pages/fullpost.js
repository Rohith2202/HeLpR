import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/fullpost.css'

const Fullpost=(props)=>{
    let { state } = useLocation();
    const { id } = state;
    const [locality, setLocality] = useState("");
    
    const [text, setText] = useState("");
    
    const [title, setTitle] = useState("");
    
    const [comments, setComments] = useState([]);
    const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/post/${id}`);
          const result = await response.json();
          setLocality(result.locality);
          setText(result.text)
          setTitle(result.title)
          setComments([...result.comments])
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    fetchData();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      description: '',
      price: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      axios.post(`http://localhost:5000/post/add/${id}`,formData);
      alert("Comment Added");
      navigate('/');
    };

    return (
        <div>
            <h1>{title}</h1>
            <h3>{locality}</h3>
            <h1>{text}</h1>
            <ul>
            {comments.map((comment, index) => (
          <div key={index}>
            <p>Description: {comment.description}</p>
            <p>Price: ${comment.price}</p>
            <hr />
            </div>
        ))}
            </ul>
            <form onSubmit={handleSubmit}>
        <label>
          Details:
          <br />
          <br />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Quote Price:
          <br />
          <br />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
          </div>
    
        
    )
}

export default Fullpost;
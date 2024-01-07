import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../styles/postpage.css';
const Post = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    locality: '',
    text: '',
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
    axios.post("http://localhost:5000/post",formData)
    navigate('/');
  };

  return (
    <div>
      <h1 className='Heading'>HeLpR</h1>
      <Link to="/" >Home Page</Link>
      <form onSubmit={handleSubmit} className="formContainer">
  <div className="formGroup">
    <label htmlFor="title" className="label">
      What sector professional are you looking for:
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="inputField"
      />
    </label>
  </div>

  <div className="formGroup">
    <label htmlFor="locality" className="label">
      Area:
      <input
        type="text"
        name="locality"
        value={formData.locality}
        onChange={handleChange}
        className="inputField"
      />
    </label>
  </div>

  <div className="formGroup">
    <label htmlFor="text" className="label">
      Describe your Problem:
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        className="textArea"
      ></textarea>
    </label>
  </div>

  <button type="submit" className="submitButton">
    Submit
  </button>
</form>

    </div>
  );
};

export default Post;

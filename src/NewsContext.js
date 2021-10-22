import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState('');
  const apiKey = "109e051f09d14e1a8d54c3db2ec827d2";
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
  	axios
  	  .get(
  	    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
  	  )
  	  .then((response) => setData(response.data))
  	  .catch((error) => console.log(error));
  },[]);

  return (

  	<NewsContext.Provider value={{ data }}><br />
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Search..."
            onChange={(e) => setData(e.target.value)}
          /> 
          <button type="submit">Enter</button>
        </form>
      </div>
  	  {props.children}
  	</NewsContext.Provider>
  );
};
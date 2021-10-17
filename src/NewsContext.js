import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apiKey = "109e051f09d14e1a8d54c3db2ec827d2";

  useEffect(() => {
  	axios
  	  .get(
  	    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
  	  )
  	  .then((response) => setData(response.data))
  	  .catch((error) => console.log(error));
  },[data]);

  return (
  	<NewsContextProvider value={{ data }}>
  	  {props.children}
  	</NewsContextProvider>
  );
};
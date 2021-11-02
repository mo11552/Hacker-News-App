import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from "./NewsArticle";
import SearchTerms from "./SearchTerms"

function News(props) {
  const { data, term } = useContext(NewsContext);

  return (  
    <div>
      <h1 className="head__text">News App</h1>
      <div className="all__news">
        {data 
          ? data.articles.map((news) => ( 
      	      <NewsArticle data={news} key={news.url} />
      	    )) 
          : "Loading"}
      </div>
    </div>
  ); 
}

export default News
import React from 'react'

function SearchTerms({ term }) {
  return (
  	<div className="news">
      <h1 className="news__title">{term.title}</h1>
      <p className="news__desc">{term.description}</p>
      <span className="news__author">{term.author}</span> <br />
      <span className="news__published">{term.publishedAt}</span>
      <span className="news__source">{term.source.name}</span>
    </div>
  );
}

export default SearchTerms;
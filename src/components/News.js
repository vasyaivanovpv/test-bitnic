import React from 'react';

function News({ articles, auth, doLogout }) {
  const renderTepmlate = () => {
    return articles.map(item => (
      <div key={new Date(item.publishedAt).getTime()}>
        <h2>News</h2>
        <div>{item.author}</div>
        <div>{item.title}</div>
        <div>{item.description}</div>
        <img src={item.urlToImage} alt="" />
        <div>{item.content}</div>
      </div>
    ));
  };
  const renderHeader = () => {
    if (auth.isLoggedIn) {
      return (
        <header>
          <button onClick={doLogout}>Logout</button>
        </header>
      );
    }
  };

  return (
    <div>
      {renderHeader()}
      {renderTepmlate()}
    </div>
  );
}

export default News;

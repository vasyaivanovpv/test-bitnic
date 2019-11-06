import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Head = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLogout = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  width: 120px;
  min-width: 60px;
  margin: 26px auto 0;
  padding: 8px 6px;
  border: none;
  outline: none;
  background-color: transparent;
  vertical-align: middle;
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background-color: rgba(33, 150, 243, 0.08);
  }
`;
const ButtonText = styled.span`
  color: rgb(33, 150, 243);
`;
const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
const MainHeader = styled.h1`
  font-size: 8rem;
`;
const NewsSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const NewsItem = styled.div`
  width: 50%;
  padding: 0 12px;
`;
const NewsTitle = styled.h2`
  font-size: 2rem;
`;
const NewsDescription = styled.p`
  font-size: 1.6rem;
`;
const NewsImage = styled.img`
  display: block;
  width: 100%;
`;
const NewsContent = styled.p`
  font-size: 1.8rem;
`;
const Footer = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`;

function News({ articles, auth, doLogout }) {
  const renderTepmlate = () => {
    return articles.map(item => (
      <NewsItem key={new Date(item.publishedAt).getTime()}>
        <NewsTitle>{item.title}</NewsTitle>
        <NewsDescription>{item.description}</NewsDescription>
        <NewsImage src={item.urlToImage} alt="" />
        <NewsContent>{item.content}</NewsContent>
      </NewsItem>
    ));
  };
  const renderHeader = () => {
    if (auth.isLoggedIn) {
      return (
        <Head>
          <ButtonLogout onClick={doLogout}>
            <ButtonText>Logout</ButtonText>
          </ButtonLogout>
        </Head>
      );
    }
  };

  return (
    <div>
      {renderHeader()}
      <Content>
        <MainHeader>News</MainHeader>
        <NewsSection>{renderTepmlate()}</NewsSection>
      </Content>
      <Footer>vasyaivanovpv, 2019</Footer>
    </div>
  );
}

News.propTypes = {
  articles: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  doLogout: PropTypes.func.isRequired,
};

export default News;

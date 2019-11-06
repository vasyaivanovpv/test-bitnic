import React from 'react';
import News from '../components/News';
import { connect } from 'react-redux';
import { getNews } from '../actions/NewsActionCreators';
import { doLogout } from '../actions/LoginActionCreators';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const LoadingMeassage = styled.span`
  display: block;
  height: 100px;
  padding-top: 46px;
  text-align: center;
  font-size: 1.8rem;
`;

class NewsContainer extends React.Component {
  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { articles, isFetching, auth, doLogout } = this.props;

    return (
      <React.Fragment>
        {isFetching && <LoadingMeassage>Loading...</LoadingMeassage>}
        {!isFetching && articles.length === 0 && 'Epmty'}
        {articles.length > 0 && (
          <News articles={articles} auth={auth} doLogout={doLogout} />
        )}
      </React.Fragment>
    );
  }
}

NewsContainer.propTypes = {
  articles: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getNews: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  doLogout: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  articles: store.news.articles,
  isFetching: store.news.isFetching,
});

export default connect(
  mapStateToProps,
  { getNews, doLogout }
)(NewsContainer);

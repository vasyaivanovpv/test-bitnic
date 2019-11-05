import React from 'react';
import News from '../components/News';
import { connect } from 'react-redux';
import { getNews } from '../actions/NewsActionCreators';
import { doLogout } from '../actions/LoginActionCreators';
import { PropTypes } from 'prop-types';

class NewsContainer extends React.Component {
  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { articles, isFetching, auth, doLogout } = this.props;

    return (
      <div>
        {isFetching && 'Loading...'}
        {!isFetching && articles.length === 0 && 'Epmty'}
        {articles.length > 0 && (
          <News articles={articles} auth={auth} doLogout={doLogout} />
        )}
      </div>
    );
  }
}

NewsContainer.propTypes = {
  articles: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getNews: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  articles: store.news.articles,
  isFetching: store.news.isFetching,
});

export default connect(
  mapStateToProps,
  { getNews, doLogout }
)(NewsContainer);

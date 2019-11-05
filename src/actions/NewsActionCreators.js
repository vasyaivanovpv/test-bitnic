import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAIL } from '../constants/News';

export function getNews() {
  return dispatch => {
    dispatch({
      type: NEWS_REQUEST,
    });

    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'sources=bbc-news&' +
      'apiKey=2effadf8ccc44084b59e9dd869560afd';
    const req = new Request(url);

    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.status === 'ok') {
          dispatch({
            type: NEWS_SUCCESS,
            payload: data.articles.slice(0, 5),
          });
        }
      })
      .catch(e => {
        dispatch({
          type: NEWS_FAIL,
          error: true,
          payload: new Error(e),
        });
      });
  };
}

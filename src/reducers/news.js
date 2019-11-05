import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAIL } from '../constants/News';

const initialState = {
  articles: [],
  error: '',
  isFetching: false,
};

export function news(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, isFetching: true, error: '' };
    case NEWS_SUCCESS:
      return { ...state, isFetching: false, articles: action.payload };
    case NEWS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };
    default:
      return state;
  }
}

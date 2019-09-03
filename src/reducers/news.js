import { COMPLETE_SEARCH_NEWS, ERROR_NEWS, LOADING_SEARCH_NEWS } from '../constants/news'

const initialState = {
  news: [],
  error: false,
  loading: false
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_SEARCH_NEWS:
        return {
            ...initialState,
            news: action.news.articles,
            loading: false
        };
    case ERROR_NEWS:
        return {
            ...initialState,
            loading: false,
            error: true
        };
    case LOADING_SEARCH_NEWS:
        return {
            ...initialState,
            loading: true
        };
    default:
      return state;
  }
};

export { weatherDataReducer as default };
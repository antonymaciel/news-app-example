import { COMPLETE_SEARCH_NEWS, ERROR_NEWS, LOADING_SEARCH_NEWS } from '../constants/news'
import { api } from '../constants/config' 

export const completeSearchNews = news => ({
  type: COMPLETE_SEARCH_NEWS,
  news
});

export const searchingNews = () => ({
    type: LOADING_SEARCH_NEWS
  });

export const errorNews = () => ({
  type: ERROR_NEWS
});


export const fetchNews = searchString => (dispatch) => {
    dispatch(searchingNews())
    const endpoint = `${api}?q=${searchString}&from=2019-08-03&sortBy=publishedAt&apiKey=02712375da0e4bfea8b34090b6105399`;
    fetch(endpoint)
        .then(response => {
            return response.json();
        })
            .then(jsonResponse => {
                console.log(jsonResponse);
                if (jsonResponse.status === 'ok') {
                dispatch(completeSearchNews(jsonResponse));
                } else {
                dispatch(errorNews())
                }
            })
        .catch((err) => {
            dispatch(errorNews())
        });

};
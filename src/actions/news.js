import { COMPLETE_SEARCH_NEWS, ERROR_NEWS, LOADING_SEARCH_NEWS } from '../constants/news'
import { api, apiKey } from '../constants/config' 

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


export const fetchNews = (searchString, page) => (dispatch) => {
    dispatch(searchingNews())
    const endpoint = `${api}?q=${searchString}&sortBy=publishedAt&pageSize=15&page=${page}&apiKey=${apiKey}`;
    fetch(endpoint)
        .then(response => {
            console.log('response', response);
            return response.json();
        })
            .then(jsonResponse => {
              console.log('jsonResponse', jsonResponse);
              dispatch(completeSearchNews(jsonResponse));
            })
        .catch((err) => {
            dispatch(errorNews())
        });

};
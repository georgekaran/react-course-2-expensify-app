export function fetchArticleDetails() {
    return function(dispatch) {
      return axios.get('http://127.0.0.1:3000/expense')
        .then(({ data }) => {
        dispatch(setArticleDetails(data));
      });
    };
  }
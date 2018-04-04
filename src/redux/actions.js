
const fetchArticles = (articles) => {
 return {
    type: 'FETCH_STORIES',
    articles
  }
}

const fetchComments = (comments) => {
 return {
    type: 'FETCH_COMMENTS',
    comments
  }
}
export {
  fetchArticles,
  fetchComments
}
import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import './article.css';

import { Article } from './components/article/Article';
import { AddArticle } from './components/article/AddArticle';
import { addArticle, removeArticle } from '../redux-app/article/actionCreators';
import { Dispatch } from 'redux';

const App: React.FC = () => {

  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
  
      {articles.map((article: IArticle) => (
          <Article key={article.id} article={article} removeArticle={removeArticle} />
        )
      )}
    </main>
  );
}

export default App;

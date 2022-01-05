import React from 'react';

import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };

  render() {
    return (
      <div>
        <ArticleList
          articles = {this.state.articles}
          articleActions={this.articleActions}
        >
        </ArticleList>
      </div>
    );
  }
}

export default App;
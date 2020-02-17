import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// import {Movie, MovieCard, MovieList,SavedList} from './components';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {4
    setSavedList( [...savedList, movie] );
  };4

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/movies/:id"   exact component={Movie} />
      <Route path="/" exact component={MovieList} />
      <Route path="/savedlist" component={SavedList} />


    </div>
  );
};

export default App;

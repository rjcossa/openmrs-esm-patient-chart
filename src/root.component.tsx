import React from 'react';
import Home from './home';
import { BrowserRouter, Route } from 'react-router-dom';
import { CurrentUserContext } from './CurrentUserContext';

const Root: React.FC = () => {
  return (
    <CurrentUserContext>
      <BrowserRouter basename={window.spaBase}>
        <Route exact path="/patients/hts/form" render={() => <Home />} />
      </BrowserRouter>
    </CurrentUserContext>
  );
};

export default Root;

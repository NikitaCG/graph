// список роутов

import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const App = React.lazy(() => import('./Components/App/App.jsx'));

class Router extends React.Component {
  render() {
    return (
      <div>
        {/*<Route exact path="/" component={App}/>*/}
        <Route
          path="/"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>
          )}
        />
      </div>
    );
  }
}

export default Router;

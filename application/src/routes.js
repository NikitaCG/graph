// список роутов

import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import App from './Components/App/index';

// const Grid = React.lazy(() => import('./Containers/GridExample/index'));

class Router extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={App}/>
        {/*<Route*/}
        {/*  path="/grid"*/}
        {/*  render={() => (*/}
        {/*    <Suspense*/}
        {/*      fallback={<div>Loading...</div>}*/}
        {/*    >*/}
        {/*      <Grid />*/}
        {/*    </Suspense>*/}
        {/*  )}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default Router;

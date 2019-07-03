import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// загржаем редьюсеры
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducers from '../reducers';

const AppStore = (middleware) => {
  // создаем хранище
  const store = createStore(
    AppReducers,
    composeWithDevTools( applyMiddleware(thunk, middleware) ),
  );

  // если сборщик поддерживает hot-reload то пробуем подгрузить нужные reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // const nextReducer = require('../reducers').default;
      store.replaceReducer(AppReducers);
    });
  }

  return store;
};

export default AppStore;

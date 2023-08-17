/* Core */
import { createLogger } from 'redux-logger'
import { verify } from 'jsonwebtoken'
import { Middleware } from 'redux';

const jwtMiddleware: Middleware = store => next => action => {
  const state = store.getState();
  const jwt = state.jwt;

  if (jwt) {
    try {
      verify(jwt, String(process.env.JWT_KEY));
    } catch (error) {
      console.log('JWT Error:', error);
    }
  }
  console.log('JWT:', jwt);
  return next(action);
};


const middleware = [
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
    predicate: () => typeof window !== 'undefined',
  }),
  jwtMiddleware,
]

export { middleware }

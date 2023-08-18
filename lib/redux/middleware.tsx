/* Core */
import { createLogger } from 'redux-logger'
import { verify } from 'jsonwebtoken'


/* Instruments */
import { getCookie } from 'cookies-next'

const jwtMiddleware = ({ dispatch }: any) => (next: any) => (action: any) => {
  if (typeof action === 'function') {
    const token = getCookie('token')
    if (token) {
      const decodedToken = verify(String(token), String(process.env.NEXT_PUBLIC_JWT_SECRET))
      if (decodedToken) {
        dispatch({ type: 'AUTHENTICATED' })
      } else {
        dispatch({ type: 'NOT_AUTHENTICATED' })
      }
    }
  }
  next(action)
}

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

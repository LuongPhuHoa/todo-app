/* Instruments */
import { todoSlice } from './slices'
import { userSlice } from './slices'


export const reducer = {
  todo: todoSlice.reducer,
  user: userSlice.reducer,
}

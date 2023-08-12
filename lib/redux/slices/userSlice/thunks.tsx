import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { db, User } from "@/database";
import { logIn, loginFailure } from "./userSlice";

//check if the inputted user matches the database and return the User object
export const loginUser = (user: User) => async (dispatch: any) => {
    try {
      const { email, password } = user;
      const auth = await db.userDatabase.where({ email, password }).first();
      if (auth) {
        dispatch(logIn(auth));
      } else {
        dispatch(loginFailure('Invalid email or password'));
      }
    } catch (error) {
      dispatch(loginFailure('An error occurred while logging in'));
    }
  };
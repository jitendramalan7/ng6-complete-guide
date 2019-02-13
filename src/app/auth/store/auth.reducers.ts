import * as Actions from './auth.action';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

// @ts-ignore
export function AuthReducer(state = initialState, action: Actions.AuthActions) {
  switch (action.type) {
    case Actions.SIGNIN:
    case Actions.SIGNUP:
      return {
        ...state,
        authenticated: true
      };
    case Actions.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case Actions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
  }
  return state;
}

import * as Actions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';


const initialState = {
  ingredients: [new Ingredient('Apples', 100), new Ingredient('Tomatos', 20)]
};

export function shoppingListReducer(
  state = initialState,
  action: Actions.ShoppingListActions
) {
  switch (action.type) {
    case Actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case Actions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }
    default:
      return state;
  }
}

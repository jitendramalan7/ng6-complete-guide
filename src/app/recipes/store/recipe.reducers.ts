import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from './recipe.actions';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes : [
  new Recipe(
    'A Test Recipe',
    'This is simply test',
    '../../assets/images/recipe.jpg',
    [new Ingredient('Paneer', 1), new Ingredient('French Fries', 20)]
  ),
  new Recipe(
    'Another Test Recipe',
    'This is simply test1',
    '../../assets/images/recipe.jpg',
    [new Ingredient('Buns', 2), new Ingredient('Paneer', 1)]
  )
]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}

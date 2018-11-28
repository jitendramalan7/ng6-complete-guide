import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected=new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', '../../assets/images/recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is simply test1', '../../assets/images/recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe);
  }

}

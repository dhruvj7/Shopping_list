import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route:ActivatedRoute, private recipeService:RecipeService,
    private router: Router) { }

  id:number;
  editMode:boolean=false;
  recipeForm:FormGroup;

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      this.id=+params.id;
      if(params.id == null){
        this.editMode=false;
      } else {this.editMode=true;}
      this.initForm();
    })

  }

  private initForm(){
    let recipeName ='';
    let recipeImagePath="";
    let recipeDescription="";
    let recipeIngredients= new FormArray([]);

    if(this.editMode){
      const selectedRecipe = this.recipeService.findRecipe(this.id)
        recipeName = selectedRecipe.name;
        recipeImagePath = selectedRecipe.imagePath;
        recipeDescription = selectedRecipe.description;
        if(selectedRecipe.ingredients){
          for(let ingredient of selectedRecipe.ingredients){
            recipeIngredients.push(new FormGroup({
              name:new FormControl(ingredient.name, Validators.required),
              amount:new FormControl(ingredient.amount, 
                [Validators.required,Validators.pattern('^[1-9]+[0-9]*$')])
            }))
          }
        }
      }

      this.recipeForm= new FormGroup({
        name: new FormControl(recipeName, Validators.required),
        description: new FormControl(recipeDescription, Validators.required),
        imagePath: new FormControl(recipeImagePath, Validators.required),
        ingredients:recipeIngredients
      })
    }

    addIngredients(){
      (<FormArray>this.recipeForm.controls['ingredients']).push(
        new FormGroup({
          name:new FormControl('',Validators.required),
          amount:new FormControl('',Validators.required)
        })
      )
    }

    onSubmit(){
      const newRecipe:Recipe = { name : this.recipeForm.value['name'], description:this.recipeForm.value['description'],
      imagePath:this.recipeForm.value['imagePath'],ingredients:this.recipeForm.value['ingredients'] }
      
      if(this.editMode){
        this.recipeService.updateRecipe(this.id,newRecipe);
      }else{
        this.recipeService.addRecipe(newRecipe);
      }
      this.navigate();
    }

    navigate(){
      this.router.navigate(['recipes']);
    }

    deleteIngridient(index:number){
      (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
    }
}

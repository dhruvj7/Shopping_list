import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  id:number;
  editMode:boolean=false;

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id=+params.id;
      if(params.id == null){
        this.editMode=false;
      } else this.editMode=true;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  userForm;

  constructor(private formBuilder:FormBuilder) { 
    this.userForm = formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      priority_level: ['', [Validators.required]],
      category: ['', [Validators.required]],
      progress_level: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  addTask(){
    console.log(this.userForm.value);
  }

  get titleFormControl(){
    return this.userForm.get('title')!;
  }
  
  get descriptionFormControl(){
    return this.userForm.get('description')!;
  }

  get categoryFormControl(){
    return this.userForm.get('category')!;
  }

  get priority_levelFormControl(){
    return this.userForm.get('priority_level')!;
  }

  get progress_levelFormControl(){
    return this.userForm.get('progress_level')!;
  }
 

}

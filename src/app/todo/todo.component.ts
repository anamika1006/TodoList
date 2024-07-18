import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  ngOnInit(): void {
    let savedTodoList=localStorage.getItem("allTaskStore");
    this.allTasks=savedTodoList?JSON.parse(savedTodoList):[];
  }

  taskTitle:string="";
  taskDate:Date=new Date();

  allTasks:Task[]=[];

createTask()
{

  let task: Task=
  {
    id:this.getRandomTaskId(),
    title:this.taskTitle,
    date:this.taskDate
  };
  this.allTasks.push(task);
  localStorage.setItem("allTaskStore",JSON.stringify(this.allTasks));

  this.taskTitle="";
  this.taskDate=new Date();
}

deleteTask(index:number)
{
  this.allTasks.splice(index,1);
  localStorage.setItem("allTaskStore",JSON.stringify(this.allTasks));
}


getRandomTaskId():string
{
const characterSet= "abcdefghijklmnopqrstuvwxyz1234567890";
let result='';
for(let i=0;i<5;i++)
  {
    result=result+characterSet.charAt(Math.floor(Math.random()*characterSet.length));
  }
    return result;
  
}
}

interface Task{
  id:string,
  title:string,
  date:Date
}


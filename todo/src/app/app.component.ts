import { Model, TodoItem } from './model';
import { Component } from '@angular/core';

@Component({
  selector: 'todo-app', // representation of component in DOM tree
  templateUrl: 'app.component.html',
}) // View Model

export class AppComponent {

  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter((item) => !item.done);
  }

  addItem(newItem) {
    if (newItem != '') {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
}

//Creation
// Register & Load

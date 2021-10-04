import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngfor';
  Students:any[]=[
    {
      'name':'pooja sahu'
    },
    {
      'name':'Ajay sahu'
    },
    {
      'name':'mani sahu'
    },
    {
      'name':'ajju sahu'
    }
  ];
}

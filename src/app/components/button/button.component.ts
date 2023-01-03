import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{
@Input() text = "default";
@Input() color = "";
@Output() btnclick = new EventEmitter();

onClick() {
  console.log("function onClick");
  this.btnclick.emit();
}
}

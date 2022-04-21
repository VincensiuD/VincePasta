import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()colour!: string;
  @Input()displayedText!: string;
  @Input()textSize! : string;
  @Input()height!: string;
  @Input()width!: string;
  @Input()borderRadius!: string;
  @Input()textColour!: string;
  @Output()click = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.click.emit();
  }

}

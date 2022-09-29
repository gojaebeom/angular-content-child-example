import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
  <div>
    <h2>hello</h2>
    <ng-content></ng-content>
  </div>
  `,
})
export class HelloComponent implements AfterContentInit {
  @ContentChild('paragraph1') paragraph1: ElementRef;
  @ContentChild('paragraph2') paragraph2: ElementRef;

  ngAfterContentInit() {
    console.log(this.paragraph1.nativeElement.textContent);
    console.log(this.paragraph2.nativeElement.textContent);
  }
}

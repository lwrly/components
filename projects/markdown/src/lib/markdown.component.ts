import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MarkdownService } from './markdown.service';

const MARKDOWN_PLACEHOLDER = `# We <3 markdown!`;

@Component({
  selector: 'lwrly-markdown',
  template: `
<ul>
  <li>
    <a (click)="preview = false" [routerLink]=""><i class="fa fa-pen"></i>&nbsp;Edit</a>
     <!--class="nav-link"-->
  </li>
  <li>
    <a (click)="preview = true" [routerLink]=""><i class="fa fa-eye"></i>&nbsp;Preview</a>
     <!--class="nav-link"-->
  </li>
</ul>
<div class="border rounded-bottom border-right-0" id="markdown-editor">
  <textarea class="bg-white" rows="25" [placeholder]="placeholder" (keyup)="onValueChange($event)" *ngIf="!preview"></textarea>
  <div [innerHtml]="compiled" *ngIf="preview"></div>
</div>
  `,
  styles: [`textarea,
#markdown-editor div {
  width: 100%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}`]
})
export class MarkdownComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<string>();
  @Input() compiled: string;
  @Input() placeholder: string;

  preview: boolean = false;

  constructor(private md: MarkdownService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void { 
    if(!this.placeholder) {
      this.placeholder = MARKDOWN_PLACEHOLDER;
    } 
  }

  onValueChange(e) {
    const body = e.target.value;

    if (!body) {
      return this.valueChanged.emit(this.placeholder); //reset
    } else {
      this.valueChanged.emit(body);
    }
  }
}

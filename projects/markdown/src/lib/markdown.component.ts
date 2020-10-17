import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MarkdownService } from './markdown.service';

const MARKDOWN_PLACEHOLDER = `# We <3 markdown!`;

@Component({
  selector: 'lwrly-markdown',
  styles: [`
.btn-lwrly {
  background-color: #fff;
  border-right: 1px solid black;
  border-bottom: none;
  color: black;
  padding: 10px 20px;
  spacing: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.btn-lwrly:hover {
  background-color: #f1f1f1;
}

.btn-lwrly-edit {
  border-top-left-radius: 5px;
  border-top: none;
  border-left: none;
}

.btn-lwrly-preview {
  border-top: none;
  border-left: none;
}

.lwrly-markdown-editor-top {
  border: 1px solid black;
  width: 100%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.lwrly-markdown-editor-bottom {
  border: 1px solid black;
  border-top: none;
  width: 100%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

textarea {
  width: 100%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

code {
  color: #f66;
}
` ],
  template: `
<div class="lwrly-markdown-editor-top">
  <button (click)="preview = false" class="btn-lwrly btn-lwrly-edit">Edit</button><button (click)="preview = true" class="btn-lwrly btn-lwrly-preview">Preview</button>
</div>
<div class="lwrly-markdown-editor-bottom">
  <textarea rows="25" 
    [placeholder]="placeholder" 
    [value]="value" 
    [hidden]="preview"
  ></textarea> <!-- (keyup)="onValueChange($event)" -->
  <div [innerHtml]="value" [hidden]="!preview"></div>
</div>
  `
})
export class MarkdownComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<string>();
  @Input() placeholder: string;
  markdownValue: string = "";
  preview: boolean = false;

  constructor(private md: MarkdownService) { }

  @Input() 
  get value(): string {
    return this.markdownValue;
  }
  
  set value(val) {
    this.markdownValue = this.md.toSanitizedHtmlString(val);
    this.valueChanged.emit(this.markdownValue);
  }

  ngOnInit(): void { 
    if(!this.placeholder) {
      this.placeholder = MARKDOWN_PLACEHOLDER;
    } 
  }

  //onValueChange(e) {
  //  if (!e.target.value) { return; }
  //  this.markdownValue = this.md.toSanitizedHtmlString(e.target.value);
  //  this.valueChanged.emit(this.markdownValue);
  //}
}

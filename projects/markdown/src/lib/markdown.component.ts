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
  <button type="button" (click)="edit()" class="btn-lwrly btn-lwrly-edit">Edit</button><button type="button" (click)="preview()" class="btn-lwrly btn-lwrly-preview">Preview</button>
</div>
<div class="lwrly-markdown-editor-bottom">
  <textarea 
    [attr.rows]="rows" 
    [placeholder]="placeholder" 
    [value]="input" 
    [hidden]="previewing"
    (keyup)="keyupHandler($event)"
  ></textarea>
  <div class="lwrly-md-preview" [innerHtml]="markdownOutput" [hidden]="!previewing"></div>
</div>
  `
})
export class MarkdownComponent implements OnInit {
  @Output() markdownOutputChanged = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() rows: number;
  markdownInput: string;
  markdownOutput: string = "";
  previewing: boolean = false;

  constructor(private md: MarkdownService) { }

  @Input() 
  get input(): string {
    return this.markdownInput;
  }
  
  keyupHandler(e) {
    if(!e.target.value) { return; }
    this.markdownOutput = this.md.toSanitizedHtmlString(e.target.value);
    this.markdownOutputChanged.emit(this.markdownOutput);
  }

  ngOnInit(): void { 
    if(!this.placeholder) {
      this.placeholder = MARKDOWN_PLACEHOLDER;
    }
    if(!this.rows) {
      this.rows = 1;
    }
    if(!this.markdownInput) {
      this.markdownInput = MARKDOWN_PLACEHOLDER;
    }
    this.markdownOutput = this.md.toSanitizedHtmlString(this.markdownInput);
  }

  edit() {
    this.previewing = false;
  }

  preview() {
    this.previewing = true;
  }
}

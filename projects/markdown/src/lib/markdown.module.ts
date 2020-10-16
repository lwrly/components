import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  declarations: [MarkdownComponent],
  imports: [BrowserModule],
  exports: [MarkdownComponent]
})
export class MarkdownModule { }

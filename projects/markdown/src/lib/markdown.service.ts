import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownModule } from './markdown.module';

import * as marked from 'marked';

@Injectable({
  providedIn: MarkdownModule
})
export class MarkdownService {
  constructor(private sanitizer: DomSanitizer) { }

  // Convert markdown to an unsanitized string of html
  private compile(markdown: string): string {
    return marked.parser(marked.lexer(markdown));
  }

  // Convert html to sanitized string
  private sanitize(html: string): string {
  	return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }

  // Convert markdown to a sanitized string of valid HTML symbols/characters.
  public toSanitizedHtmlString(markdown: string): string {
  	return this.sanitize(this.compile(markdown));
  }
}

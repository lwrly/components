Markdown
========

A simple Angular component that allows for quick editing and previewing of markdown files.

# Install

### With NPM:
```
npm i @lwrly/markdown
```

### With Yarn:
Not available (yet).

# Configuring

In your `app.module.ts`:
```
...
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...other stuff,
    MarkdownModule
  ],
...
```

In your component file:
```
<markdown></markdown>
```

Additionally, the following properties are available to the component:

| Property       | Type         | | Description                                                                                 | 
| -------------- | ------------ | | ------------------------------------------------------------------------------------------- | 
| `compiled`     | string       | |                                                                                             | 
| `placeholder`  | string       | | Custom message to place inside editor textarea as a preview. Default is `# We <3 markdown!` | 
| `valueChanged` | EventEmitter | | Emits a compiled markdown string when text is entered into the editor.                      | 

# Bugs/Contributing
Open an issue!
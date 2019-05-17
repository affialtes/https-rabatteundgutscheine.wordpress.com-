<<<<<<< HEAD
---
layout: default
---

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
=======
# Introduction

**stackedit.js** makes it easy to bind StackEdit to a `textarea`.

> <textarea>Hello **Markdown** writer!</textarea>

Because it runs StackEdit in an iframe, **stackedit.js** is lightweight and has no dependency.

# Getting started

## Import

Add the script to your web page.

```html
<script src="https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js"></script>
```

Or include it in your project

```bash
npm install stackedit-js
```

and import it into your script.

```javascript
import Stackedit from 'stackedit-js';
```

## Usage

To open StackEdit, create a `Stackedit` object and call `openFile()`.

```javascript
  const el = document.querySelector('textarea');
  const stackedit = new Stackedit();

  // Open the iframe
  stackedit.openFile({
    name: 'Filename', // with an optional filename
    content: {
      text: el.value // and the Markdown content.
    }
  });

  // Listen to StackEdit events and apply the changes to the textarea.
  stackedit.on('fileChange', (file) => {
    el.value = file.content.text;
  });
```

## Events

`Stackedit` objects will emit the following events:

- `fileChange` whenever a change happens to the file and its content,

- `close` once the iframe is closed.

  **Tip:** Call `stackedit.close()` to force close the iframe.

## Conversion service

Duly sanitized HTML will be returned as `file.content.html` in the `fileChange` event so that you can print the formatted output into your page.

> <div class="html"></div>

**Tip:** Use the silent mode to convert Markdown to HTML on page load:

```javascript
stackedit.openFile({
  name: 'Filename',
  content: { text: 'Hello **Markdown** writer!' }
}, true /* silent mode */);

// In silent mode, the `fileChange` event is emitted only once.
stackedit.on('fileChange', (file) => {
  divEl.innerHTML = file.content.html;
});
```

## Custom properties

Pass file properties to configure the Markdown engine. To open a CommonMark file for example:

```javascript
stackedit.openFile({
  name: 'Filename',
  content: {
    text: 'Hello **CommonMark** writer!',
    properties: {
      extensions: {
        preset: 'commonmark'
      }
    }
  }
});
```

## Custom StackEdit URL

**stackedit.js** uses [https://stackedit.io/app](https://stackedit.io/app) as the default StackEdit URL. Though you can provide a custom URL to the `Stackedit` constructor.

```js
const stackedit = new Stackedit({
  url: 'https://hostname/app'
});
```



<script src="lib/stackedit.js"></script>
<script src="index.js"></script>
>>>>>>> upstream/master

# Telegramify-Markdown-ES

[![Build](https://img.shields.io/github/actions/workflow/status/donaldxdonald/telegramify-markdown-es/release.yml?branch=master)](https://github.com/donaldxdonald/telegramify-markdown-es/actions)
[![codecov](https://codecov.io/gh/donaldxdonald/telegramify-markdown-es/branch/master/graph/badge.svg?token=LxCmgGNUHl)](https://codecov.io/gh/donaldxdonald/telegramify-markdown-es)
![License](https://img.shields.io/github/license/donaldxdonald/telegramify-markdown-es)

Telegramify-Markdown is a Markdown
to [Telegram-specific-markdown](https://core.telegram.org/bots/api#formatting-options) converter, based
on [Unified](https://github.com/unifiedjs/unified) and [Remark](https://github.com/remarkjs/remark/).

## This fork aims to provide

- Support for ES modules
- Keep dependencies up-to-date (unified, remark, etc.)

## Install

```bash
npm install telegramify-markdown-es
```

## Usage

```js
import telegramifyMarkdown from 'telegramify-markdown-es';
const markdown = `
# Header
## Subheader

[1.0.0](http://version.com)

* item 1
* item 2
* item 3

And simple text with + some - symbols.
`;

telegramifyMarkdown(markdown);
/*
 *Header*
 *Subheader*
 
[1\.0\.0](http://version.com)

 • item 1
 • item 2
 • item 3

And simple text with \+ some \- symbols\.
*/
```

## Possible options

You can also add unsupported tags strategy as a second argument, which can be one of the following:

- `escape` - escape unsupported symbols for unsupported tags
- `remove` - remove unsupported tags
- `keep` - ignore unsupported tags (default)

```js
import telegramifyMarkdown from 'telegramify-markdown-es';
const markdown = `
# Header

> Blockquote

<div>Text in div</div>
`;

telegramifyMarkdown(markdown, 'escape');
/*
*Header*

\> Blockquote

<div\>Text in div</div\>
*/

telegramifyMarkdown(markdown, 'remove');
/*
 *Header*
 */
```

[MIT Licence](LICENSE)

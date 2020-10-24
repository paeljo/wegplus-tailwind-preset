# wegplus-tailwind-preset

This is a tailwindcss configuration that is shared across all [WEG+](https://www.weg.plus/?s=gh&ss=wegplus-tailwind-preset) projects.


## Installation

```shell
$ npm i @paeljo/wegplus-tailwind-preset
```

## Usage

You can use this preset by putting this in your project's `tailwind.config.js`: 

```js
module.exports = {
  presets: [require('@paeljo/wegplus-tailwind-preset')],
  theme: { ... }
}
```
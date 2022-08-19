## Custom Tailwind Plugins

### Adding Plugin
After Git Cloning this repository, add the text-stroke Tailwind plugin like so:

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [ require("./path/to/text-stroke")],
}

```

### Usage
For text-stroke plugin add to your HTML with `.text-stroke` `.text-stroke-{color}` classes as shown below:
```html
<p class="text-stroke text-stroke-blue-700">Hello</p>
```

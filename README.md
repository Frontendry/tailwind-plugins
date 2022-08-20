## Custom Tailwind Plugins

### Adding Plugin
After Git Cloning this repository, instantiate the text-stroke Tailwind plugin on your `tailwind.config.js` like so:

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  // Tailwind Plugins Added Here...
  plugins: [ require("./path/to/text-stroke")],
}

```

### Usage
To use the text-stroke plugin on your Tailwind project, add `.text-stroke` `.text-stroke-{color}` classes as shown below:
```html
<p class="text-stroke text-stroke-blue-700">Hello</p>
```

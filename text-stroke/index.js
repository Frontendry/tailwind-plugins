const plugin = require("tailwindcss/plugin");

const generateColors = (e, colors, prefix) =>
  Object.keys(colors).reduce((acc, key) => {
    if (typeof colors[key] === "string") {
      return {
        ...acc,
        [`${prefix}-${key}`]: {
          "-webkit-text-stroke-color": colors[key],
        },
      };
    }

    const innerColors = generateColors(e, colors[key], `${prefix}-${key}`);

    return {
      ...acc,
      ...innerColors,
    };
  }, {});

module.exports = plugin.withOptions(({ className = "text-stroke" } = {}) => {
  return ({ e, addUtilities, theme, variants }) => {
    const colors = theme("colors");
    const textStrokeColors = generateColors(e, colors, `.${className}`);

    addUtilities({
      ".text-stroke": {
        "-webkit-text-stroke-width": "1px",
        color: "transparent",
      },
    });
    addUtilities(textStrokeColors, variants("textStrokeColors"));
  };
});

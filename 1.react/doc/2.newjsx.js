// 在 React17 以前，Babel转换是老的写法
const babel = require("@babel/core");
const sourceCode = `
  <h1>
  hello <span style={{ color: "red" }}>world</span>
  </h1>
`;
const result = babel.transform(sourceCode, {
  plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
});
console.log(result.code);

import { jsx } from "react/jsx-runtime";

/*#__PURE__*/
jsx("h1", {
  children: [
    "hello ",
    /*#__PURE__*/ jsx("span", {
      style: {
        color: "red",
      },
      children: "world",
    }),
  ],
});

// React.createElement=jsx

module.exports = {
  "extends": "airbnb",
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/no-array-index-key": "off",
      "import/no-extraneous-dependencies": [2, { devDependencies: true }],
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/media-has-caption": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to" ]
      }],
      "padded-blocks": 1,
      "no-return-assign": ["error", "except-parens"],
      "no-plusplus": [ "error", {
        "allowForLoopAfterthoughts": true
      }]
  },
  "parser": "babel-eslint"
};

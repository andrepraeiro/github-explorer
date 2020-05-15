# First React Project

## Structures and Patterns
### 1. Create React App

    ```npx create-react-app <name> --template=typescript```

### 2. EditorConfig
  2.1. Create .editorconfig file
    2.2.
      ```
        trim_trailing_whitespace = true
        insert_final_newline = true
        end_of_line = lf
      ```

### 3.Eslint


  ```yarn add eslint -D```

  3.1. Remove eslintConfig item from package.json

  3.2.

  ```yarn eslint --init```

  3.3. create .eslintignore file
  ```
    **/*.js
    node_modules
    build
  ```
  3.4. edit eslintrc.json

  3.4.1 add plugins on extends

  ```json
  "extends":{
  "...":"...",
  "plugin:@typescript-eslint/recommended"
  }
  ```

  3.4.2. add plugins on plugin item
  ```json
  "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-filename-extension": [1, {"extensions": [".tsx"]}],
        "import/prefer-default-export": "off"
      }
  ```

  3.5. Install plugin to react understand typescript files

    ` yarn add eslint-import-resolver-typescript -D `

  3.5.1 create settings item on eslintrc
  ```json
  "settings": {
        "import/resolver": {
          "typescript":{}
        }
      }
  ```
  3.5.2. To eslint accept imports of tsx files without extensions
  ```json
  "import/extensions": [
          "error",
          "ignorePackages",
          {
            "ts": "never",
            "tsx": "never"
          }
        ]
  ```

### 4.Prettier

  4.1. install prettier

` yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

  4.2. config prettier with eslint

  4.2.1. Add on eslintrc item extends

  ```
  prettier/@typescript-eslint
  plugin:prettier/recommended
  ```
4.2.2 add on eslintrc item plugin
```
prettier
```
4.2.3 add on eslintrc item rules
```json
"prettier/prettier":"error"
```
4.2.4 create prettier.config.js file
```js
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  allowParens: 'avoid',
};
```

- - -

## Creating the application

### 1. Create Routes

  Install `react-router-dom` to routes management

  ```sh
  $ yarn add react-router-dom
  $ yarn add @types/react-router-dom -D
  ```
  create routes folder

  create in routes folder index.tsx file

- - -
## Utilizando Styled Components
   Styling the application

   install `styled-components`
   ```sh
    $ yarn add styled-components
    $ yarn add @types/styled-components
   ```

  install `vscode-styled-components` extension

title: {
color: #3a3a3a;
font-size: 48px}

createGlobalStyle: {
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    bo-sizing: border-box;
  }
  body: {
    background: #f0f0f5 url(${github-background} ) no-repeat 70% top
    -webkit-font-smoothing: antialiased;
  }
  body, input, button: {
    font: 16px Roboto, sans-serif
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding 40px 20px;

  }
  button: {
    cursor: pointer;
  }
}



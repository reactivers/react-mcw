# Material Design Web For React
## This repository is under development!

## Description

React-Material-Design-Web includes all recommended components and some extra components may need to you use.

## Requirements
To use React-Material-Design you need to add the following codes into index.html.

```html
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## Installation

```sh
$ npm install --save react-material-design
$ npm start
```

## Usage

```js
import {FABMenu, Card, CardBody} from 'reac-material-design';
import IconButton from 'react-material-design/lib/IconButton';
```

Here is a quick example to get you started:

### index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './appPages/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### App.js

```js
import React from 'react';
import {FABMenu} from 'react-material-design'


const App = () => {
    return (
            <FABMenu showAdd={1}
                     showCopy={2}
                     showDelete={3}
                     showPeopleAdd={4}
                     showSearch={5}
                     onAdd={() => console.log("Whatever you want!")}
            />
    );
};

export default App;

```





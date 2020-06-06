# Input fields for P2PU projects


## Requirements

- Bootstrap CSS
- React

## Usage

### Example

See `demo/src/index.js` for more examples

```js
import React, { useState } from 'react'
import { InputWithLabel } from "p2pu-input-fields"

const Form = () => {
  const [content, setContent] = useState({})
  const handleChange = (newContent) => {
    setContent({
      ...content,
      ...newContent
    })
  }

  return(
    <div className="container">
      <InputWithLabel
        name="text-input-demo"
        label="Text input"
        value={content['text-input-demo']}
        handleChange={handleChange}
        required={true}
      />
    </div>
  )
}

```
All inputs receive the following props:
| Prop | Description |
| ----------- | ----------- |
| `label` (required) | The label for the input |
| `name` (required) | The string will be used as the name and ID for the input, as well as the key in the return value for `handleChange` |
| `value` (required) | The value of the input |
| `handleChange` (required) | The function called when the input value changes. Called with an object `{ [name]: value }` |
| `required` (optional) | When true will add an asterisk to the label and set the HTML input attribute as required |
| `classes` (optional) | Classes to be applied to the wrapper div containing the label and input |

Certain inputs have additional props; check the `propTypes` for more information.

## Development

To develop
```
npm install
npm start
```

To run the demo
```
npm start
```

To build

```
npm run build
```

To publish a new version

Bump version in package.json

```
npm login
npm publish
```

You'll need to right credentials to publish to p2pu-input-fields

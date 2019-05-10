# use2137

> React Hook that listens for user to type 2137 and calls a callback function. Good to hide cenzo easter egg on your website

[![NPM](https://img.shields.io/npm/v/use2137.svg)](https://www.npmjs.com/package/use2137) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use2137
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use2137'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [bimbenders](https://github.com/bimbenders)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

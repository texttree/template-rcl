```jsx
import React from 'react'
import { useWindowScrollPosition } from '@texttree/template-rcl'

const Component = () => {
  const position = useWindowScrollPosition()
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {JSON.stringify(position, null, 2)}
    </div>
  )
}

;<Component />
```

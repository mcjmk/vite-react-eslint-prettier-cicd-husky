import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello from React</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ut dolorem suscipit mollitia
        voluptatum blanditiis, iure atque amet laborum eos cumque doloribus quos? Modi molestias
        corporis, commodi amet eaque eum.{' '}
      </p>
    </div>
  )
}

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<App />)

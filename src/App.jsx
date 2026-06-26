import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [catImage, setCatImage] = useState(null)
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => setCatImage(data[0].url))
  }, [])

  return (
    <>
      <section id="center">
        <h1>A random cat</h1>
        {catImage && <img src={catImage} alt="A cute cat" />}
      </section>
    </>
  )
}

export default App

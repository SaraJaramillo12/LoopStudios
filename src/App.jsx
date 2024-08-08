import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <Header />
     <Section />
     <Gallery />
     <Footer />
    </>
  )
}

export default App

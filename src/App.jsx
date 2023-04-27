import './App.css'
import About from './sections/About'
import Navbar from './sections/Navbar.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects'
import Contact from './sections/Contact.jsx'
import { HashLink as Link } from 'react-router-hash-link'
function App() {

  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App

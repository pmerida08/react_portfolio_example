import ReactDOM from 'react-dom/client'
import { NavBar } from './NavBar'
import { About } from './About'
import { Projects } from './Projects'
import { Contact } from './Contact'

import './styles.css'


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <>
    <NavBar />
    <About />
    <Projects />
    <Contact />
  </>
)
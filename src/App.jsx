
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import {Routes,Route} from 'react-router-dom'
import Detils from './components/Details.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
  
<Navbar />

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/product/:prodId' element={<Detils/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='*' element={<h2>page not found</h2>}></Route>
</Routes>

<Footer />
</>
   
  )
}

export default App

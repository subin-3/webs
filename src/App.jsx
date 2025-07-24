import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold hover:bg-black inline text-red-500">
      <BrouserRouter>
      <Routes>
        <Route path="/"element={Layout} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        
        
        </Route>
      </Routes>
      </BrouserRouter>


  </h1>
    </>
  )
}

export default App

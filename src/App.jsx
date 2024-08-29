import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, Saved } from './Pages'

function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/saved' element={<Saved/>}/>
       </Routes>
    </>
  )
}

export default App

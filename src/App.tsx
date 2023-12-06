import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<LoginForm/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App

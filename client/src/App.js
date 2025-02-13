import React from 'react'
import ProductForm from './components/ProductForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Error from './components/Error'
import Landing from './components/Landing'
import {HashRouter as Router,Routes,Route} from 'react-router-dom'


export default function App() {
  return (
    <main>
      <h1 className='title' style={{textAlign:"center", paddingTop:"20px", paddingBottom:"20px"}}>Product Management System</h1>
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/*' element={<Error/>}/>
            <Route path='/' element={<Landing/>}/>
            <Route path='/view' element={<ProductList/>}/>
            <Route path='/add' element={<ProductForm/>}/>
          </Routes>
        </Router>
      </div>
    </main>
  )
}

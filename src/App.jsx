import {Routes , Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login';
import Home from './components/Home';
import Cart from './components/Cart'
import Orders from './components/Orders';
import ProductPage from './components/ProductPage';
import GlobalProvider from './context/GlobalState';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <Home/>
            <Footer/>
          </>
        }/><Route path='/cart' element={
          <>
            <Header/>
            <Cart/>
            <Footer/>
          </>
        }></Route>
        <Route path="/orders" element={
          <>
            <Header/>
            <Orders/>
            <Footer/>
          </>
        }></Route>
        <Route path='/product/:id' element={
          <>
            <Header/>
            <ProductPage/>
            <Footer/>
          </>
        }>

        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App

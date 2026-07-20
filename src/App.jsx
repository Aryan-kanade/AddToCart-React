import {Routes, Route} from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"

function App(){
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
    </>
  )
}

export default App
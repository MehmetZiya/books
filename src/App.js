import React, {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom" ;
import BookList from "./components/BookList";
import Header from "./components/Header" ;
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import BookContextProvider from "./context/BookContext";
import Description from "./components/Description";


function App() {
  
  const [ showCart, setShowCart ] = useState(false);
  const handleShowCart = () => {
      setShowCart(!showCart);
  };

  
  return (
    <div className="App"> 
      <BookContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Header showCart ={handleShowCart}/>
            { showCart && <Cart closeCart ={handleShowCart} />}
            <Route exact path="/">
                 <BookList /> 
            </Route>
            <Route exact path="/details/:bookId">
              <Description />
            </Route>
          </BrowserRouter>
        </CartContextProvider>
      </BookContextProvider>
    </div>
  );
}

export default App;

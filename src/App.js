import React, {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom" ;
import BookList from "./components/BookList";
import Header from "./components/Header" ;
import Cart from "./components/Cart";
import booksJSON from './books.json' ;
import CartContextProvider from "./context/CartContext";
import Description from "./components/Description";


function App() {
  
  const [ showCart, setShowCart ] = useState(false);
  const [books] = useState(booksJSON);
  const handleShowCart = () => {
      setShowCart(!showCart);
  };

  return (
    <div className="App"> 
        <CartContextProvider>
          
          <BrowserRouter>
            <Header showCart ={handleShowCart}/>
            { showCart && <Cart closeCart ={handleShowCart} />}
            <Route exact path="/">
                 <BookList books ={books}/> 
            </Route>
            <Route exact path="/details/:bookId">
              <Description  books ={books}/>
            </Route>
          </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

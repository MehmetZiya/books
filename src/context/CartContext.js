import React ,{ createContext, useState } from 'react' ;


export const CartContext = createContext();

const CartContextProvider = (props) => {

    
    const [ cartItems, setCartItems ] = useState([]);
    const totalBookQty = cartItems.reduce((a , b) => a + b.qty, 0);
    const totalPrice = cartItems.reduce((a, b) => a + b.qty * b.price, 0).toFixed(2);
   

    const addBookToCart = (book) => {
        const exist = cartItems.find( x => x.id === book.id);
        if(exist){
            setCartItems( cartItems.map( (x) => 
            x.id === book.id ? { ...exist, qty: exist.qty + 1} : x))
        } else {
            setCartItems([...cartItems, {...book, qty: 1}]);
        }    
    };

    const removeBookFromCart = (book) => {
        const exist = cartItems.find( x => x.id === book.id);
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== book.id));
        } else {
            setCartItems( cartItems.map( (x) => 
            x.id === book.id ? { ...exist, qty: exist.qty -1} : x));
        } 
    };
    

    const values = { cartItems, addBookToCart, removeBookFromCart, totalBookQty , totalPrice}       
    return (
        <CartContext.Provider value= {values}  >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider ;
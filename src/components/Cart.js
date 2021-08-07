import React ,{ useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/Cart.module.css"
const Cart = (props) => {
    const {cartItems , addBookToCart, removeBookFromCart, totalBookQty, totalPrice} = useContext(CartContext);

    return (
        <div className ={styles.cartBox}>
            <span onClick ={props.closeCart} className ={styles.close}> x </span>
            {cartItems.length === 0 && <div className = {styles.cartItems}>Cart is empty!</div> }
            {cartItems && cartItems.map(( book) => (
                <div key={book.id} className = {styles.cartItems}>
                    <div className={styles.cartImg}><img src={book.img} alt={book.name} /></div>
                    <div className = {styles.name}> <p><b>{book.name}</b></p> <p>{book.author}</p></div>
                    <div className={styles.cartInfo}>
                        <div > <span className = {styles.qty}> x {book.qty}</span></div>
                        <div>
                            <button className ={styles.btn} onClick ={()=>removeBookFromCart(book)}><span className ={styles.span}>-</span></button>
                            <button className ={styles.btn} onClick = {()=>addBookToCart(book)}><span className ={styles.span}>+</span></button>
                        </div>
                        <div>
                            <b>{(book.price * book.qty).toFixed(2)} ₺</b>
                        </div>
                    </div>
                    
                </div>
            ))}
            <div className = {styles.cartItems}>
                <p>Total Book quantity : <b>{totalBookQty}</b> </p> 
                <p>Total Price : <b>{totalPrice} ₺</b></p>
            </div>
            <div>
                {cartItems.length !== 0 && <button className={styles.checkBtn}>Checkout</button>}
                <button className={styles.closeBtn} onClick ={props.closeCart}>Close</button>
            </div>
            
        </div> 
    );
}
 
export default Cart;
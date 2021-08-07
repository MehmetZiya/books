import React,{ useContext, useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import {CartContext} from "../context/CartContext" ;
import styles from "../styles/CartButton.module.css" ;


const  CartButton = (props) => {
    const {totalBookQty, cartItems}  = useContext(CartContext);
    const [ btnAnimated , setBtnAnimated ] = useState(false);
    const btnClasses = `${styles.button} ${btnAnimated ? styles.bump : ""}`;

    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }
        setBtnAnimated(true);

        const timer = setTimeout(() => {
            setBtnAnimated(false);
        }, 200);

        return ()=>{
            clearTimeout(timer);
        }
    }, [cartItems]);
    
    return ( 
        <div>
            <div className ={btnClasses} onClick={props.onShow}>
                <span className ={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Basket :</span>
                <span className ={styles.badge}> {totalBookQty}</span>
            </div> 
        </div>
        
    );
};
 
export default CartButton;
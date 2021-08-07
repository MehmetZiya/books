import React from 'react';
import CartButton from "./CartButton";
import styles from "../styles/Header.module.css";
import { Link } from 'react-router-dom';


const Header = (props) => {
    
    return ( 
        <div className ={styles.header}>
            <Link to="/"><h1 >Book Store </h1></Link>
            <CartButton onShow = {props.showCart}/>
        </div> 
    );
}
 
export default Header;
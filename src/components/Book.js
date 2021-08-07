import React ,{ useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styles from "../styles/Book.module.css" ;

const Book = (props) => {
  const {addBookToCart} = useContext(CartContext);
  const history = useHistory();

  const showBookDesc = (e) => {
    
    if(e.target.nodeName === 'BUTTON'){
      return;
    }
    history.push(`/details/${props.book.id}`);
  }

  const addToCart = (e) => {
    e.preventDefault();
    addBookToCart(props.book);
  }

  return (
    <div className ={styles.bookCard} onClick= {showBookDesc}>
      <div>
        <div className={styles.head}>
          <h3>{props.book.name}</h3>
          <p>{props.book.author}</p>
        </div>
        <img src={props.book.img} alt={props.book.name} className={styles.bookCover}/>
      </div>
      <div className={styles.buttom}>
        <p>{props.book.price.toFixed(2)} ₺</p>
        <button onClick={addToCart} className={styles.addBasket} >Add +</button>
      </div>
    </div>
  );
};

export default Book;

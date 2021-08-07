
import React from "react" ;
import Book from "./Book";
import styles from "../styles/BookList.module.css" ;


const BookList = (props) => {
    return ( 
        <div className={styles.card}>
            {props.books.map( (book) => (
                <Book book={book} key={book.id}/>
            ))}
        </div>
        
     );
}
 
export default BookList;
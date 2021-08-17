
import { useContext } from "react" ;
import Book from "./Book";
import styles from "../styles/BookList.module.css" ;
import { BookContext } from '../context/BookContext';

const BookList = () => {
    const {books} = useContext(BookContext);
    return ( 
        <div className={styles.card}>
            {books.map( (book) => (
                <Book book={book} key={book.id}/>
            ))}
        </div>
        
     );
}
 
export default BookList;
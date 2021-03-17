import { BookContext } from "../context/BookContext";
import { useContext } from "react" ;
import Book from "./Book";
import { card } from "../styles/BookList.module.css" ;

const BookList = () => {

    const {books} = useContext(BookContext);

    return ( 
        <div className={card}>
            {books.map( (book) => (
                <Book book={book} key={book.id}/>
            ))}
        </div>
        
     );
}
 
export default BookList;
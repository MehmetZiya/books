//import { useContext } from "react" ;
//import { BookContext } from "../context/BookContext" ;
import { bookCover } from "../styles/Book.module.css" ;

const Book = ({ book }) => {
  return (
    <div>
      <h1>{book.name}</h1>
      <h2>{book.author}</h2>
      <img src={book.img} alt={book.name} className={bookCover}/>
    </div>
  );
};

export default Book;
